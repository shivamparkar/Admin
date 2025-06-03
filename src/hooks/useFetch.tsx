import { useState, useEffect, useCallback } from "react";
import axios, { AxiosError } from "axios";

// Interface for the hook's result
interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
  getData: () => Promise<void>; // Explicitly expose getData for manual refresh if needed by component
  postData: (payload: any) => Promise<void>;
  updateData: (id: string | number, payload: any) => Promise<void>; // For generic PUT, if needed by other components
  deleteData: (id: string | number) => Promise<void>;
  approveData?: (id: string | number) => Promise<void>; // Optional, for leave management
  rejectData?: (id: string | number) => Promise<void>;  // Optional, for leave management
}

const useFetch = <T = any>(baseUrl: string): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true); // Initial loading state
  const [error, setError] = useState<AxiosError | null>(null);

  const getData = useCallback(async () => {
    
    setLoading(true);
    try {
      const res = await axios.get(baseUrl);
      setData(res.data);
      setError(null);
    } catch (err) {
      setError(err as AxiosError);
    } finally {
      setLoading(false);
    }
  }, [baseUrl]);

  useEffect(() => {
    getData();
  }, [getData]); 

  const postData = async (payload: any) => {
    setLoading(true);
    try {
      await axios.post(baseUrl, payload);
      setError(null);
      await getData(); 
    } catch (err) {
      console.error(`Error posting data to ${baseUrl}:`, err);
      setError(err as AxiosError);
      throw err; 
    } finally {
     
    }
  };

  const updateData = async (id: string | number, payload: any) => {
    setLoading(true);
    try {
      await axios.put(`${baseUrl}/${id}`, payload);
      setError(null);
      await getData(); 
    } catch (err) {
      console.error(`Error updating data at ${baseUrl}/${id}:`, err);
      setError(err as AxiosError);
      throw err;
    } finally {
      // setLoading(false);
    }
  };
  
  const deleteData = async (id: string | number) => {
    setLoading(true);
    try {
      await axios.delete(`${baseUrl}/${id}`);
      setError(null);
      await getData(); // Refresh data
    } catch (err) {
      console.error(`Error deleting data at ${baseUrl}/${id}:`, err);
      setError(err as AxiosError);
      throw err;
    } finally {
      // setLoading(false);
    }
  };

  // Specific for LeaveRequest: Approve
  const approveData = async (id: string | number) => {
    setLoading(true);
    try {
      // Assumes baseUrl for LeaveRequest is like "/api/LeaveRequest"
      await axios.put(`${baseUrl}/Approve/${id}`);
      setError(null);
      await getData(); // Refresh data
    } catch (err) {
      console.error(`Error approving data at ${baseUrl}/Approve/${id}:`, err);
      setError(err as AxiosError);
      throw err;
    } finally {
      // setLoading(false);
    }
  };

  // Specific for LeaveRequest: Reject
  const rejectData = async (id: string | number) => {
    setLoading(true);
    try {
      await axios.put(`${baseUrl}/Reject/${id}`);
      setError(null);
      await getData(); // Refresh data
    } catch (err) {
      console.error(`Error rejecting data at ${baseUrl}/Reject/${id}:`, err);
      setError(err as AxiosError);
      throw err;
    } finally {
      // setLoading(false);
    }
  };

  return { 
    data, 
    loading, 
    error, 
    getData, 
    postData, 
    updateData, 
    deleteData,
    approveData,
    rejectData
  };
};

export default useFetch;
