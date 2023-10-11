import { Link } from "react-router-dom";


import PrimaryButton from "../../common/buttons/PrimaryButton";
import Input from "../../common/inputs/Input";


import logo from '../../../assets/logo/logo-1.png';
import RoundedButton from "../../common/buttons/RoundedButton";

/**
 * Signup Component:
 *
 * The Signup component represents the user registration page. Users can sign up by providing their details.
 *
 * Key Points:
 * - Displays the application logo at the top.
 * - Provides input fields for user registration details.
 * - Allows users to navigate to the personal information page upon registration.
 * - Provides a link to the login page for users with existing accounts.
 *
 * Suggestions:
 * - Ensure that form inputs and interactions are functional.
 * - Implement user registration functionality.
 *
 * This component sets up the user registration interface.
 */

const Signup = () => {
    return (
        <>
            <section className="flex flex-col bg-white  h-screen items-center justify-center h-11/12 ">
                <div className=" ">
                    <img src={logo} className="h-36" alt="farmsight" />
                </div>
                <div className="my-12 w-4/5 py-4 px-2 bg-green flex flex-col  justify-center rounded-lg md:w-auto md:p-12">
                    <div className="heading self-center">
                        <p className="text-lg text-white font-bold font-mono">Welcome to <span>farmsight</span></p>
                    </div>
                    <div className="">
                        <div className="">
                            <Input />
                        </div>
                        <div className="my-3">
                            <Input />
                        </div>
                        <div className="">
                            <Input />
                        </div>
                    </div>
                    <div className="self-center">
                        <Link to='/personal-information'>
                            <PrimaryButton color='brown' text="Create account" bgColor='white' />
                        </Link>

                    </div>
                </div>

                <div className="">
                    <p className="text-md">Already have an account?
                        <span className="text-blue underline">
                            <Link to="/login">
                                Login
                            </Link>
                        </span>
                    </p>
                </div>
            </section>
        </>
    );
}

export default Signup;




export function PersonalInformation() {
    return (
        <>
             <section className="flex flex-col bg-white  h-screen  justify-start items-center h-11/12 lg:px-2  relative">
                <div className="self-center  w-11/12    lg:w-9/12">
                    <nav>
                        <div className="buttons flex justify-between px-4">
                            <div className="personal-info flex flex-col items-center">
                                <RoundedButton color='white' text="ok" bgColor='brown' />
                                <p className="text-[10px]  md:text-[14px] font-bold text-brown text-center">Personal information</p>
                            </div>
                            <div className="personal-info flex flex-col items-center">
                                <RoundedButton color='white' text="ok" bgColor='brown' />
                                <p className="text-[10px]  md:text-[14px] font-bold text-brown text-center">Farm infromation </p>
                            </div>
                            <div className="personal-info flex flex-col items-center">
                                <RoundedButton color='white' text="ok" bgColor='brown' />
                                <p className="text-[10px]  md:text-[14px] font-bold text-brown text-center">Top  Crops </p>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="my-12 w-4/5 py-4 px-2 flex flex-col  justify-center rounded-lg md:w-auto md:p-12">
                    <div className="heading self-start">
                        <h3 className="text-xl text-green font-bold">Personal Information</h3>
                    </div>
                    <div className="">
                        <div className="">
                            <Input />
                        </div>

                        <div className="my-4">
                            <Input />
                        </div>
                    </div>
                    <div className="self-center">
                        <Link to="/farm-details">
                            <PrimaryButton color='white' text="continue" bgColor='brown' />
                        </Link>

                    </div>
                </div>

                <div className="">
                    <p className="text-sm">We value the privacy of your data <span className="text-blue">learn more</span></p>
                </div>

            </section>
        </>
    )
}


export function FarmInformation() {
    return (
        <>
             <section className="flex flex-col bg-white  h-screen  justify-start items-center h-11/12 lg:px-2  relative">
                <div className="self-center  w-11/12    lg:w-9/12">
                    <nav>
                        <div className="buttons flex justify-between px-4">
                            <div className="personal-info flex flex-col items-center">
                                <RoundedButton color='white' text="ok" bgColor='brown' />
                                <p className="text-[10px]  md:text-[14px] font-bold text-brown text-center">Personal information</p>
                            </div>
                            <div className="personal-info flex flex-col items-center">
                                <RoundedButton color='white' text="ok" bgColor='brown' />
                                <p className="text-[10px]  md:text-[14px] font-bold text-brown text-center">Farm infromation </p>
                            </div>
                            <div className="personal-info flex flex-col items-center">
                                <RoundedButton color='white' text="ok" bgColor='brown' />
                                <p className="text-[10px]  md:text-[14px] font-bold text-brown text-center">Top  Crops </p>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="my-12 w-4/5 py-4 px-2 flex flex-col  justify-center rounded-lg md:w-auto md:p-12">
                    <div className="heading self-start">
                        <h3 className="text-xl text-green font-bold">Farm Information</h3>
                    </div>
                    <div className="">
                        <div className="">
                            <Input />
                        </div>

                        <div className="my-4">
                            <Input />
                        </div>
                    </div>
                    <div className="self-center">
                        <Link to="/top-crops">
                            <PrimaryButton color='white' text="continue" bgColor='brown' />
                        </Link>

                    </div>
                </div>

                <div className="">
                    <p className="text-sm">We value the privacy of your data <span className="text-blue">learn more</span></p>
                </div>

            </section >
        </>
    )
}


