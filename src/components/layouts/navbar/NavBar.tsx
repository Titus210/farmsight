import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../common/buttons/PrimaryButton';
import logo from '../../../assets/logo/logo-1.png';

/**
 * NavBar Component:
 *
 * The NavBar component displays a navigation bar with links to different sections of the website.
 *
 * Key Features:
 * - Contains a logo displayed on the left.
 * - Lists navigation items as links to different pages.
 * - Provides a 'Get Started' button for user action.
 *
 * Suggestions:
 * - Ensure the 'Link' components correctly point to the desired routes.
 * - Adjust styling as needed for responsiveness and visual appeal.
 *
 * This component serves as the top navigation bar for the website.
 */

const NavBar = () => {
    return (
        <nav className="relative w-5/6 mx-auto flex justify-between">
            <div className="logo w-20 h-20">
                <img src={logo} alt="Logo" />
            </div>

            <div className="menu absolute md:relative right-0 w-2/5 md:w-5/6 flex flex-col justify-between items-center md:flex-row px-3">
                <div className="list-items flex flex-col md:flex-row">
                    <p className="text-md md:text-xl ml-4 uppercase text-white md:text-green">
                        <Link to="/">Home</Link>
                    </p>
                    <p className="text-md md:text-xl ml-4 uppercase text-white md:text-green">
                        <Link to="/services">Services</Link>
                    </p>
                    <p className="text-md md:text-xl ml-4 uppercase text-white md:text-green">
                        <Link to="/about">About</Link>
                    </p>
                    <p className="text-md md:text-xl ml-4 uppercase text-white md:text-green">
                        <Link to="/contact">Contact</Link>
                    </p>
                </div>
                <div className="button">
                    <PrimaryButton color="white" text="Get Started" bgColor="green" />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
