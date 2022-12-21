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
        className=" border-[1px] relative rounded-[15px] flex flex-col items-center py-10 px-2 -mt-20 mx-auto  w-[80%]   bg-white "
      >
        <img src={Mlogo} alt="" className=" absolute -top-[12%] w-20 h-20 " />
        <h1 className=" font-bold text-3xl text-center mt-4">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className=" text-center text-Darkgray mt-4 text-[16px] ">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className=" flex justify-center items-center w-[100%] gap-4 mt-4">
          <button className=" bg-Darkcyan text-white w-[70%] py-4 rounded-full ">
            Back this project
          </button>
          <button>
            {" "}
            <img src={bookMark} alt="" />{" "}
          </button>
        </div>
      </motion.div>
      {/*2nd div  */}
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className=" border-[1px] py-10 px-2 mt-6 flex flex-col items-center gap-8  w-[80%] mx-auto  rounded-[15px] "
      >
        <div className=" flex flex-col items-center ">
          <h2 className=" text-2xl font-bold "> $89,914</h2>
          <p className=" text-Darkgray mt-2">of $100,000 backed</p>
          <div className=" h-[1px] w-[70%] bg-Darkgray mt-4 "></div>
        </div>
        <div className=" flex flex-col items-center ">
          <h2 className=" text-2xl font-bold "> 5,007</h2>
          <p className=" text-Darkgray mt-2">total backers</p>
          <div className=" h-[1px] w-[70%] bg-Darkgray mt-4 "></div>
        </div>
        <div className=" flex flex-col items-center ">
          <h2 className=" text-2xl font-bold "> 56</h2>
          <p className=" text-Darkgray mt-2">days left</p>
        </div>
        <div className="w-[80%] bg-gray-200 rounded-full h-4 ">
          <div className="bg-Darkcyan h-4  w-[56%] rounded-full"></div>
        </div>
      </motion.div>
      {/*  */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="border-[1px] py-10 px-4 mt-6 flex flex-col items-start gap-8  w-[80%] mx-auto  rounded-[15px]"
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
        <div className=" border-[1px] py-6 px-6 flex flex-col items-start  ">
          <h2 className=" text-black  font-[700] ">Bamboo Stand</h2>
          <h3 className=" text-Moderatecyan font-[500] ">Pledge $25 or more</h3>
          <p className=" text-Darkgray mt-6 ">
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
          <div className=" mt-4 flex items-center gap-2">
            <span className=" text-4xl font-bold ">101</span>
            <p className=" text-Darkgray">left</p>
          </div>
          <button className=" mt-6 bg-Moderatecyan w-[55%] py-3 rounded-full text-white font-[700] ">
            Select Reward
          </button>
        </div>
        <div className=" border-[1px] py-6 px-6 flex flex-col items-start  ">
          <h2 className=" text-black  font-[700] ">Black Edition Stand</h2>
          <h3 className=" text-Moderatecyan font-[500] ">Pledge $75 or more</h3>
          <p className=" text-Darkgray mt-6 ">
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
          <div className=" mt-4 flex items-center gap-2">
            <span className=" text-4xl font-bold ">64</span>
            <p className=" text-Darkgray">left</p>
          </div>
          <button className=" mt-6 bg-Moderatecyan w-[55%] py-3 rounded-full text-white font-[700] ">
            Select Reward
          </button>
        </div>
        <div className=" border-[1px]  opacity-[0.5]  py-6 px-6 flex flex-col items-start  ">
          <h2 className=" text-black  font-[700] ">Mahogany Special Edition</h2>
          <h3 className=" text-Moderatecyan font-[500] ">
            Pledge $200 or more
          </h3>
          <p className=" text-Darkgray mt-6 ">
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>
          <div className=" mt-4 flex items-center gap-2">
            <span className=" text-4xl font-bold ">0</span>
            <p className=" text-Darkgray">left</p>
          </div>
          <button className=" mt-6 bg-Darkgray w-[55%] py-3 rounded-full text-white font-[700] ">
            out of stock
          </button>
        </div>
      </motion.div>
    </main>
  );
}
