import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./profile.scss";

const Profile = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    new: false,
    confirm: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { postData } = useFetch("https://dummyapi.io/api/profile");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = (field: "new" | "confirm") => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.newPassword.trim()) {
      newErrors.newPassword = "New password is required.";
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters.";
    }

    if (formData.confirmPassword !== formData.newPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    postData({ newPassword: formData.newPassword }); 
    alert("password Updated");
  };

  const name = "Shivam";

  return (
    <>
      <div className="profile">
        <h2>{name}'s Profile</h2>
      </div>

      <form className="profilecontent" onSubmit={handleSubmit}>
        <div className="section">
          <div className="upper">
            <h3>Change Password</h3>
            <div className="t">
              <button type="submit">Save Password</button>
            </div>
          </div>

          <div className="personalinfo">
            {/* New Password */}
            <div className="field">
              <label>New Password</label>
              <div className="password-input">
                <input
                  type={showPassword.new ? "text" : "password"}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
                <span
                  className="toggle-eye"
                  onClick={() => togglePasswordVisibility("new")}
                >
                  {showPassword.new ? "🙈" : "👁️"}
                </span>
              </div>
              {errors.newPassword && (
                <span className="error">{errors.newPassword}</span>
              )}
            </div>

            {/* Confirm Password */}
            <div className="field">
              <label>Confirm Password</label>
              <div className="password-input">
                <input
                  type={showPassword.confirm ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <span
                  className="toggle-eye"
                  onClick={() => togglePasswordVisibility("confirm")}
                >
                  {showPassword.confirm ? "🙈" : "👁️"}
                </span>
              </div>
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )}
            </div>
          </div>

          <div className="submit-section"></div>
        </div>
      </form>
    </>
  );
};

export default Profile;
