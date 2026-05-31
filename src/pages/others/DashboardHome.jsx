import React from 'react'
import Container from '../../components/Container';
import Sidebar from '../../landing/Sidebar';
import Dashboard from '../../landing/Dashboard';

function DashbaordHome() {
  return (
    <Container>
      <Sidebar />
      <Dashboard />
    </Container>
  );
}

export default DashbaordHome;