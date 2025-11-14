import React from "react";
import { Row } from "react-bootstrap";
import { ZsProgress, ZsExpandableTableGlobe } from "../../../components";

const ThreatInfectedSystem = React.memo(props => {
  const infected = props.data;
  const columns = [
    {
      key: "count",
      text: "#",
      width: "20",
      render: object => <span>{object["count"]}</span>
    }, {
      key: "percentage",
      width: "30",
      render: object => <ZsProgress className="pogressbar" width={object["percentage"]} globe />
    }, {
      key: "ip",
      text: "ADDRESS",
      width: "50",
      render: object => <span>{object["ip"]}</span>
    }
  ];
  return (
    <React.Fragment>
      <div className="sectionTitle">Top Infected Systems</div>
      <hr className="hrtop" />
      <Row className="top-infected-system-container">
        <ZsExpandableTableGlobe
          columns={columns}
          dataSource={infected}
          globe={true}
          showTh={true}
          topLine={false}
          pagination={false}
          className="bottomContent"
        />
      </Row>
    </React.Fragment>
  );
});

export default ThreatInfectedSystem;