export function TopCrops() {
    return (
        <>
            <section className="flex flex-col bg-white  h-screen  justify-start items-center h-11/12 lg:px-2  relative">
                <div className="self-center  w-11/12    lg:w-9/12">
                    <nav>
                        <div className="buttons flex justify-between px-4">
                            <div className="personal-info flex flex-col items-center">
                                <RoundedButton color='white' text="ok" bgColor='brown' />
                                <p className="text-[10px]  md:text-[14px] font-bold text-brown text-center">Personal information</p>
                            </div>
                            <div className="personal-info flex flex-col items-center">
                                <RoundedButton color='white' text="ok" bgColor='brown' />
                                <p className="text-[10px]  md:text-[14px] font-bold text-brown text-center">Farm infromation </p>
                            </div>
                            <div className="personal-info flex flex-col items-center">
                                <RoundedButton color='white' text="ok" bgColor='brown' />
                                <p className="text-[10px]  md:text-[14px] font-bold text-brown text-center">Top  Crops </p>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className=" py-4 px-2 flex flex-col  justify-center rounded-lg w-11/12 lg:w-3/5 relative  lg:p-12">
                    <div className="heading">
                        <h3 className="text-xl text-green font-bold">Top Crops</h3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 p-2 mx-auto  w-full  lg:justify-normal">
                        <article className="w-36 h-36 bg-slate-300">
                            <div className="image">
                                <img src="" alt="" />
                            </div>
                            <div className="content"></div>
                        </article>
                        <article className="w-36 h-36 bg-slate-300">
                            <div className="image">
                                <img src="" alt="" />
                            </div>
                            <div className="content"></div>
                        </article>
                        <article className="w-36 h-36 bg-slate-300">
                            <div className="image">
                                <img src="" alt="" />
                            </div>
                            <div className="content"></div>
                        </article>
                        <article className="w-36 h-36 bg-slate-300">
                            <div className="image">
                                <img src="" alt="" />
                            </div>
                            <div className="content"></div>
                        </article>
                        <article className="w-36 h-36 bg-slate-300">
                            <div className="image">
                                <img src="" alt="" />
                            </div>
                            <div className="content"></div>
                        </article>
                        <article className="w-36 h-36 bg-slate-300">
                            <div className="image">
                                <img src="" alt="" />
                            </div>
                            <div className="content"></div>
                        </article>
                        <article className="w-36 h-36 bg-slate-300">
                            <div className="image">
                                <img src="" alt="" />
                            </div>
                            <div className="content"></div>
                        </article>
                        <article className="w-36 h-36 bg-slate-300">
                            <div className="image">
                                <img src="" alt="" />
                            </div>
                            <div className="content"></div>
                        </article>
                    </div>
                    <div className="self-center">
                        <Link to="/saved-info">
                            <PrimaryButton color='white' text="continue" bgColor='brown' />
                        </Link>

                    </div>
                </div>

                <div className="">
                    <p className="text-sm">We value the privacy of your data <span className="text-blue underline">learn more</span></p>
                </div>

            </section >
        </>
    )
}


export function SavedInfo() {
    return (
        <div>
            <section className="flex flex-col bg-white  h-screen items-center justify-center h-11/12 ">
                <div className=" ">
                    <img src={logo} className="h-36" alt="farmsight" />
                </div>
                <div className="my-12 w-5/5 py-4 px-2 bg- flex flex-col  justify-center rounded-lg md:w-auto md:p-12">
                    <div className="heading self-center">
                        <h1 className="text-lg text-green font-bold font-mono">We have saved your information</h1>
                    </div>
                    <div className="mx-4">
                        <p className="text-[12px] text-center">Check your <span className="text-blue underline">email</span> to verify account</p>
                    </div>
                    <div className="self-center">
                        <Link to='/login'>
                            <PrimaryButton color='white' text="Login" bgColor='brown' />
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    )
}
