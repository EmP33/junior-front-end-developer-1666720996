import React, { useState, useEffect } from "react";
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
  const [displayedDate, setDisplayedDate] = useState("");
  const { slug } = useParams();
  const [currentTask, setCurrentTask] = useState(undefined);

  useEffect(() => {
    /* Setting the currentTask state to the task with the slug that matches the slug in the url. */
    setCurrentTask(mockedTasks.find((task) => task.slug === slug));
    /* Setting the state of displayedDate to the date of the first context of the task with the slug
   that matches the slug in the url. */
    setDisplayedDate(
      formatDisplayData(
        mockedTasks.find((task) => task.slug === slug).contexts[0].created_at
      )
    );
  }, [slug]);

  return (
    <div className="container">
      <section className="tasks-section">
        <h3 className="tasks-section__heading">YOUR TASKS</h3>
        <ul className="tasks">
          {mockedTasks.map((task) => (
            <li
              key={task.slug}
              className={`tasks__task ${task.status} ${
                slug === task.slug ? "bold" : ""
              }`}
            >
              <Link to={task.status === "blocked" ? `#` : `/${task.slug}`}>
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
      {currentTask ? (
        <section className="context-container">
          <div className="context-container__heading">
            <h3>
              <AiOutlineCompass /> BUSINESS CONTEXT
            </h3>
          </div>
          <div className="business-contexts">
            {currentTask?.contexts.map((context) => (
              <ContextCard key={context.slug} context={context} />
            ))}
          </div>
          <div className="context-overview">
            <h2>{currentTask?.contexts[0].title}</h2>
            <div className="context-overview__content">
              <img src={avatar} alt="avatar" />
              <div className="content-heading">
                <span>{currentTask?.contexts[0].author}</span>
                <span>
                  Today, {addZeroToDate(displayedDate.getDate())}th{" "}
                  {getMonthName(displayedDate.getTime())}
                </span>
                <span>
                  {addZeroToDate(displayedDate.getHours())}:
                  {addZeroToDate(displayedDate.getMinutes())}
                </span>
              </div>
              <p>{currentTask.contexts[0].content}</p>
            </div>
          </div>
        </section>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default HomePage;
