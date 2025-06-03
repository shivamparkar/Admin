import "./navbar.scss";

import { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";


export const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const ThemeSwitch = styled(Switch)(({ theme }) => ({
    width: 50,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 1,
      '&.Mui-checked': {
        transform: 'translateX(24px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#000000',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      width: 24,
      height: 24,
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 14,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: '#ccc',
      opacity: 1,
    },
  }));


  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Admin</span>
      </div>
      <div className="icons">
        {/* <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" /> */}
        <ThemeSwitch
          checked={darkMode}
          onChange={toggleTheme}
          icon={<span>🌞</span>}
          checkedIcon={<span>🌙</span>}
        />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          {/* <img
            src="https://lh3.googleusercontent.com/ogw/AF2bZyjcy503LE5pHPcXZyeH6MtyrHADkL-YKwaoG5rk_CEjxcE=s64-c-mo"
            alt=""
          /> */}
        </div>
        <span>SP</span>
       
      </div>
    </div>
  );
};
