

import logo from "../../../assets/logo/logo-1.png";


const DashBoardNavbar = () => {
    const farmerName = "titus"
    return (
        <>
            <section className="bg-brown w-full">
                <nav>
                    <div className="user flex">
                        <div className="logo md:hidden">
                            <img src={logo} alt="" className="w-24 h-24 " />
                        </div>
                        <div className="welcome-text">
                            <h4 className="text-2xl">Welcome back
                                <span>{farmerName}</span>
                            </h4>
                        </div>

                    </div>
                </nav>
            </section>
        </>
    );
}

export default DashBoardNavbar;