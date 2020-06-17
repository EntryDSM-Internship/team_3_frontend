import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const CheckToken = ({ alertOn, category, token, setToken, children }) => {
    const { push } = useHistory();
  if (category === '/landing' || ((token.refresh_token !== "" && token.refresh_token !== null) && category === "main") || ((token.refresh_token === "" || token.refresh_token === null) && (category === "/" || category === "landing"))) {
      return children;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
        if ((token.refresh_token !== "" && token.refresh_token !== null) && token.refresh_token !== undefined) {
          axios({
            url: "http://13.125.249.23/auth/refresh",
            method: "patch",
            headers: {
              "X-refresh-token": token.refresh_token
            }
          })
            .then(res => {
              localStorage.setItem('access_token', res.data.access_token);
              localStorage.setItem('refresh_token', res.data.refresh_token);
              setToken({
                "access_token": res.data.access_token,
                "refresh_token": res.data.refresh_token
              });
            })
            .catch(err => {
              setToken({
                "access_token": "",
                "refresh_token": ""
              });
            });
        }
        if (token.refresh_token === "" || token.refresh_token === undefined || token.refresh_token === null) {
          if (alertOn)
              alert('로그인을 해주세요.');
            push("/");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (<></>);
};
    
export default CheckToken;  