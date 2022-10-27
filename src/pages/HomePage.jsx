import React from "react";
import { useParams } from "react-router-dom";
// Components
import ContextCard from "../components/ContextCard/ContextCard";
// Constants
import { mockedTasks } from "../mockedData";
// Icons
import { IoIosCheckmark } from "react-icons/io";
import { BiRightArrowAlt } from "react-icons/bi";
import { TiLockClosedOutline } from "react-icons/ti";
import { AiOutlineCompass } from "react-icons/ai";
// Assets
import avatar from "../assets/frame.png";
// Utils
import {
  getMonthName,
  addZeroToDate,
  formatDisplayData,
} from "../utils/date-formaters";
import { Link } from "react-router-dom";

const HomePage = () => {
  const displayedDate = formatDisplayData(
    mockedTasks[0].contexts[0].created_at
  );
  const { id } = useParams();

  console.log(id);

  return (
    <div className="container">
      <section className="tasks-section">
        <h3 className="tasks-section__heading">YOUR TASKS</h3>
        <ul className="tasks">
          {mockedTasks.map((task) => (
            <li
              key={task.id}
              className={`tasks__task ${task.status} ${
                +id === task.id ? "bold" : ""
              }`}
            >
              <Link to={task.status === "blocked" ? `#` : `/${task.id}`}>
                {task.status === "completed" ? (
                  <IoIosCheckmark />
                ) : task.status === "active" ? (
                  <BiRightArrowAlt />
                ) : (
                  <TiLockClosedOutline />
                )}
                <span>{task.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="context-container">
        <div className="context-container__heading">
          <h3>
            <AiOutlineCompass /> BUSINESS CONTEXT
          </h3>
        </div>
        <div className="business-contexts">
          {mockedTasks[0].contexts.map((context) => (
            <ContextCard key={context.id} context={context} />
          ))}
        </div>
        <div className="context-overview">
          <h2>{mockedTasks[0].contexts[0].title}</h2>
          <div className="context-overview__content">
            <img src={avatar} alt="avatar" />
            <div className="content-heading">
              <span>{mockedTasks[0].contexts[0].author}</span>
              <span>
                Today, {addZeroToDate(displayedDate.getDate())}th{" "}
                {getMonthName(displayedDate.getTime())}
              </span>
              <span>
                {addZeroToDate(displayedDate.getHours())}:
                {addZeroToDate(displayedDate.getMinutes())}
              </span>
            </div>
            <p>{mockedTasks[0].contexts[0].content}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
