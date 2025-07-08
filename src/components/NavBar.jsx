import { useState } from "react"
import Logo from "../intro-section-with-dropdown-navigation-main/images/logo.svg"
import ArrowDown from "../intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg"
import ArrowUp from "../intro-section-with-dropdown-navigation-main/images/icon-arrow-up.svg"
import Calendar from "../intro-section-with-dropdown-navigation-main/images/icon-calendar.svg"
import TodoList from "../intro-section-with-dropdown-navigation-main/images/icon-todo.svg"
import Reminder from "../intro-section-with-dropdown-navigation-main/images/icon-reminders.svg"
import Plan from "../intro-section-with-dropdown-navigation-main/images/icon-planning.svg"
import { Button } from "../Ui/Button"
export const NavBar = () => {
    const [istoggle, setIsToggle] = useState(false);
    const [featureArrow, setFeatureArrow] = useState(false);
    const [company, setCompanyArrow] = useState(false);


    const handleIsToggle = () => {
        setIsToggle(!istoggle);
    }
    const handleFeatureArrow = () => {
        setFeatureArrow(!featureArrow);
    }
    const handleCompanyArrow = () => {
        setCompanyArrow(!company);
    }
    return (
        <div className="p-5 flex justify-between items-center relative  ">
            <div className="flex gap-20 justify-center items-center">

                <h1 className="mt-2">
                    <img src={Logo} />
                </h1>


                <ul className=" relative  max-md:hidden font-medium text-gray-400 flex gap-4 *:cursor-pointer ">

                    <li className="flex  gap-1 items-center hover:text-black " onClick={handleFeatureArrow}>
                        Features
                        {!featureArrow ? <img className="mt-[2px] ml-[3px]" src={ArrowDown} /> : <img className="mt-[2px] ml-[3px]" src={ArrowUp} />}
                    </li>
                    {featureArrow &&
                        <div className="absolute mt-10 left-[-65px] bg-white px-5 py-4 rounded-lg">
                            <ul className="  space-y-4 flex flex-col justify-center  ">
                                <li className="flex items-center hover:bg-gray-300 rounded-lg px-2 py-1 hover:text-white "><img className="mr-3" src={TodoList} />Todo List</li>
                                <li className="flex items-center hover:bg-gray-300 rounded-lg px-2 py-1 hover:text-white"><img className="mr-3" src={Calendar} />Calendar</li>
                                <li className="flex items-center hover:bg-gray-300 rounded-lg px-2 py-1 hover:text-white"><img className="mr-3" src={Reminder} />Reminders</li>
                                <li className="flex items-center hover:bg-gray-300 rounded-lg px-2 py-1 hover:text-white"><img className="mr-3" src={Plan} />Planning</li>
                            </ul>
                        </div>
                    }
                    <li className="flex  gap-1 items-center  hover:text-black" onClick={handleCompanyArrow}>
                        Company
                        {!company ? <img className="mt-[2px] ml-[3px]" src={ArrowDown} /> : <img className="mt-[2px] ml-[3px]" src={ArrowUp} />}
                    </li>
                    {company &&
                        <div className="absolute mt-10 left-[110px] bg-white px-5 py-4 rounded-lg">
                            <ul className="  space-y-2 flex flex-col justify-center  ">
                                <li className="flex items-center hover:bg-gray-300 rounded-lg px-2 py-1 hover:text-white">History</li>
                                <li className="flex items-center hover:bg-gray-300 rounded-lg px-2 py-1 hover:text-white">Our Team</li>
                                <li className="flex items-center hover:bg-gray-300 rounded-lg px-2 py-1 hover:text-white">Blog</li>
                            </ul>
                        </div>
                    }
                    <li className="hover:text-black" >careers</li>
                    <li className="hover:text-black">About</li>

                </ul>
            </div>

            <div className="flex justify-center items-center gap-3  *:font-medium text-gray-400  max-md:hidden">
                <Button className="hover:text-black mr-6">
                    Login
                </Button>

                <Button className="border-[1px] border-gray-600 rounded-2xl px-10 py-2 text-center hover:border-black hover:border-2">
                    Register
                </Button>
            </div>

            {!istoggle &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:hidden" onClick={handleIsToggle}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            }

            {
                istoggle &&
                <div className="absolute right-0  top-0  px-12 z-10 h-screen w-[210px] bg-white md:hidden">

                    <div className="absolute right-2 top-0 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8" onClick={handleIsToggle}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>

                    <ul className="mt-14 ml-[-24px] space-y-4 font-medium text-gray-400">

                        <li className="flex flex-col gap-1">
                            <div className="flex gap-3 items-center cursor-pointer" onClick={handleFeatureArrow}>
                                Features
                                {!featureArrow ? <img className="mt-[2px]" src={ArrowDown} /> : <img className="mt-[2px]" src={ArrowUp} />}
                            </div>
                            {featureArrow &&
                                <ul className="ml-6 mt-1 space-y-2 flex flex-col  justify-center ">
                                    {/* Example dropdown items */}
                                    <li className="flex items-center "><img className="mr-3" src={TodoList} />Todo List</li>
                                    <li className="flex items-center "><img className="mr-3" src={Calendar} />Calendar</li>
                                    <li className="flex items-center "><img className="mr-3" src={Reminder} />Reminders</li>
                                    <li className="flex items-center "><img className="mr-3" src={Plan} />Planning</li>
                                </ul>
                            }
                        </li>
                        <li className="flex flex-col gap-1">
                            <div className="flex gap-3 items-center cursor-pointer " onClick={handleCompanyArrow}>
                                Company
                                {!company ? <img className="mt-[2px]" src={ArrowDown} /> : <img className="mt-[2px]" src={ArrowUp} />}
                            </div>
                            {company &&
                                <ul className="ml-6 mt-1 space-y-2 flex flex-col  justify-center">
                                    {/* Example dropdown items */}
                                    <li className="flex items-center ">History</li>
                                    <li className="flex items-center ">Our Team</li>
                                    <li className="flex items-center ">Blog</li>
                                </ul>
                            }
                        </li>
                        <li>careers</li>
                        <li>About</li>
                    </ul>
                    <div className="flex flex-col items-center m-auto mt-8 *:font-medium text-gray-400 ">
                        <Button>
                            Login
                        </Button>
                        <Button className="border-[1px] border-gray-600 rounded-2xl px-14 py-2 mt-4 text-center">
                            Register
                        </Button>
                    </div>
                </div>
            }

        </div>
    )
}
