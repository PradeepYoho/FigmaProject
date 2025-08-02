import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutsFile from '../layouts/LayoutsFile';
import Home from '../pages/Home';
import Clock from '../NavBarLinks/Clock';
import Calendar from '../NavBarLinks/Calendar';
import Users from '../NavBarLinks/Users';
import Settings from '../NavBarLinks/Settings';
import SubscriptionPlans from '../components/Subscription';
import SubscriptionForm from '../components/SubscriptionsForm';
import NotificationTable from '../NavBarLinks/NotificationTable';
import Notification from '../NavBarLinks/NotificationTable';
// import Payment from '../NavBarLinks/Payment';
import Edit from '../components/Edit';
import PaymentTable from '../NavBarLinks/Payment';
import Institute from '../components/Institute';
import ProfileACC from '../NavBarLinks/ProfileACC';
import EditUserForm from '../components/EditUserForm';
import TotalNotifications from '../components/TotalNotifications';


const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutsFile />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
           <Route path="/profile" element={<ProfileACC />} />
           <Route path="/calendar" element={<Calendar/>} />
          <Route path="/payment" element={<PaymentTable/>} />
          <Route path="/users" element={<Users/>} /> 
          <Route path="/clock" element={<Clock/>} />
          <Route path="/institute" element={<Institute/>} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/notifications" element={<NotificationTable/>} />
          <Route path ="/subscriptions" element ={<SubscriptionPlans/>} />
          <Route path ="/add-institute" element ={<SubscriptionForm/>} />
          <Route path="/edituserform" element={<EditUserForm />} />
          <Route path="/TotalNotifications" element={<TotalNotifications />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
