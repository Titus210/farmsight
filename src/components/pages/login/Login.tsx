import { Link } from "react-router-dom";

import PrimaryButton from "../../common/buttons/PrimaryButton";
import Input from "../../common/inputs/Input";

import logo from '../../../assets/logo/logo-1.png';


/**
 * FarmerLogin Component:
 *
 * The FarmerLogin component represents the login page for farmers. It allows users to log in to the application.
 *
 * Key Points:
 * - Displays the application logo (farmsight) at the top.
 * - Provides input fields for username and password.
 * - Includes a "Remember Me" checkbox and "Forgot Password" link.
 * - Allows users to navigate to the dashboard upon successful login.
 * - Provides a link to the signup page for users without accounts.
 *
 * Suggestions:
 * - Ensure that form inputs and interactions are functional.
 * - Validate and handle login functionality.
 *
 * Overall, the component sets up the login interface for the application.
 */

const FarmerLogin = () => {
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

                    </div>
                    <div className="flex justify-between px-2 ">
                        <div className="remember-me flex">
                            <input type="checkbox" name="checkbox" id="remember-me" />
                            <p className="text-[10px] md:text-[14px] ml-2  text-white">Remember me</p>
                        </div>
                        <div className="forgot-password ml-2">
                            <p className="text-[10px] md:text-[14px] text-white underline"><Link to='/forgot-password'>forgot password?</Link></p>
                        </div>
                    </div>
                    <div className="self-center">
                        <Link to='/dashboard'>
                            <PrimaryButton color='brown' text="Login" bgColor='white' />
                        </Link>

                    </div>
                </div>

                <div className="">
                    <p className="text-md">Dont have an account?
                        <span className="text-blue underline">
                            <Link to="/signup">
                                Create account
                            </Link>
                        </span>
                    </p>
                </div>

            </section >
        </>
    );
}

export default FarmerLogin;