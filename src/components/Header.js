import React from "react";
import { useNavigate } from "react-router-dom";
// import { useRecoilState } from "recoil";
// import { passwordState, usernameState } from "../atoms/credentialAtom";

//redux
import { useSelector, useDispatch } from 'react-redux'
import { setPassword, setUsername } from "../redux/credentialSlice";


const Header = () => {
  // const [email, setEmail] = useRecoilState(usernameState);
  // const [password, setPassword] = useRecoilState(passwordState);


  const dispatch = useDispatch()
  const email = useSelector(state => state.credentials.username )
  const password = useSelector(state => state.credentials.password )

  const router = useNavigate();


  const handleLogout = () => {
    // setEmail("");
    // setPassword("");

    dispatch(setUsername(''))
    dispatch(setPassword(''))

    router("/");
  };

  return (
    <div className="top-0 border-b-2 h-20 p-3 flex items-center justify-between ">
      <div>
        <button
          className="p-2 bg-red-500 text-white hover:scale-105 rounded-lg"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
      <div>
        User : <span className="text-lg font-bold">{email} </span>
      </div>
    </div>
  );
};

export default Header;
