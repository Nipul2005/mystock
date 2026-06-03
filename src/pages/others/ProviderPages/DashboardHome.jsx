import React from 'react'
import Container from '../../../components/Common/Container';
import Sidebar from '../../../components/DashbaordPage/Sidebar';
import Dashboard from '../../../components/DashbaordPage/Dashboard';

function DashbaordHome() {
  return (
    <Container>
      <Sidebar />
      <Dashboard />
    </Container>
  );
}

export default DashbaordHome;