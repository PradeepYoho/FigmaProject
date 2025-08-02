import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutsFile from '../layouts/LayoutsFile';
import Home from '../pages/Home';
import Clock from '../NavBarLinks/Clock';
import Users from '../NavBarLinks/Users';
import Institute from '../NavBarLinks/Institute';
import Settings from '../NavBarLinks/Settings';
import PaymentTable from '../NavBarLinks/Payment';
import SubscriptionPlans from '../components/Subscription';
import SubscriptionForm from '../components/SubscriptionsForm';
import NotificationTable from '../NavBarLinks/NotificationTable';
import VisitorsDetails from '../components/VisitorsDetails';
import FAQManagement from '../components/FAQManagement';
import EditFaqNotes from '../components/EditFaqNotes';
import EditFaqForm from '../components/EditFaqForm';
import Calendar from '../NavBarLinks/Calendar';
import ProfileACC from '../NavBarLinks/ProfileACC';
import HelpCenterNotes from '../components/HelpCenterNotes';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutsFile />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
           <Route path="/profile" element={<ProfileACC />} />
           <Route path="/support-tickets" element={<FAQManagement />} />
          <Route path="/payment" element={<PaymentTable />} />
          <Route path="/users" element={<Users />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/institute" element={<Institute />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<NotificationTable />} />
          <Route path="/subscriptions" element={<SubscriptionPlans />} />
          <Route path="/add-institute" element={<SubscriptionForm />} />
          <Route path="/visitors-details" element={<VisitorsDetails />} />
          <Route path="/edit-faq-category" element={<EditFaqNotes />} />
          <Route path="/edit-faq-form" element={<EditFaqForm />} />
          <Route path='/add-new' element={<HelpCenterNotes />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
