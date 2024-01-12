import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ component }) => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //check token in local storage
    const checkToken = async () => {
      try {
        let token = localStorage.getItem("token");
        if (!token) {
          navigate(`/login`);
        }
        setStatus(true);
        return;
      } catch (error) {
        navigate(`/login`);
      }
    };
    checkToken();
  }, []);

  return status ? <>{component}</> : <> </>;
};

export default AuthGuard;
