import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Dashboard Routing
import FarmerDashboard from '../components/pages/dashboard/DashBoard';
import FarmerLogin from '../components/pages/login/Login';
import NotFound from '../components/pages/error/NotFound';
import GetStarted from '../components/pages/get-started/GetStarted';
import Overview from '../components/pages/dashboard/overview/Overview';
import Weather from '../components/pages/dashboard/weather/Weather';
import Farms from '../components/pages/dashboard/farms/Farms';
import Notification from '../components/pages/dashboard/notifications/Notification';
import Settings from '../components/pages/dashboard/settings/Settings';
import Logout from '../components/pages/dashboard/logout/Logout';

import Landing from '../components/pages/landing/Landing';
import Signup, { FarmInformation, PersonalInformation, SavedInfo, TopCrops } from '../components/pages/signup/Signup';

const UserRoutes: React.FC = () => (
    <Router>
        <Routes>

            <Route path="/landing" element={<Landing />} />
            <Route path="/get-started" element={<GetStarted />} />

            <Route path="/login" element={<FarmerLogin />} >

            </Route>

            <Route path="/signup" element={<Signup />} >
            </Route>
            <Route path="/personal-information" element={<PersonalInformation />} />
            <Route path="/farm-details" element={ <FarmInformation/>} />
            <Route path="/top-crops" element={ <TopCrops/>} />
            <Route path="/saved-info" element={ <SavedInfo/>} />

            <Route path="/dashboard" element={<FarmerDashboard />} >
                <Route path="/dashboard/overview" element={<Overview />} />
                <Route path="/dashboard/weather" element={<Weather />} />
                <Route path="/dashboard/farms" element={<Farms />} />
                <Route path="/dashboard/notification" element={<Notification />} />
                <Route path="/dashboard/settings" element={<Settings />} />
                <Route path="/dashboard/logout" element={<Logout />} />
            </Route>

            <Route path="/*" element={<NotFound />} />

        </Routes>
    </Router>
);

export default UserRoutes;
