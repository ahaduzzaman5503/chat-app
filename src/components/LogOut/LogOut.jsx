import React from "react";
import { auth } from "../../firebase";

const LogOut = () => {  
    const signOut = () => {
        signOut(auth)
    }
  return (
    <div>
      <button 
      onClick={() => auth.signOut()}
      className="border p-1 my-1 rounded-md shadow-2xl font-bold">Log Out</button>
    </div>
  );
};

export default LogOut;
