import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const userLogin = async (e) => {
    if (
      userName.trim() === "" ||
      password.trim() === "" ||
      userName.trim() === "" ||
      fullName.trim() === "" ||
      phoneNumber.trim() === ""
    ) {
      return alert("Please fill in the missing fields");
    }
    setError("");
    try {
      setloading(true);
      e.preventDefault();
      const response = await axios.post("http://localhost:9000/user/register", {
        username: userName,
        phone_number: phoneNumber,
        password: password,
        email: email,
        full_name: fullName, 
      });
      if (response.status === 201) {
        console.log(response.data);
        Cookies.set("user", JSON.stringify(response.data), {
          sameSite: "None",
        });
        window.location.href = "/home";
      }
    } catch (error) {
      console.log(error);
      setError("Authentication failed");
    } finally {
      setloading(false);
    }
  };
  return (
    <div className=" w-full grid lg:grid-cols-2 grid-cols-1 items-center justify-center min-h-screen">
        <div className="lg:flex hidden w-full">
        <img
          src="/src/assets/bgemma.jpg"
          alt="bg Image"
          loading="lazy"
          className=" object-cover w-full h-screen"
        />
      </div>
      <div className="bg-blue-800 text-white h-full w-full flex items-center justify-center">
        <div className="grid gap-2 w-full max-w-full md:max-w-xs px-4">
          <span className=" font-bold">Username</span>
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            name=""
            id=""
            className=" text-black focus:outline-none p-2 rounded-md w-full"
          />

          <span className=" font-bold">Phone Number</span>
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            name=""
            id=""
            className=" text-black focus:outline-none p-2 rounded-md w-full"
          />
          <span className=" font-bold">Full name</span>
          <input
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            name=""
            id=""
            className=" text-black focus:outline-none p-2 rounded-md w-full"
          />
          <span className=" font-bold">Email</span>
          <input
            onChange={(e) => setEmail(e.target.value)}
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
              Register
            </button>
          )}
          <span>{error}</span>
          <Link to={'/'} className=" text-center">Already have an account? Login </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
