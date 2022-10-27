import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
} from "../utils/date-formatters";
import { changeContextStatus } from "../utils/api";

const HomePage = () => {
  const { slug, contextSlug } = useParams();
  const [displayedDate, setDisplayedDate] = useState("");
  const [currentTask, setCurrentTask] = useState(undefined);
  const [currectContext, setCurrentContext] = useState(undefined);

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

  useEffect(() => {
    if (currentTask) {
      /* Setting the state of currentContext to the context with the slug that matches the slug in the
      url. */
      setCurrentContext(
        currentTask.contexts.find((context) => context.slug === contextSlug)
      );
      /* Setting the state of displayedDate to the date of the context with the slug that matches the
      slug in the url. */
      setDisplayedDate(
        formatDisplayData(
          mockedTasks
            .find((task) => task.slug === slug)
            .contexts.find((context) => context.slug === contextSlug).created_at
        )
      );
      /* Calling the changeContextStatus function from the api.js file. */
      changeContextStatus(
        currentTask.slug,
        currentTask.contexts.find((context) => context.slug === contextSlug)
          .slug
      );
    }
  }, [contextSlug, currentTask, slug]);

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
              <Link
                to={
                  task.status === "blocked"
                    ? `#`
                    : `/${task.slug}/tasks/${task.contexts[0].slug}`
                }
              >
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
            <h2>{currectContext?.title}</h2>
            <div className="context-overview__content">
              <img src={avatar} alt="avatar" />
              <div className="content-heading">
                <span>{currectContext?.author}</span>
                <span>
                  Today, {addZeroToDate(displayedDate.getDate())}th{" "}
                  {getMonthName(displayedDate.getTime())}
                </span>
                <span>
                  {addZeroToDate(displayedDate.getHours())}:
                  {addZeroToDate(displayedDate.getMinutes())}
                </span>
              </div>
              <p>{currectContext?.content}</p>
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
