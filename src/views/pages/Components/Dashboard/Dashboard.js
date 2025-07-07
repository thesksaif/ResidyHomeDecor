import React from 'react';
import DashboardHeader from './DashboardHeader';
import './assets/css/style.css';
import Sidebar from './Sidebar';
import DashboardMain from './DashboardMain';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <Sidebar />
      <DashboardMain />
    </div>
  );
};
export default Dashboard;
