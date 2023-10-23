import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const[error,setError]=useState("");
  const userLogin = async (e) => {
    if (username === "" || password === "") {
      return alert("Please fill in the missing fields");
    }
    setError("")
    try {
      setloading(true);
      e.preventDefault();
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      if (response.status === 200) {
        window.location.href = "/home";
      }
    } catch (error) {
      console.log(error);
      setError("Authentication failed")
    } finally {
      setloading(false);
    }
  };
  return (
    <div className=" w-full grid lg:grid-cols-2 grid-cols-1 items-center justify-center min-h-screen">
      <div className="bg-blue-800 text-white h-full w-full flex items-center justify-center">
        <div className="grid gap-2 w-full max-w-full md:max-w-xs px-4">
          <span className=" font-bold">Username</span>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name=""
            id=""
            className=" text-black focus:outline-none p-2 rounded-md w-full"
          />

          <span className=" font-bold">Password</span>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name=""
            id=""
            className=" text-black focus:outline-none p-2 rounded-md w-full"
          />

          {loading ? (
            <button
              disabled
              onClick={userLogin}
              className=" w-full bg-blue-900 border font-semibold flex items-center justify-center border-gray-500 active:scale-95 duration-200 p-2 rounded-md mt-4"
            >
              <div className="w-7 h-7 border-2 border-t-blue-900 animate-spin rounded-full"></div>
            </button>
          ) : (
            <button
              onClick={userLogin}
              className=" w-full bg-blue-900 border font-semibold border-gray-500 active:scale-95 duration-200 p-2 rounded-md mt-4"
            >
              Login
            </button>
          )}
          <span>{error}</span>
        </div>
      </div>
      <div className="lg:flex hidden w-full">
        <img src="/src/assets/bgemma.jpg" alt="bg Image" loading="lazy" className=" object-cover w-full h-screen"/>
      </div>
    </div>
  );
};

export default Login;
