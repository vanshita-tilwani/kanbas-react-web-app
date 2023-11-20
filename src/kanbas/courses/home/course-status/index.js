import React from "react";
import { FaBan, FaBullseye, FaCheckCircle, FaFileImport, FaBullhorn,FaCalendarCheck } from "react-icons/fa";
import { FaArrowRightFromBracket, FaChartSimple , FaX} from "react-icons/fa6";
import "./index.css";

function Status() {
  return (
    <div className="status">
      <div>Course Status</div>
      <div className="btn-group course-actions" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-light course-actions-button">
          <div className="d-flex flex-row"><FaBan className="align-self-center" /> Unpublish</div>
        </button>
        <button type="button" className="btn btn-success course-actions-button">
          <div className="d-flex flex-row"><FaCheckCircle className="align-self-center" /> Published</div>
        </button>
      </div>
      <button type="button" className="btn btn-light course-menu-btn">
        <FaFileImport /> Import Existing Content
      </button>
      <button type="button" className="btn btn-light course-menu-btn">
        <FaArrowRightFromBracket /> Import from Commons
      </button>
      <button type="button" className="btn btn-light course-menu-btn">
        <FaBullseye /> Choose Home Page
      </button>
      <button type="button" className="btn btn-light course-menu-btn">
        <FaChartSimple /> View Course Stream
      </button>
      <button type="button" className="btn btn-light course-menu-btn">
        <FaBullhorn /> New Announcement
      </button>
      <button type="button" className="btn btn-light course-menu-btn">
        <FaChartSimple /> New Analytics
      </button>
      <button type="button" className="btn btn-light course-menu-btn">
        <FaCalendarCheck /> View Course Notifications
      </button>
      <div className="course-to-do">To Do</div>
      <hr />
      <div className="course-to-do-title">
        <div>
          <FaCheckCircle style={{ color: "red" }} className="fa-todo-yes"/>
        </div>
        <div className="course-to-do-description">
        {/* eslint-disable-next-line */}
          <a href="">
            Grade A1 - ENV + HTML
          </a>
          <div>
            100 points Sep 18 at 11:59pm
          </div>
        </div>
        <div>
          <FaX style={{ color: "gray" }} className="fa-todo-x" />
        </div>
      </div>
      <div className="course-to-do">
        <div>
          Coming Up
        </div>
        <div className="course-calendar ms-auto p-2">
          <FaCalendarCheck />
          {/* eslint-disable-next-line */}
          <a href="">
            View Calendar
          </a>
        </div>
      </div>
      <hr />
      <div className="course-calendar-title">
        <FaCalendarCheck />
        <div className="course-calendar-description">
          {/* eslint-disable-next-line */}
          <a href="">
            Lecture
          </a>
          <div>
            CS4550.12631.202410
          </div>
          <div>
            Sep 11 at 11:45am
          </div>
        </div>
      </div>
      <div className="course-calendar-title">
        <FaCalendarCheck />
        <div className="course-calendar-description">
          {/* eslint-disable-next-line */}
          <a href="">
            CS5610 06 SP23 Lecture
          </a>
          <div>
            CS4550.12631.202410
          </div>
          <div>
            Sep 11 at 6pm
          </div>
        </div>
      </div>
      <div className="course-calendar-title">
        <FaCalendarCheck/>
        <div className="course-calendar-description">
          {/* eslint-disable-next-line */}
          <a href="">
            <span>
              CS5610 Web Development
            </span>
            <span>
              Summer 1 2023 - LECTURE
            </span>
          </a>
          <div>
            CS4550.12631.202410
          </div>
          <div>
            Sep 11 at 7pm
          </div>
        </div>
      </div>
      <div className="course-calendar-title">
        {/* eslint-disable-next-line */}
        <a href="">
          12 more in the next week...
        </a>
      </div>
    </div>
  );
}

export default Status;