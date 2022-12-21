import Header from "./Components/Header";
import Mlogo from "./images/logo-mastercraft.svg";
import bookMark from "./images/icon-bookmark.svg";
import { motion } from "framer-motion";

export default function App() {
  return (
    <main className="relative  font-Comissionaire  ">
      <Header />
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className=" border-[1px] relative rounded-[15px] flex flex-col items-center py-10 px-2 lg:py-16  -mt-20 mx-auto  w-[80%] lg:w-[50%]  bg-white "
      >
        <img
          src={Mlogo}
          alt=""
          className=" absolute -top-[12%] w-20 h-20  lg:w-16 lg:h-16 "
        />
        <h1 className=" font-bold text-3xl text-center mt-4">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className=" text-center text-Darkgray mt-4 text-[16px] lg:text-[18px] ">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className=" lg:px-20 flex justify-center lg:justify-between  items-center w-[100%] gap-4 lg:mt-8 ">
          <button className=" bg-Moderatecyan text-white lg:w-[30%]   w-[70%] py-4 rounded-full ">
            Back this project
          </button>
          <div className=" lg:flex  lg:w-[25%] lg:items-center lg:bg-gray-200 lg:rounded-full lg:gap-4 ">
            <button className=" ">
              {" "}
              <img src={bookMark} alt="" />{" "}
            </button>
            <h3 className=" hidden lg:block text-Darkgray font-bold cursor-pointer ">
              Bookmark
            </h3>
          </div>
        </div>
      </motion.div>
      {/*2nd div  */}
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className=" border-[1px] lg:w-[50%] py-10 px-2 mt-6 flex  flex-col items-center   gap-8  w-[80%] mx-auto  rounded-[15px] "
      >
        <div className="  flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:justify-around lg:w-[100%] ">
          <div className=" flex flex-col items-center   lg:border-r-[1px] lg:pr-10 ">
            <h2 className=" text-2xl font-bold "> $89,914</h2>
            <p className=" text-Darkgray mt-2">of $100,000 backed</p>
            <div className=" h-[1px] w-[70%] bg-Darkgray mt-4 lg:hidden "></div>
          </div>
          <div className=" flex flex-col items-center lg:border-r-[1px] lg:pr-10 ">
            <h2 className=" text-2xl font-bold "> 5,007</h2>
            <p className=" text-Darkgray mt-2">total backers</p>
            <div className=" h-[1px] w-[70%] bg-Darkgray mt-4 lg:hidden "></div>
          </div>
          <div className=" flex flex-col items-center lg:place-self-start ">
            <h2 className=" text-2xl font-bold "> 56</h2>
            <p className=" text-Darkgray mt-2">days left</p>
          </div>
        </div>
        <div className="w-[80%] lg:w-[90%] bg-gray-200 rounded-full h-4 ">
          <div className="bg-Moderatecyan h-4 lg:w-[80%] w-[56%] rounded-full"></div>
        </div>
      </motion.div>
      {/*  */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="border-[1px] py-10 px-4 mt-6 flex flex-col items-start gap-8 lg:w-[50%] lg:px-16 w-[80%] mx-auto  rounded-[15px]"
      >
        <h2 className=" font-bold text-2xl">About this project</h2>
        <p className=" text-Darkgray text-[16px]  ">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className=" text-Darkgray text-[16px]  ">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        <div className=" border-[1px] lg:px-10 py-6 px-6 flex flex-col items-start  ">
          <div className="lg:flex  lg:justify-between w-[100%] ">
            <h2 className=" text-black  font-[700] ">Bamboo Stand</h2>
            <h3 className=" text-Moderatecyan font-[500] ">
              Pledge $25 or more
            </h3>
          </div>
          <p className=" text-Darkgray mt-6  ">
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
          <div className=" lg:flex  lg:justify-between w-[100%] lg:mt-2  ">
            <div className=" mt-4 flex items-center gap-2">
              <span className=" text-4xl font-bold ">101</span>
              <p className=" text-Darkgray">left</p>
            </div>
            <button className=" mt-6 bg-Moderatecyan lg:w-[30%] w-[55%] py-3 rounded-full text-white font-[700] ">
              Select Reward
            </button>
          </div>
        </div>
        <div className=" border-[1px] py-6 px-6 flex flex-col items-start  ">
          <div className="lg:flex  lg:justify-between w-[100%] ">
            <h2 className=" text-black  font-[700] ">Black Edition Stand</h2>
            <h3 className=" text-Moderatecyan font-[500] ">
              Pledge $75 or more
            </h3>
          </div>
          <p className=" text-Darkgray mt-6 ">
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
          <div className=" lg:flex  lg:justify-between w-[100%] lg:mt-2 lg:px-2 ">
            <div className=" mt-4 flex items-center gap-2">
              <span className=" text-4xl font-bold ">64</span>
              <p className=" text-Darkgray">left</p>
            </div>
            <button className=" mt-6 bg-Moderatecyan lg:w-[30%] w-[55%] py-3 rounded-full text-white font-[700] ">
              Select Reward
            </button>
          </div>
        </div>
        <div className=" border-[1px]  opacity-[0.5]  py-6 px-6 flex flex-col items-start  ">
          <div className="lg:flex  lg:justify-between w-[100%] ">
            <h2 className=" text-black  font-[700] ">
              Mahogany Special Edition
            </h2>
            <h3 className=" text-Moderatecyan font-[500] ">
              Pledge $200 or more
            </h3>
          </div>
          <p className=" text-Darkgray mt-6 ">
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>
          <div className=" lg:flex  lg:justify-between w-[100%] lg:mt-2 lg:px-2 ">
            <div className=" mt-4 flex items-center gap-2">
              <span className=" text-4xl font-bold ">0</span>
              <p className=" text-Darkgray">left</p>
            </div>
            <button className=" mt-6 bg-Darkgray lg:w-[30%] w-[55%] py-3 rounded-full text-white font-[700] ">
              Out of stock
            </button>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
