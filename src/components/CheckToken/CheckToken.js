import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const CheckToken = ({ category, accessToken, children }) => {
    const { push } = useHistory();
    useEffect(() => {
        console.log(`useEffect!!${category}`);
        if (accessToken === "") {
            push("/");  
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [accessToken]);
    if ((accessToken !== "" && category === "main") || (accessToken === "" && category === "landing" ))  {
            return children;
    }
    return (<></>);
};
    
export default CheckToken;