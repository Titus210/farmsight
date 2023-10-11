import { Link } from "react-router-dom";
import PrimaryButton from "../../common/buttons/PrimaryButton";
import NavBar from "../../layouts/navbar/NavBar";
import RoundedButton from "../../common/buttons/RoundedButton";

const Landing = () => {
    return (
        <>
            {/* Navigation Bar */}
            <section className="navbar">
                <NavBar />
            </section>
            {/* Main Content */}
            <main className="bg-slate-400">
                {/* Hero Section */}
                <section className="hero h-4/5">
                    <div className="content px-4 h-full bg-green flex flex-col items-center justify-center">
                        <h1 className="text-3xl">We Watch the Skies, You Reap the Harvest</h1>
                        <p className="text-md text-center">Weather insights for your farming success</p>
                        <Link to='/login'>
                            <PrimaryButton color='brown' text="Get Started" bgColor='white' />
                        </Link>
                    </div>
                </section>
                {/* Why Choose Us Section */}
                <section className="why-choose-us py-8 px-3 flex flex-wrap flex-col items-center">
                    <h2 className="section-heading text-brown text-center text-2xl font-bold uppercase">why choose us</h2>
                    <div className="card-wrapper flex flex-wrap gap-2 md:gap-4">
                        {/* Repeated card elements */}
                        {/* You may want to extract this card structure into a reusable component */}
                        <article className="card rounded-lg py-3 px-2 shadow bg-slate-300 w-40 md:w-44 h-max flex flex-col items-center justify-center">
                            <div className="img">
                                <div className="content w-20 h-20 rounded-full bg-brown"></div>
                            </div>
                            <div className="content">
                                <p className="text-md font-bold text-center">Crop Predictive Analysis</p>
                                <p className="text-sm text-center">
                                    Based on our analytics-based algorithm, we provide an 80% certain prediction.
                                </p>
                            </div>
                        </article>
                        {/* Repeated card elements */}
                    </div>
                </section>
                {/* How We Operate Section */}
                <section className="how-we-operate py-8 px-3">
                    <h2 className="section-heading text-brown text-center text-2xl font-bold uppercase">how we operate</h2>
                    <div className="">
                        <div className="cards bg-slate-200 w-11/12 lg:w-8/12 mx-auto">
                            {/* Repeated card elements */}
                            {/* You may want to extract this card structure into a reusable component */}
                            <article className="flex flex-col md:flex-row items-center gap-4">
                                <div className="image w-full md:w-6/12">
                                    <div className="img w-full h-64 bg-brown"></div>
                                </div>
                                <div className="content w-full md:w-6/12 bg-slate-400">
                                    <div className="header flex items-center ">
                                        <RoundedButton color='white' text="1" bgColor='brown' />
                                        <h2 className="text-2xl font-bold ml-4">Data Collection</h2>
                                    </div>
                                    <div className="text">
                                        <p className="text-sm text-center">We gather real-time data on weather patterns, temperature fluctuations, humidity levels,
                                            and more, ensuring that we have a complete picture of your farm's environment</p>
                                    </div>
                                </div>
                            </article>
                            {/* Repeated card elements */}
                        </div>
                    </div>
                </section>
                {/* About Section */}
                <section className="about h-4/5 py-8">
                    <div className="content px-4 h-full bg-green flex flex-col items-center justify-center">
                        <h1 className="text-3xl">Discover Our Journey and Vision for
                            a Sustainable Future in Agriculture</h1>
                        <p className="text-md text-center">Weather insights for your farming success</p>
                        <Link to='/login'>
                            <PrimaryButton color='brown' text="Read More" bgColor='white' />
                        </Link>
                    </div>
                </section>
                {/* Newsletter Section */}
                <section className="newsletter bg-slate-800 py-8 px-3">
                    <div className="section-heading flex flex-col items-center">
                        <h2 className="section-heading text-brown text-center text-xl md:text-2xl font-bold uppercase">Be the first to be informed</h2>
                        <div className="input flex md:w-6/12 mx-auto ">
                            <div className="w-10/12 mx-auto rounded-md">
                                <input type="text" name="email" id="email" className="p-2 w-full" />
                            </div>
                            <div className="button rounded-md">
                               <p className="btn p-2 bg-green">Subscribe</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Landing;
