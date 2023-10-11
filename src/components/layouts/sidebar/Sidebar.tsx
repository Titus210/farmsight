import { GiFarmTractor } from 'react-icons/gi'
import { CgMenuGridR } from 'react-icons/cg'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { IoMdAlert } from 'react-icons/io'
import { SlCalender } from 'react-icons/sl'
import { BiHelpCircle } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { BiLogOutCircle } from 'react-icons/bi'

import logo from "../../../assets/logo/logo-1.png"

/**
 * Sidebar Component:
 *
 * The Sidebar component serves as the navigation menu for the application, providing links to different sections and actions.
 *
 * Key Features:
 * - Displays a logo at the top.
 * - Organizes menu items into 'MAIN MENU' and 'HELP & SUPPORT' sections.
 * - Each menu item is represented with an icon and label.
 *
 * Suggestions:
 * - Ensure that the icons are correctly imported and used from the 'react-icons' library.
 * - Review and adjust styling and layout to match the design requirements.
 *
 * This component serves as a sidebar navigation menu for the application.
 */

const Sidebar = () => {
    return (
        // Sidebar container
        <section className="relative flex flex-col items-center h-full">
            {/* Logo section at the top */}
            <div className="logo py-6">
                <img src={logo} alt="logo" className="w-32 h-32" />
            </div>

            {/* Main menu items */}
            <div className="menu-items flex flex-col">
                {/* 'MAIN MENU' section */}
                <div className="menu-list p-3">
                    <h2 className="text-md font-bold text-lightBlue">MAIN MENU</h2>
                    <p className="ml-4 text-lg font-bold italic text-white flex items-center">
                        <span className="mr-2"><CgMenuGridR /></span> Overview
                    </p>
                    <p className="mt-4 ml-4 text-md font-bold italic text-white flex items-center">
                        <span className="mr-2 text-2xl"><GiFarmTractor /></span> Farms
                    </p>
                    <p className="mt-4 ml-4 text-md font-bold italic text-white flex items-center">
                        <span className="mr-2"><TiWeatherPartlySunny /></span> Weather
                    </p>
                    <p className="mt-4 ml-4 text-md font-bold italic text-white flex items-center">
                        <span className="mr-2"><IoMdAlert /></span> Notification
                    </p>
                    <p className="mt-4 ml-4 text-md font-bold italic text-white flex items-center">
                        <span className="mr-2"><SlCalender /></span> Calender
                    </p>
                </div>

                {/* 'HELP & SUPPORT' section */}
                <div className="menu-list p-3 pt-6">
                    <h2 className="text-md font-bold text-lightBlue">HELP & SUPPORT</h2>
                    <p className="ml-4 text-md font-bold italic text-white flex items-center">
                        <span className="mr-2"><FiSettings /></span> Settings
                    </p>
                    <p className="mt-4 ml-4 text-md font-bold italic text-white flex items-center">
                        <span className="mr-2"><BiHelpCircle /></span> Help & Center
                    </p>
                </div>
            </div>

            {/* Logout section at the bottom */}
            <div className="logout absolute bottom-0 p-38">
                <p className="mt-4 ml-4 text-lg font-bold italic text-white flex items-center">
                    <span className="mr-2"><BiLogOutCircle /></span> Logout
                </p>
            </div>
        </section>
    );
}

export default Sidebar;
