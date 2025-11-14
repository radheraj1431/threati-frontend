import React from "react";
import { Row, Col } from 'react-bootstrap';
import { ZsExpandableTableGlobe } from "../../../components";
import { ZsGlobeRingChart } from "../../../components/Charts";

const TopAttackersCountries = React.memo(props => {
  const attackOrigin = props.data;

  const column = [
    {
      key: "count",
      text: "#",
      width: "35",
      render: object => <span style={{ color: color[attackOrigin.indexOf(object)] }}>{object["value"]}</span>
    }, {
      key: "country",
      text: "Country",
      width: "65",
      render: object => (<span style={{ color: color[attackOrigin.indexOf(object)] }}><img className="imgStyle"
        style={{ marginRight: "9px" }}
        src={require(`../../../../../core/images/flags/${object["key"]}.png`)}
        alt="flage"
      ></img>
        {object["country"]}</span>)
    }
  ];
  const color = ["#C1E7F1", "#C2E7F1", "#6CC9DF", "#42BAD7", " #28A0BD"];

  return (
    <React.Fragment>
      <div className="sectionTitle">Top Attacker Countries</div>
      <hr className="hrtop" />
      <Row className="attacker-contries-container">
        <Col sm={{ span: "6" }} md={{ span: "7" }} className="attacker-contries-table-wrapper">
          <ZsExpandableTableGlobe
            columns={column}
            dataSource={attackOrigin}
            globe={true}
            topLine={false}
            pagination={false}
            showTh={false}
            colors={color}
          />
        </Col>
        <Col sm={{ span: "6" }} md={{ span: "5" }} className="chart-area">
          <div className="chartOuterWrapper" id="ringChart">
            <div className="chartInnerWrapper" id="ringChart_cc">
              <ZsGlobeRingChart id="ringChart" data={attackOrigin} globe />
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
});

export default TopAttackersCountries;