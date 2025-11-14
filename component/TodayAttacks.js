import React from "react";
import { Row,Col } from 'react-bootstrap';
import malwareImage from "../imgs/malware22.svg";
import infectedsystem from "../imgs/infected2.svg";

const TodayAttacks = React.memo(props => {
    let todayAttacks = props.todayAttacks;
    let infectedSystemCount = props.infectedSystemCount;
    return (
        <React.Fragment>
            <Row className="align-items-center ml attacks-today">
                <Col sm={{ span: 3, order: 1 }} className="malware-container"><img src={malwareImage} style={{ height: '50px', width: '50px' }} alt="brand"></img></Col>
                <Col sm={{ span: 9, order: 2 }} className="number-of-attacks-today h-100 pl-0">
                    <div className="iconTitle">Number of Attacks Today</div>
                    <div className="iconCount" id="number1">{todayAttacks}</div>
                </Col>
            </Row>
            <Row className="align-items-center ml infected-system">
                <Col sm={{ span: 3, order: 1 }} className="infected-system-container"><img style={{ height: '50px', width: '50px' }} src={infectedsystem} alt="brand"></img></Col>
                <Col sm={{ span: 9, order: 2 }} className="number-of-infected-system h-100 pl-0">
                    <div className="iconTitle">Number of Infected Systems</div>
                    <div className="iconCount">{infectedSystemCount}</div>
                </Col>
            </Row>
        </React.Fragment>
    );
});

export default TodayAttacks;
