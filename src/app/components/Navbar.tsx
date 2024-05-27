import Image from "next/image";
import logo from "@/app/images/logo.svg";
import { VscMenu, VscClose } from "react-icons/vsc";
import arrowD from "@/app/images/icon-arrow-down.svg";
import arrowU from "@/app/images/icon-arrow-up.svg";
import todo from "@/app/images/icon-todo.svg";
import calendar from "@/app/images/icon-calendar.svg";
import reminders from "@/app/images/icon-reminders.svg";
import planning from "@/app/images/icon-planning.svg";
import { useState } from "react";
interface openProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Navbar({ open, setOpen }: openProps) {
  const [dropmenuF, setDropmenuF] = useState(false);
  const [dropmenuC, setDropmenuC] = useState(false);

  return (
    <header className="header">
      <nav className="max-w-[1200px]   py-7 px-4 flex justify-between items-center text-center lg:hidden">
        <div
          className={`overlay fixed top-0 left-0 w-full h-full mix-blend-overlay bg-black bg-opacity-50 lg:hidden ${
            open ? "" : "hidden"
          }`}
        ></div>
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <VscMenu
          className={`icon text-3xl mb-1  ${open ? "hidden" : ""} lg:hidden`}
          onClick={() => {
            setOpen(true);
          }}
        />
        <ul
          className={`fixed bg-white flex flex-col  top-0 py-4  gap-5 w-[260px] h-screen duration-300 lg:hidden ${
            open ? "right-0" : "-right-[300px]"
          } `}
        >
          <div className="flex justify-end mb-1 pr-4">
            <VscClose
              className="icon text-5xl"
              onClick={() => {
                setOpen(false);
              }}
            />
          </div>
          <div className="Features">
            <li
              className="flex items-center px-4 cursor-pointer"
              onClick={() => {
                setDropmenuF(!dropmenuF);
              }}
            >
              Features
              {dropmenuF ? (
                <Image src={arrowU} alt="arrow" className="ml-2" />
              ) : (
                <Image src={arrowD} alt="arrow" className="ml-2" />
              )}
            </li>
            {dropmenuF && (
              <ul className=" duration-500">
                <li className="flex items-center ml-10 px-4 pt-8 pb-2 gap-3">
                  <Image src={todo} alt="arrow" className="mr-2 h-6 w-6 mb-2" />
                  Todo List
                </li>
                <li className="flex items-center ml-10  px-4 py-2 gap-3">
                  <Image
                    src={calendar}
                    alt="arrow"
                    className="mr-2 h-6 w-6 mb-2"
                  />
                  Calendar
                </li>
                <li className="flex items-center ml-10 px-4 py-2 gap-3">
                  <Image
                    src={reminders}
                    alt="arrow"
                    className=" h-6 w-6 mb-2"
                  />
                  Reminders
                </li>
                <li className="flex items-center ml-10 px-4 py-2 gap-3">
                  <Image
                    src={planning}
                    alt="arrow"
                    className="mr-2 h-6 w-6 mb-2"
                  />
                  Planning
                </li>
              </ul>
            )}
          </div>
          <div className="Company">
            <li
              className="flex items-center px-4 cursor-pointer"
              onClick={() => {
                setDropmenuC(!dropmenuC);
              }}
            >
              Company
              {dropmenuC ? (
                <Image src={arrowU} alt="arrow" className="ml-2" />
              ) : (
                <Image src={arrowD} alt="arrow" className="ml-2" />
              )}
            </li>
            {dropmenuC && (
              <ul className=" duration-500">
                <li className="flex items-center ml-10 px-4 pt-8 pb-3 gap-3">
                  History
                </li>
                <li className="flex items-center ml-10  px-4 py-3 gap-3">
                  Our Team
                </li>
                <li className="flex items-center ml-10 px-4 py-3 gap-3">
                  Blog
                </li>
              </ul>
            )}
          </div>

          <li className="px-4 flex items-center">Careers</li>
          <li className="px-4 flex items-center">About</li>
          <div className="flex flex-col justify-center items-center mt-4">
            <button className="mb-2 text-lg text-gray-500">Login</button>
            <button className=" text-lg text-gray-500 rounded-xl border-[2px] border-[#777] py-2 px-14">
              Register
            </button>
          </div>
        </ul>
      </nav>
      <nav className="w-full px-8 py-8 hidden lg:flex justify-between items-center">
        <div className="flex  items-center gap-16">
          <Image src={logo} alt="logo" />
          <ul className="flex gap-7 items-center ">
            <li className=" cursor-pointer relative">
              <div
                className={`flex items-center gap-3  ${dropmenuF? 'font-semibold' : ''}`}
                onClick={() => {
                  setDropmenuF(!dropmenuF);
                }}
              >
                Features
                {dropmenuF ? (
                  <Image src={arrowU} alt="arrow" className="ml-2" />
                ) : (
                  <Image src={arrowD} alt="arrow" className="ml-2" />
                )}
              </div>
              {dropmenuF && (
                <ul className=" duration-500 absolute top-14 -left-28 min-w-fit w-[230px] bg-white py-6 rounded-xl shadow-lg ">
                  <li className="flex ml-10 mb-4 ">
                    <Image
                      src={todo}
                      alt="arrow"
                      className="mr-5 h-6 w-6 mb-2"
                    />
                    Todo List
                  </li>
                  <li className="flex  ml-10 mb-4  ">
                    <Image
                      src={calendar}
                      alt="arrow"
                      className="mr-5 h-6 w-6 mb-2"
                    />
                    Calendar
                  </li>
                  <li className="flex  ml-10 mb-4 ">
                    <Image
                      src={reminders}
                      alt="arrow"
                      className="mr-5 h-6 w-6 mb-2"
                    />
                    Reminders
                  </li>
                  <li className="flex ml-10  ">
                    <Image
                      src={planning}
                      alt="arrow"
                      className="mr-5 h-6 w-6 mb-2"
                    />
                    Planning
                  </li>
                </ul>
              )}
            </li>

            <li className=" cursor-pointer relative">
                <div className={`flex items-center gap-3 ${dropmenuC? 'font-semibold' : ''}`} onClick={()=>{setDropmenuC(!dropmenuC)}}>
                    Company {dropmenuC?<Image src={arrowU} alt="arrow" />:<Image src={arrowD} alt="arrow" />} 
                    {dropmenuC &&
                    <ul className=" absolute top-14 left-0 bg-white w-[150px]  py-7 rounded-xl shadow-lg flex flex-col pl-6 ">
                        <li className="pt-3 pb-4">History</li>
                        <li className="pb-4">Our Team</li>
                        <li>Blog</li>
                    </ul> }
                    
                </div>
              
            </li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">About</li>
          </ul>
        </div>
        <div className="flex   items-center  gap-5">
            <button className="text-lg text-gray-500 hover:font-semibold">Login</button>
            <button className=" text-lg text-gray-500 rounded-xl border-[2px] border-[#777] py-2 px-14 hover:font-semibold">
              Register
            </button>
        </div>
      </nav>
    </header>
  );
}
