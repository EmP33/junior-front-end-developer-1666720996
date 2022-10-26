// Styles
import "./App.css";
// Components
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
// Constants
import { mockedTasks } from "./mockedData";
// Icons
import { IoIosCheckmark } from "react-icons/io";
import { BiRightArrowAlt } from "react-icons/bi";
import { TiLockClosedOutline } from "react-icons/ti";

function App() {
  return (
    <>
      <Menu />
      <main>
        <section className="tasks-section">
          <h3 className="tasks-section__heading">YOUR TASKS</h3>
          <ul className="tasks">
            {mockedTasks.map((task) => (
              <li className="tasks__task">
                {task.status === "completed" ? (
                  <IoIosCheckmark className={task.status} />
                ) : task.status === "active" ? (
                  <BiRightArrowAlt className={task.status} />
                ) : (
                  <TiLockClosedOutline className={task.status} />
                )}
                <span className={task.status}>{task.title}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;