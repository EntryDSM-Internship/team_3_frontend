import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const CheckToken = ({ accessToken, children }) => {
    const { push } = useHistory();
    console.log(accessToken);
    useEffect(() => {
        if (accessToken === "") {
            push("/");
        }
    }, [accessToken]);
    return children;
};

export default CheckToken;