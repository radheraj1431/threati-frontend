import React from "react";
import { Row } from "react-bootstrap";
import { ZsProgress, ZsExpandableTableGlobe } from "../../../components";

const TopAttackersAddress = React.memo(props => {
  const address = props.data;
  const columns = [
    {
      key: "count",
      text: "#",
      width: "20",
      render: object => <span>{object["count"]}</span>
    },
    {
      key: "bar",
      width: "30",
      render: object => <ZsProgress width={object["percentage"]} globe totalAttacks />
    },
    {
      key: "ip",
      text: "ADDRESS",
      width: "50",
      render: object => <span>{object["ip"]}</span>
    },
  ];
  return (
    <React.Fragment>
      <div className="sectionTitle">Top Attacker Address</div>
      <hr className="hrtop" />
      <Row className="top-attacker-address-container">
        <ZsExpandableTableGlobe
          columns={columns}
          showTh={true}
          topLine={false}
          dataSource={address}
          pagination={false}
          className="bottomContent"
        />
      </Row>
    </React.Fragment>
  );
});

export default TopAttackersAddress;
