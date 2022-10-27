// Styles
import "./App.scss";
// Components
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import {
  Routes,
  BrowserRouter as Router,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <Menu />
        <Routes>
          <Route path="/" element={<Navigate to="/0" />} />
          <Route path="/:id" element={<HomePage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
