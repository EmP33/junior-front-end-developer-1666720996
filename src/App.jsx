import { useEffect } from "react";
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
import { mockedTasks } from "./mockedData";

function App() {
  const activeTask = mockedTasks.find((task) => task.status === "active");
  return (
    <Router>
      <main>
        <Menu />
        <Routes>
          <Route path="/" element={<Navigate to={`/${activeTask.slug}`} />} />
          <Route path="/:slug" element={<HomePage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
