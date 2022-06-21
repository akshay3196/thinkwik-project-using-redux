import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { passwordState, usernameState } from "./atoms/credentialAtom";

//redux
import { useSelector, useDispatch } from 'react-redux'
import { setPassword, setUsername } from "./redux/credentialSlice";

const Login = () => {
  // const [email, setEmail] = useRecoilState(usernameState);
  // const [password, setPassword] = useRecoilState(passwordState);
  const dispatch = useDispatch()
const email = useSelector(state => state.credentials.username )
const password = useSelector(state => state.credentials.password )




  const [incorrect, setIncorrect] = useState(false);

  const router = useNavigate();

  const check = (e) => {
    e.preventDefault();
    if (email === "username-test@yopmail.com" && password === "123456") {
      router("/MainPage");
    } else {
      setIncorrect(true);
      console.log("Login failed");
    }
  };
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center  ">
      <h1 className="text-3xl font-bold">Sign in</h1>
      <div className="w-1/2 h-1/2 border p-2 rounded-lg flex flex-col justify-center items-center hover:shadow-xl shadow-black hover:transition-all">
        <form className="w-full flex flex-col justify-center items-center space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-1/2 p-2 border outline-none"
            value={email}
            //onChange={(e) => setEmail(e.target.value)}
            onChange={(e)=> dispatch(setUsername(e.target.value)) }
          />
          <input
            type="password"
            placeholder="Password"
            className="w-1/2 p-2 border outline-none"
            value={password}
            //onChange={(e) => setPassword(e.target.value)}
            onChange={(e)=> dispatch(setPassword(e.target.value)) }
          />
          <div className="space-x-10">
            <button
              className=" font-bold rounded-full py-2 px-5  active:scale-95 active:border-lime-500 hover:scale-105 text-white bg-blue-500"
              onClick={check}
            >
              Log In
            </button>
            <button
              className=" font-bold rounded-full py-2 px-5  active:scale-95 active:border-lime-500 hover:scale-105 text-white bg-blue-500"
              onClick={() => {
               // setEmail("");
               // setPassword("");
               dispatch(setUsername(''))
               dispatch(setPassword(''))
                router("/Signup");
              }}
            >
              Sign up
            </button>
          </div>
        </form>
        {incorrect && (
          <p className="mt-10 text-red-500 font-semibold">
            Nah mate, put the correct creds. (Clue: username-test@yopmail.com |
            123456 )
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
