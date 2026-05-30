import Sidebar from "./landing/Sidebar";
import Dashboard from "./landing/Dashboard";
import Container from "./components/Container";

function App() {
  return (
    <Container >
      <Sidebar />
      <Dashboard />
    </Container>
  );
}

export default App;
