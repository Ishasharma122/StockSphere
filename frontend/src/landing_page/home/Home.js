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
          { withCredentials: true },
        );

        const { status, user } = data;

        if (status) {
          setUsername(user);
          const showToast = localStorage.getItem("showWelcomeToast");
          if (!showToast) {
            toast(`Hello ${user}`, { position: "top-right" });
            localStorage.setItem("showWelcomeToast", "true"); 
          }
        } else {
          removeCookie("token");
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("showWelcomeToast");
          navigate("/");
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        removeCookie("token");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("showWelcomeToast");
        navigate("/login");
      }
    };

    verifyCookie();
  }, [isLoggedIn, navigate, removeCookie]);

  return (
    <>
      <ToastContainer />
    </>
  );
};

export default Home;
