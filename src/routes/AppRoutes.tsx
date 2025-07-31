import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutsFile from '../layouts/LayoutsFile';
import UniversityProfile from '../components/UniversityProfile';
import Home from '../pages/Home';
import Clock from '../NavBarLinks/Clock';
import Calendar from '../NavBarLinks/Calendar';
import Users from '../NavBarLinks/Users';
import Institute from '../NavBarLinks/Institute';
import Settings from '../NavBarLinks/Settings';
import Notification from '../NavBarLinks/NotificationTable';
import PaymentTable from '../NavBarLinks/Payment';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutsFile />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
           <Route path="/profile" element={<UniversityProfile />} />
           <Route path="/calendar" element={<Calendar/>} />
          <Route path="/payment" element={<PaymentTable/>} />
          <Route path="/users" element={<Users/>} /> 
          <Route path="/clock" element={<Clock/>} />
          <Route path="/institute" element={<Institute/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/notifications" element={<Notification/>} />
         

        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
