import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  const isLoggedIn = localStorage.getItem("isLoggedIn"); 

  useEffect(() => {
    const verifyCookie = async () => {

      if (!isLoggedIn) { 
        navigate("/login");
        return;
      }

      try {
        const { data } = await axios.post(
          "https://stocksphere-backend-nhsr.onrender.com",
          {},
          { withCredentials: true }
        );

        const { status, user } = data;

        if (status) {
          setUsername(user);
          toast(`Hello ${user}`, { position: "top-right" });
        } else {
          removeCookie("token");
          localStorage.removeItem("isLoggedIn");
          navigate("/login");
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        removeCookie("token");
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
      }
    };

    verifyCookie();
  }, [isLoggedIn, navigate, removeCookie]);

  return (
    <>
      <ToastContainer />
      <h1>Welcome {username}</h1>
    </>
  );
};

export default Home;
