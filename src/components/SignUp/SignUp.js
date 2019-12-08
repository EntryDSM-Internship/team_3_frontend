import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SignUp.scss';
import EmailInfo from './EmailInfo';
import VerificationCode from './VerificationCode';
import Name from './Name';
import PassWorrd from './PassWord';
import ProfileImage from './ProfileImage';
import Introduce from './Introduce';
import Success from './Success';

const SignUp = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      goNextPage();
    }
    const error = function () {
      let div = document.querySelector(".signInfo > div").childNodes;
      div[2].style.border = "1.5px solid red";
    }
    const [time, setTime] = useState({
      minute: 3,
      second: 0,
    });
    const URL =
      "http://52.79.228.100";
    const [page, setPage] = useState(1);
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [inputState, setInputState] = useState({
      state: []
    });
    const [info, setInfo] = useState({
      email: '',
      password: '',
      username: '',
      introduction: null, 
      profileImg: null
    });
    const pageList = [1, 2, 3, 4, 5, 6, 7];
    const goNextPage = () => {
      setInputState({
        state: []
      });
      switch (page) {
        case 1:
          axios({
            method: "post",
            url: `${URL}/auth/email-check`,
            data: {
              email: info.email
            }
          }).then(res => {
            console.log(res);
              setPage(page + 1);
            }).catch(err => {
              setInputState({
                state: ["잘못된 형식의 이메일입니다."]
              });
              console.log(err);
              error();
            });
          break;
        case 2:
          axios({
            method: "patch",
            url: `${URL}/auth/email-check`,
            data: {
              authcode: code,
              email: info.email
            }
            //KJHBNMJH
          }).then(res => {
            document.cookie = `access_token=${res.data.token}`;
              setPage(page + 1);
            }).catch(err => {
              setPage(page + 1);
               setInputState({
                 state: ["잘못된 인증코드입니다."]
               });
              error();
            });
          break;
        case 3:
          setPage(page + 1);
          break;
        case 4:
          if (info.password === password)
            setPage(page + 1);
          else {
            setInputState({
              state: [
                "입력하신 비밀번호와 일치하지 않습니다."
              ]
            });
            let div = document.querySelector(".signInfo > div").childNodes;
            div[2].style.border = "1.5px solid red";
            document.querySelectorAll('input').forEach((e, index) => {
              if (index === 0) {

              } else if (index === 1)
                e.value = "";
            });
          }
          break;
        case 5:
          setPage(page + 1);
          break;
        case 6:
          info.profileImg.append('email', info.email);
          info.profileImg.append('password', info.password);
          info.profileImg.append('username', info.username);
          info.profileImg.append('introduction', info.introduction);
          const a = document.cookie.split(';')[1].split('=')[1];

          axios.post(`${URL}/auth/signup`, info.profileImg, {
            headers: {
              'Authorization': a,
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(res => {
            setPage(page + 1);
          }).catch(err => {
            setInputState({
              state: ["잘못된 인증코드입니다."]
            });
            error();
          });
          break;
        case 7:
          setPage(page + 1); 
          break;
        default:
          break;
      }
    }
    const goPrevPage = () => {
      setInputState({
        state: []
      });
      if (page !== 1) {
        setPage(page - 1);
      }
    };
    
    useEffect(() => {
      const nextButton = document.querySelectorAll(".footer button")[1];
      if (page === 7) {
        document.querySelectorAll(".signUp  img")[0].style.visibility = "hidden";
        document.querySelectorAll(".signUp  img")[1].style.visibility = "hidden";
        document.querySelectorAll(".footer  button")[0].style.visibility = "hidden";
        nextButton.innerText = "완료";
      } else if (page === 5 || page === 6) {
        document.querySelectorAll(".signUp  img")[1].style.visibility = "inherit";
      } else if (page !== 5 || page !== 6) {
        document.querySelectorAll(".signUp  img")[1].style.visibility = "hidden";
      } else {
        nextButton.innerText = "다음"
      }
      document.querySelectorAll('input').forEach((e, index) => {
        let div = document.querySelector(".signInfo > div").childNodes;
        if (page !== 5) {
          e.addEventListener('focus', () => {
            if (inputState.state.length === 0) {
              if (index === 0)
                div[2].style.border = "1.5px solid blue";
              else if (index === 1)
                div[4].style.border = "1.5px solid blue";
            } else
              if (index === 0) {
                e.value = "";
                div[2].style.border = "1.5px solid red";
              } else if (index === 1)
                div[4].style.border = "1.5px solid blue";
          });
          e.addEventListener("blur", () => {
            if (inputState.state.length === 0) {
              if (index === 0) {
                div[2].style.border = "none";
                div[2].style.borderBottom = "1.5px solid #818181";
              }
              else if (index === 1) {
                div[4].style.border = "none";
                div[4].style.borderBottom = "1.5px solid #818181";
              }
            } else
              if (index === 0)
                div[2].style.border = "1px solid red";
              else if (index === 1)
                div[4].style.borderBottom = "1.5px solid #818181";
          }); 
        }
      });
    }, [code, info, page, inputState]);
    
    return (
      <div className="main">
        <div className="signUp">
          <Link to="/landing">
            <img
              className="back"
              src={require("../../img/SignUp/goFirstPage.png")}
              alt="뒤로가기"
            />
          </Link>
          <img
            className="skip"
            src={require("../../img/SignUp/skip.png")}
            alt="건너뛰기"
            onClick={goNextPage}
          />
          <div className="signInfo">
            {(page === 1 && (
              <EmailInfo
                Info={info}
                setInfo={setInfo}
                InputState={inputState}
                setInputstate={setInputState}
                onSubmit={handleSubmit}
              />
            )) ||
              (page === 2 && (
                <VerificationCode
                  Code={code}
                  setCode={setCode}
                  InputState={inputState}
                  setInputstate={setInputState}
                  time={time}
                  setTime={setTime}
                onSubmit={handleSubmit}
                />
              )) ||
              (page === 3 && (
                <Name
                  Info={info}
                  setInfo={setInfo}
                  InputState={inputState}
                  setInputstate={setInputState}
                onSubmit={handleSubmit}
                />
              )) ||
              (page === 4 && (
                <PassWorrd
                  Info={info}
                  setInfo={setInfo}
                  InputState={inputState}
                  setPassword={setPassword}
                  passWorrd={PassWorrd}
                onSubmit={handleSubmit}
                />
              )) ||
              (page === 5 && (
                <ProfileImage
                  info={info}
                  setInfo={setInfo}
                />
              )) ||
              (page === 6 && <Introduce setInfo={setInfo} info={info} />) ||
              (page === 7 && (
                <Success
                  Info={info}
                  setInfo={setInfo}
                  InputState={inputState}
                  setInputstate={setInputState}
                onSubmit={handleSubmit}
                />
              ))}
          </div>
          <div className="footer">
            <button
              onClick={goPrevPage}
              className={page === 1 ? "prevBtn hidden" : "prevBtn"}
            >
              이전
            </button>
            <div className="page-state">
              {pageList.map(value => (
                <div
                  key={value}
                  className={page === value ? "on" : "off"}
                ></div>
              ))}
            </div>
            <Link to={page === 7 ? "/home" : "signup"}>
              <button onClick={goNextPage} className="nextBtn">
                다음
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default SignUp;