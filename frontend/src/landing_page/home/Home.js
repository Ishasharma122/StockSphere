import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState(""); 
  
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
        return; 
      }
      
      try {
          const { data } = await axios.post(
            "http://localhost:3002",
            {},
            { withCredentials: true }
          );
          
          const { status, user } = data;
          
          if (status) {
              setUsername(user);
              toast(`Hello ${user}`, {
                  position: "top-right",
              });
          } else {
              removeCookie("token");
              navigate("/login");
          }
      } catch (error) {
          console.error("Authentication check failed:", error);
          removeCookie("token");
          navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  return (
    <>
      <ToastContainer />
    </>
  );
};

export default Home;