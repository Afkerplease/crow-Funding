import React, { useState, useEffect } from "react";
import close from "../images/icon-close-modal.svg";
import checkmark from "../images/icon-check.svg";

function BackProject({ click }) {
  const [selected, setSelected] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [model, setModel] = useState(true);
  const modelChange = () => {
    setModel(false);
  };
  const changeHandler1 = () => {
    setSelected(true);
  };
  const changeHandler2 = () => {
    setSelected2(true);
  };
  const changeHandler3 = () => {
    setSelected3(true);
  };

  return (
    <div>
      <div className=" absolute top-0 w-[100%] h-[100%] opacity-[0.4] z-10 bg-black  "></div>
      {model ? (
        <div className=" lg:w-[48%] bg-white lg:top-[15%] px-10 py-8 rounded-[10px] w-[95%] left-[3%]  absolute z-20 lg:left-[26%]  ">
          <div className=" flex justify-between items-center  ">
            <h2 className=" font-bold text-xl">Back this project</h2>
            <img
              onClick={() => {
                click();
              }}
              src={close}
              className=" cursor-pointer w-5 h-5 text-black"
              alt=""
            />
          </div>
          <p className=" mt-4 text-Darkgray">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          {/* 1st div */}
          <div
            className={` ${
              selected ? "border-Moderatecyan " : ""
            }  lg:w-[90%] w-[100%]  mt-4 border-[2px] rounded-[10px]  px-4 py-4 `}
          >
            <div className=" flex  gap-2 items-center">
              <input
                onClick={changeHandler1}
                className="   w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300"
                type="radio"
              />
              <h2 className=" font-bold cursor-pointer hover:text-Moderatecyan">
                Pledge with no reward
              </h2>
            </div>
            <p className=" mt-2 text-Darkgray pl-6">
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
            {selected ? (
              <div className=" flex justify-between items-center mt-6 border-t-[1px] pt-4 ">
                <h2 className=" text-Darkgray">Enter your pledge</h2>
                <div className="flex justify-end gap-4 ">
                  <input
                    type="number"
                    placeholder="$"
                    className=" border-[1px] px-2 w-[25%] py-1 rounded-full border-Moderatecyan "
                  />
                  <button
                    onClick={modelChange}
                    className=" text-white font-bold bg-Moderatecyan hover:bg-Darkcyan rounded-full py-1 w-[35%] "
                  >
                    Continue
                  </button>
                </div>
              </div>
            ) : null}
          </div>
          {/*  */}
          {/* 2nd div */}
          <div
            className={` ${
              selected2 ? "border-Moderatecyan " : ""
            }  lg:w-[90%] w-[100%]  mt-4 border-[2px] rounded-[10px]  px-4 py-4 `}
          >
            <div className=" flex  gap-2 items-center justify-between w-[100%] ">
              <div className=" flex items-center gap-4">
                <input
                  onClick={changeHandler2}
                  className="  w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300"
                  type="radio"
                />
                <h2 className=" font-bold cursor-pointer hover:text-Moderatecyan">
                  Bamboo Stand
                </h2>
                <h2 className=" font-bold cursor-pointer text-Moderatecyan">
                  Pledge $25 or more
                </h2>
              </div>
              <div className=" flex  justify-self-end items-center gap-2 ">
                <p className=" font-bold text-2xl">101</p>
                <p className=" text-Darkgray">left</p>
              </div>
            </div>
            <p className=" mt-2 text-Darkgray pl-6">
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </p>
            {selected2 ? (
              <div className=" flex justify-between items-center mt-6 border-t-[1px] pt-4 ">
                <h2 className=" text-Darkgray">Enter your pledge</h2>
                <div className="flex justify-end gap-4 ">
                  <input
                    type="number"
                    placeholder="$"
                    className=" border-[1px] px-2 w-[25%] py-1 rounded-full border-Moderatecyan "
                  />
                  <button
                    onClick={modelChange}
                    className=" text-white font-bold bg-Moderatecyan hover:bg-Darkcyan rounded-full py-1 w-[35%] "
                  >
                    Continue
                  </button>
                </div>
              </div>
            ) : null}
          </div>
          {/*  */}
          {/* 3rd div */}
          <div
            className={` ${
              selected3 ? "border-Moderatecyan " : ""
            }  lg:w-[90%] w-[100%]  mt-4 border-[2px] rounded-[10px]  px-4 py-4 `}
          >
            <div className=" flex  gap-2 items-center justify-between w-[100%] ">
              <div className=" flex items-center gap-4">
                <input
                  onClick={changeHandler3}
                  className="  w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300"
                  type="radio"
                />
                <h2 className=" font-bold cursor-pointer hover:text-Moderatecyan">
                  Black Edition Stand
                </h2>
                <h2 className=" font-bold cursor-pointer text-Moderatecyan">
                  Pledge $75 or more
                </h2>
              </div>
              <div className=" flex  justify-self-end items-center gap-2 ">
                <p className=" font-bold text-2xl">64</p>
                <p className=" text-Darkgray">left</p>
              </div>
            </div>
            <p className=" mt-2 text-Darkgray pl-6">
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>
            {selected3 ? (
              <div className=" flex justify-between items-center mt-6 border-t-[1px] pt-4 ">
                <h2 className=" text-Darkgray">Enter your pledge</h2>
                <div className="flex justify-end gap-4 ">
                  <input
                    type="number"
                    placeholder="$"
                    className=" border-[1px] px-2 w-[25%] py-1 rounded-full border-Moderatecyan "
                  />
                  <button
                    onClick={modelChange}
                    className=" text-white font-bold bg-Moderatecyan hover:bg-Darkcyan rounded-full py-1 w-[35%] "
                  >
                    Continue
                  </button>
                </div>
              </div>
            ) : null}
          </div>
          {/*  */}
          {/* 3rd div */}
          <div className=" lg:w-[90%]  mt-4 border-[2px] px-4 py-4 opacity-[0.6] ">
            <div className=" flex  gap-2 items-center justify-between w-[100%] ">
              <div className=" flex items-center gap-4">
                <input
                  disabled
                  className="  w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300"
                  type="radio"
                />
                <h2 className=" font-bold cursor-pointer ">
                  Mahogany Special Edition
                </h2>
                <h2 className=" font-bold cursor-pointer text-Moderatecyan">
                  Pledge $200 or more
                </h2>
              </div>
              <div className=" flex  justify-self-end items-center gap-2 ">
                <p className=" font-bold text-2xl">0</p>
                <p className=" text-Darkgray">left</p>
              </div>
            </div>
            <p className=" mt-2 text-Darkgray pl-6">
              ou get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </p>
          </div>
          {/*  */}
        </div>
      ) : (
        <div className="flex flex-col items-center absolute z-30 bg-white lg:w-[30%] w-[95%] left-[3%] top-[20%]   py-10 rounded-[10px]  lg:left-[35%] gap-4 ">
          <img src={checkmark} alt="" />
          <h2 className="font-bold text-xl ">Thanks for your support!</h2>
          <p className=" text-center text-Darkgray w-[60%] mt-4 ">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <button
            onClick={() => {
              click();
            }}
            className=" bg-Moderatecyan py-3 mt-4 px-6 text-white font-bold rounded-full "
          >
            Got it !
          </button>
        </div>
      )}
    </div>
  );
}

export default BackProject;
