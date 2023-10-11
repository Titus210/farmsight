import Sidebar from "../../layouts/sidebar/Sidebar";
import DashBoardNabar from "../../layouts/dashboardNavbar/DashBoardNavbar";
import Overview from "./overview/Overview";
import Farms from "./farms/Farms";
import Weather from "./weather/Weather";
import Notification from "./notifications/Notification";
import Calender from "./calender/Calender";
import Help from "./help/Help";
import Settings from "./settings/Settings";
import Logout from "./logout/Logout";

const FarmerDashboard = () => {
    return (
        <>

            <section className="flex relative">
                <div className="sidebar hidden  absolute top-0 left-0 bottom-0 w-7/12 lg:relative lg:block z-index-2 md:w-5/12  bg-brown h-screen lg:w-3/12  justify-center ">
                    <Sidebar />
                </div>
                <div className=" content bg-slate-500 w-full lg:w-10/12 ">
                    <nav className="navbar w-full">
                        <DashBoardNabar />
                    </nav>
                    <div className="content-list w-full">
                        {/*Dashboard Page renders */}
                        <Overview />
                        {/*
                        <Farms />
                        <Weather />
                        <Notification />
                        <Calender />
                        <Help />
                        <Settings />
                        <Logout />
                         */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default FarmerDashboard;