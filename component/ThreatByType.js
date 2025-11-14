import React from "react";
import { Row, Col } from "react-bootstrap";

const ThreatByType = React.memo(props => {
  let polarData = props.data;
  let polarColours = (props.noTitle) ? ["#ee8f34", "#ee8f34", "#ee8f34", "#ee8f34", "#ee8f34"] : ["#ee8f34", "#ed2329", "#28509d", "#3ec1f0", "#3db773"];

  return (
    <React.Fragment>
      {(props.noTitle) ? "" :
        <div className="sectionTitle">Threat By Type</div>
      }
      <hr className="hrtop" />
      <Row className="threat-by-type-container">
        {polarData.map((data, i) => (
          <Row className="threat-by-type-item-wrapper" key={i}>
            <Row className="threat-by-type-data">
              <Col className="threat-by-type-title" sm={"9"}>{data.key}</Col>
              <Col className="threat-by-type-value" sm={"3"}  >
                <span id={"threatBy" + i + "Type"}>{data.percentage}%</span>
              </Col>
            </Row>
            <Row className="progressbar-wrapper" >
              <Row
                style={{
                  width: data.percentage + "%",
                  height: "100%",
                  background: "linear-gradient(to right, #16222A 0%," + polarColours[i] + " 80%)",
                  borderColor: "linear-gradient(to right, #16222A 0%," + polarColours[i] + " 80%)"
                }} className="polarPerProcessFill"></Row>

            </Row>
          </Row>
        ))}

      </Row>
    </React.Fragment>
  );
});

export default ThreatByType;
