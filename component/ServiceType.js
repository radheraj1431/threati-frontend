import React from "react";

import { ZsExpandableTableGlobe } from "../../../components";
import { Row } from "react-bootstrap";

const ServiceType = React.memo(props => {
  let threatType = props.data;
  let serviceColour = ["#5A5BA8", "#59A39C", "#59A062", "#9E845A", "#9C635B"];
  let columns = [
    {
      key: "count",
      text: "#",
      width: "34",
      render: object => <span>{object["count"]}</span>
    },
    {
      key: "port",
      text: "PORT",
      width: "33",
      render: object => <span>{object["port"]}</span>
    },
    {
      key: "protocol",
      text: "SERVICE TYPE",
      width: "33",
      render: (object) => <div style={{ display: "flex", flexDirection: "row" }}>
        <span className="service-dot" style={{ color: serviceColour[threatType.indexOf(object)] }}>&#8226;</span>
        <span>{object["protocol"]}</span>
      </div>
    }
  ];

  return (
    <React.Fragment>
      <div className="sectionTitle">Service Types</div>
      <hr className="hrtop" />
      <Row className="service-types-container">
        <ZsExpandableTableGlobe columns={columns} globe={true} showTh={true} topLine={false} dataSource={threatType} pagination={false} className="bottomContent" />
      </Row>
    </React.Fragment>
  );
});

export default ServiceType;
