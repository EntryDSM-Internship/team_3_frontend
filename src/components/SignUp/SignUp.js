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
      if (page === 4) {
        var chk_num = e.target.childNodes[0].value.search(/[0-9]/g);
        var chk_eng = e.target.childNodes[0].value.search(/[a-z]/ig);
        if (chk_num < 0 || chk_eng < 0) alert('비밀번호가 조건에 맞지 않습니다');
      }
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
    const [countDown, setCountDown] = useState(false);
    const URL =
      "http://13.125.249.23";
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
  const useTimer = (m, s) => {
    let minute = m, second = s;
    const timer = setInterval(() => {
      if (minute === 0 && second === 0) {
        clearInterval(timer);
      } else if (second === 0) {
        second += 59;
        minute -= 1;
        setTime(time => {
          return {
            minute: time.minute - 1,
            second: time.second + 59
          }
        });
      } else {
        second -= 1;
        setTime(time => {
          return {
            minute: time.minute,
            second: time.second - 1,
          }
        });
      }
    }, 1000);

    return timer;
  }
  useEffect(() => {
    if (countDown) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const timer = useTimer(time.minute, time.second);
      return () => clearInterval(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countDown]);
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
            setCountDown(!countDown);
            setTime({
              minute: 3,
              second: 0,
            });
              setPage(page + 1);
            }).catch(err => {
              setInputState({
                state: ["잘못된 형식의 이메일입니다."]
              });
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
          }).then(res => {
            localStorage.setItem('access_token', res.data.token);
              setPage(page + 1);
            }).catch(err => {
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
          var chk_num = password.search(/[0-9]/g);
          var chk_eng = password.search(/[a-z]/ig);
          var regExpId = /^[0-9a-z]{8, }+$/;
          if (regExpId.test(password) && info.password === password)
            setPage(page + 1);
          else if (chk_num < 0 || chk_eng < 0)
            setInputState({
              state: [
                "비밀번호가 조건에 일치하지 않습니다."
              ]
            });
          else if (info.password !== password) {
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
            const access_token = localStorage.getItem('access_token');
  
            axios.post(`${URL}/auth/signup`, info.profileImg, {
              headers: {
                'Authorization': access_token,
                'Content-Type': 'multipart/form-data'
              }
            })
            .then(res => {
              localStorage.setItem('access_token', "");
              setPage(page + 1);
            }).catch(err => {
              localStorage.setItem('access_token', "");
              setInputState({
                state: ["회원가입에 실패하였습니다."]
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
                countDown={countDown}
                setCountDown={setCountDown}
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
                  setCountDown={setCountDown}
                />
              )) ||
              (page === 6 && <Introduce setInfo={setInfo} info={info} onSubmit={handleSubmit} />) ||
              (page === 7 && (
                <Success
                  Info={info}
                  setInfo={setInfo}
                  InputState={inputState}
                  setInputstate={setInputState}
                onSubmit={handleSubmit}
                />
              )) 
              || (!pageList.includes(page) && window.location.reload())
            }
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
            <Link to={page === 7 ? "/" : "signup"}>
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