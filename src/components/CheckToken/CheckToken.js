import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axios from 'axios';

const CheckToken = ({ category, refreshToken, children }) => {
    const { push } = useHistory();
    useEffect(() => {
        Axios({
            'url': 'http://13.125.249.23/auth/refresh',
            'method': 'patch',
            'header': refreshToken
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);   
        })
        console.log(`useEffect!!${category}`);
        if (refreshToken === "") {
            push("/");  
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [refreshToken]);
    if ((refreshToken !== "" && category === "main") || (refreshToken === "" && category === "landing" ))  {
            return children;
    }
    return (<></>);
};
    
export default CheckToken;