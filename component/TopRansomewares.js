import React from "react";
import { Row, Col } from "react-bootstrap";


const TopRansomewares = React.memo(props => {
  const randata = props.data;
  return (
    <React.Fragment>
      <div className="sectionTitle">Top Ransomwares</div>
      <hr className="hrtop" />
      <Row className="ransomwares-container">
        <Col className="left-section-1" sm={6}>
          <Row className="ransomwares-data"><span className="ransomwares-title text-truncate">{randata.length > 0 ? randata[0].name : "Ransomware"}</span></Row>
          <hr className="hrrows" />
          <Row className="ransomwares-data text-truncate"><span className='counter ransomwares-count' id="ransomware0">{randata.length > 0 ? randata[0].percentage : "0.0"}%</span></Row>
        </Col>
        <Col className="left-section-2" sm={6}>
          <Row className="ransomwares-data"><span className="ransomwares-title text-truncate">{randata.length > 1 ? randata[1].name : "Ransomware"}</span></Row>
          <hr className="hrrows" />
          <Row className="ransomwares-data"><span className='counter ransomwares-count' id="ransomware1">{randata.length > 1 ? randata[1].percentage : "0.0"}%</span></Row>
        </Col>
      </Row>
      <Row className="ransomwares-container">
        <Col className="left-section-3 h-100" sm={6}>
          <Row className="ransomwares-data"><span className="ransomwares-title text-truncate">{randata.length > 2 ? randata[2].name : "Ransomware"}</span></Row>
          <hr className="hrrows" />
          <Row className="ransomwares-data"><span className='counter ransomwares-count' id="ransomware2">{randata.length > 2 ? randata[2].percentage : "0.0"}%</span></Row>
        </Col>
        <Col className="left-section-4 h-100" sm={6}>
          <Row className="ransomwares-data"><span className="ransomwares-title text-truncate">{randata.length > 3 ? randata[3].name : "Ransomware"}</span></Row>
          <hr className="hrrows" />
          <Row className="ransomwares-data"><span className='counter ransomwares-count' id="ransomware3">{randata.length > 3 ? randata[3].percentage : "0.0"}%</span></Row>
        </Col>
      </Row>
    </React.Fragment>
  );
});

export default TopRansomewares;
