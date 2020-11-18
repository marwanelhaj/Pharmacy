import React, { createContext, useState } from "react";

export const VirtualPharmaContext = createContext();

const VirtualPharmaContextProvider = (props) => {
  const [userName, setUserName] = useState("info@virtupharma.com.au");
  const [userEmail , setUserEmail] = useState(null);
  const [isLogin , setIsLogin] = useState(false);
  const [userRole , setUserRole] = useState(null);
  const[userID , setUserID] = useState(null);
  const [userInfo , setUserInfo] = useState(null);

  const setUser = (user) => {
    setUserName(user);
  };

 

  return (
    <VirtualPharmaContext.Provider value={{userName, isLogin, userRole, userID ,userEmail , userInfo , setUser ,setIsLogin , setUserRole , setUserID , setUserEmail , setUserInfo}}>
      {props.children}
    </VirtualPharmaContext.Provider>
  );
};

export default VirtualPharmaContextProvider;
