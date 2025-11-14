import React from "react";
import { Row } from "react-bootstrap";
import severityImage from "../imgs/severity.svg"

const LocalTime = React.memo(props => {
  return (
    <React.Fragment>
      <Row className="severity-container">
        <img src={severityImage} className="severity-content" alt="brand"></img>
      </Row>
      <Row className="local-time">
        <div className="localTimetitle">Local Time</div>
        <hr className="hrtop" />
        <div id="serverTime" className="timestyle">
          {localStorage.getItem("localTime") === undefined || localStorage.getItem("localTime") === null ? "00:00:00" : localStorage.getItem("localTime")}
        </div>
      </Row>
    </React.Fragment>
  );
});

export default LocalTime;
