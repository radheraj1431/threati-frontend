import React, { Component } from 'react'
import { connect } from "react-redux";
import $ from "jquery";
import { Row, Col } from "react-bootstrap";
import globeActions from "../../../../core/redux/glob/globaction";
import authActions from "../../../../core/redux/auth/authActions"
import fevicon from "./imgs/logo.svg";
import ZeronsecLogo from "../../../../core/images/logo/ZSWhite.png";
import { init as initPaths } from "./paths";
import initGlobe from "./";
import TopRansomewares from './component/TopRansomewares';
import LocalTime from './component/LocalTime';
import AttackTrends from './component/AttackTrends';
import TodayAttacks from './component/TodayAttacks';
import TopAttackersCountries from './component/TopAttackersCountries';
import ServiceType from './component/ServiceType';
import TopAttackersAddress from './component/TopAttackersAddress';
import ThreatByType from './component/ThreatByType';
import InfectionPerSecond from './component/InfectionPerSecond';
import ThreatInfectedSystem from './component/ThreatInfectedSystem';
import LiveCommunicationTable from './component/LiveCommunicationTable';
import Globe3DWrapper from './globe3dWrapper';

var stompClient = null;
const { isSession } = authActions;
let interval;
class Globe3D extends Component {
    constructor(props) {
        super(props);
this.timer = null;
        this.state = {
            animate: false,
            size: 'large',
            mounted: false,
            randata: [],
            count: false,
            attackorigin: [],
            Allattacktype: [],
            address: [],
            threattype: [],
            infected: [],
            globeData: [],
            TableData: [],
            mount: false,
            todayAttacks: "0",
            infectedSystemCount: "0",
            timedata: "",
            color: [
                "#C1E7F1",
                "#C2E7F1",
                "#6CC9DF",
                "#42BAD7",
                " #28A0BD"
            ],
            serviceColour: [
                "#5A5BA8",
                "#59A39C",
                "#59A062",
                "#9E845A",
                "#9C635B"
            ],
           
            //Charts Data Arrays
            polarData: [],
            barData: [],
            polarColours: [
                "#ee8f34",
                "#ed2329",
                "#28509d",
                "#3ec1f0",
                "#3db773"
            ],

        }
    }
    componentDidMount() {

        this.setState({ mounted: true });
        localStorage.setItem("localTime", "00:00:00")
        this.getEveryTime(false);
        this.props.getalldata();
        this.connect();
        this.timer = setInterval(() => {
            // this.props.getalldata();
            document.getElementsByClassName("polarPerProcessFill")
        }, 20000);
        $('#globid').each(function () {
            $(this)[0].oncontextmenu = function () {
                return false;
            };
        });
    }

    componentWillUnmount() {
        clearInterval(this.timer);
      }

    static getDerivedStateFromProps(nextProps, prevState) {
        let update = {};
        switch (nextProps.globeServices.type) {
            case "GLOB_TODAY_ATTACK_SUCCESS":
                update.todayAttacks = nextProps.globeServices.data
                break;
            case "GLOB_ALL_DATA_SUCCESS":
                nextProps.fackaction();
                update.todayAttacks = nextProps.globeServices.data.todayAttack;
                update.polarData = nextProps.globeServices.data.topAttackType;
                if (prevState.barData !== nextProps.globeServices.data.infectionByDay) {
                    update.barData = nextProps.globeServices.data.infectionByDay;
                }
                update.randata = nextProps.globeServices.data.topRansomware
                update.infected = nextProps.globeServices.data.infectedSystem;
                update.address = nextProps.globeServices.data.attackerAddress;
                update.threattype = nextProps.globeServices.data.serviceType
                localStorage.setItem("localTime", nextProps.globeServices.data.serverTime);
                update.attackorigin = nextProps.globeServices.data.attackOrigin;
                update.infectedSystemCount = nextProps.globeServices.data.infectedSystemCount;
                $.fn.jQuerySimpleCounter = function (options) {
                    var settings = $.extend({
                        start: 0,
                        end: 0,
                        easing: 'swing',
                        duration: 5000,
                        complete: '',
                        percentage: true
                    }, options);

                    var thisElement = $(this);

                    $({ count: settings.start }).animate({ count: settings.end }, {
                        duration: settings.duration,
                        easing: settings.easing,
                        step: function () {
                            $(thisElement).text(settings.percentage === true ? parseFloat(this.count).toFixed(2) + "%" : Math.ceil(this.count));
                        },
                        complete: settings.complete
                    });
                };

                if (prevState.mount === false) {
                    $('#number1').jQuerySimpleCounter({ end: update.todayAttacks, percentage: false });
                    update.randata.map((e, j) => {
                        return $('#ransomware' + j).jQuerySimpleCounter({ end: e.percentage });
                    })
                    update.polarData.map((e, j) => {
                        return $('#threatBy' + j + 'Type').jQuerySimpleCounter({ end: e.percentage });
                    })
                }
                prevState.mount = true;
                break;
            default:
        }

        return Object.keys(update).length === 0 ? null : update;
    }

    getEveryTime = (status) => {

        let servertime = localStorage.getItem("localTime").split(':')
        let hours = parseInt(servertime[0]), minutes = parseInt(servertime[1]), second = parseInt(servertime[2]);
        if (status === true) {
            $("#serverTime").text(`${hours > 9 ? hours : "0" + hours}:${minutes > 9 ? minutes : "0" + minutes}:${second > 9 ? second : "0" + second}`)

        } else {
            localStorage.setItem("localTime", `${hours}:${minutes}:${second}`)
            interval = setInterval(() => {
                let servertime = localStorage.getItem("localTime").split(':')
                let hours = parseInt(servertime[0]), minutes = parseInt(servertime[1]), second = parseInt(servertime[2]);
                second++;
                if (second === 60) {
                    minutes = minutes + 1;
                    second = 0;
                }
                if (minutes === 60) {
                    hours = hours + 1;
                    minutes = 0;
                }
                if (hours > 24) {
                    hours = 0;
                }
                localStorage.setItem("localTime", `${hours > 9 ? hours : "0" + hours}:${minutes > 9 ? minutes : "0" + minutes}:${second > 9 ? second : "0" + second}`);
                $("#serverTime").text(`${hours > 9 ? hours : "0" + hours}:${minutes > 9 ? minutes : "0" + minutes}:${second > 9 ? second : "0" + second}`);
            }, 1000)
            this.setState({ interval: interval });

        }
    }

    connect = () => {
        const Stomp = require('stompjs')
        var SockJS = require('sockjs-client')
        var sockJsProtocols = ["xhr-polling"];
        SockJS = new SockJS('/zs', null, { transports: sockJsProtocols })
        stompClient = Stomp.over(SockJS);
        stompClient.debug = () => { };
        stompClient.connect({}, this.onConnected, this.onError);
    }
    onError = (error) => {
        this.connect();
    }
    onConnected = () => {
        clearInterval(this.state.interval)
        // stompClient.send("/app/liveTableInfection",{});
        stompClient.subscribe('/topic/liveTableInfection', this.onMessageReceived);
        // stompClient.send("/app/infectionBySecond",{});
        stompClient.subscribe('/topic/infectionBySecond', this.oninfectionBySecondReceived);
    }


    oninfectionBySecondReceived = (payload) => {
        var message = JSON.parse(payload.body);
        localStorage.setItem("infectionCount", JSON.stringify(message.response.count));
        localStorage.setItem("localTime", message.response.serverTime);
        this.getEveryTime(true);
    }

    onMessageReceived = (payload) => {
        var message = JSON.parse(payload.body);
        if(message.response.data !== undefined){
            if (Object.keys(message.response.data).length > 0) {
    
                const TableData = [...this.state.TableData]
                TableData.unshift(message.response.data);
                if (TableData.length > 5) {
                    TableData.pop();
                }
                this.state.mounted && this.setState({ TableData })
                if(message.response.data){
                    // local
                    initPaths([[message.response.data.srcGeo.srcLat, message.response.data.srcGeo.srcLong, message.response.data.dstGeo.dstLat, message.response.data.dstGeo.dstLong]], message.response.data.score, message.response.data.srcCountry, message.response.data.dstCountry);                   
                    // build
                    // initPaths([[message.response.data.srcGeo.srcLat, message.response.data.srcGeo.srcLong, message.response.data.destGeo.destLat, message.response.data.destGeo.destLong]], message.response.data.score, message.response.data.srcCountry, message.response.data.destCountry);
                }
    
            }
            this.state.mounted && this.setState({ todayAttacks: message.response.infectionCount })
        }
        if(message.response.allData.status){
            const globData = message.response.allData.response;
            this.setState({
               todayAttacks : globData.todayAttack,
               polarData : globData.topAttackType,
               barData : globData.infectionByDay,
               randata : globData.topRansomware,
               infected : globData.infectedSystem,
               address : globData.attackerAddress,
               threattype : globData.serviceType,
               attackorigin : globData.attackOrigin,
               infectedSystemCount : globData.infectedSystemCount
            });
            $.fn.jQuerySimpleCounter = function (options) {
                var settings = $.extend({
                    start: 0,
                    end: 0,
                    easing: 'swing',
                    duration: 5000,
                    complete: '',
                    percentage: true
                }, options);

                var thisElement = $(this);

                $({ count: settings.start }).animate({ count: settings.end }, {
                    duration: settings.duration,
                    easing: settings.easing,
                    step: function () {
                        $(thisElement).text(settings.percentage === true ? parseFloat(this.count).toFixed(2) + "%" : Math.ceil(this.count));
                    },
                    complete: settings.complete
                });
            };

            if (this.state.mount === false) {
                $('#number1').jQuerySimpleCounter({ end: globData.todayAttack, percentage: false });
                globData.randata.map((e, j) => {
                    return $('#ransomware' + j).jQuerySimpleCounter({ end: e.percentage });
                })
                globData.polarData.map((e, j) => {
                    return $('#threatBy' + j + 'Type').jQuerySimpleCounter({ end: e.percentage });
                })
            }
        }
    }
    render() {
        const { randata, barData, attackorigin, address, TableData, todayAttacks, infectedSystemCount, threattype, polarData, infected } = this.state;

        return (
            <Globe3DWrapper id="globid">
                <div className="headerContent">
                    <div className="globeTitle"><img src={fevicon} className="feviconImg" alt="threatI-favicon" /><span>Real-Time Attack View</span></div>
                </div>

                <Row className="row-1">
                    <Col className="top-ransomwares" sm={{ span: 3, order: 1 }} md={{ span: 3, order: 1 }} lg={{ span: 2, order: 1 }} xl={{ span: 2, order: 1 }}>
                        <TopRansomewares data={randata} />
                    </Col>
                    <Col className="globe-section" sm={{ span: 6, order: 2 }} md={{ span: 6, order: 2 }} lg={{ span: 8, order: 2 }} xl={{ span: 8, order: 2 }}>
                        <div ref={(e) => initGlobe(e)} id="globe-app" className="globe-app" style={{ height: '100%', width: '100%' }}>
                            <ul id="js-list" className="js-globe"></ul>
                        </div>
                    </Col>
                    <Col className="section-1" sm={{ span: 3, order: 3 }} md={{ span: 3, order: 3 }} lg={{ span: 2, order: 3 }} xl={{ span: 2, order: 3 }}>
                        <LocalTime />
                    </Col>
                </Row>

                <Row className="row-2">
                    <Col className="attack-trands" sm={{ span: 3, order: 1 }} md={{ span: 3, order: 1 }} lg={{ span: 2, order: 1 }} xl={{ span: 2, order: 1 }}>
                        <AttackTrends data={barData} />
                    </Col>
                    <Col className="today-attacks" sm={{ span: 3, order: 2, offset: "6" }} md={{ span: 3, order: 2, offset: "6" }} lg={{ span: 2, order: 2, offset: "8" }} xl={{ span: 2, order: 2, offset: "8" }}>
                        <TodayAttacks todayAttacks={todayAttacks} infectedSystemCount={infectedSystemCount} />
                    </Col>
                </Row>

                <Row className="row-3">
                    <Col className="attacker-countries" sm={{ span: 3, order: 1 }} md={{ span: 3, order: 1 }} lg={{ span: 2, order: 1 }}>
                        <TopAttackersCountries data={attackorigin} />
                    </Col>
                    <Col className="service-types" sm={{ span: 3, order: 2, offset: "6" }} md={{ span: 3, order: 2, offset: "6" }} lg={{ span: 2, order: 2, offset: "8" }}>
                        <ServiceType data={threattype} />
                    </Col>
                </Row>

                <Row className="row-4">
                    <Col className="attacker-address" sm={{ span: 3, order: 1 }} md={{ span: 3, order: 1 }} lg={{ span: 2, order: 1 }}>
                        <TopAttackersAddress data={address} />
                    </Col>
                    <Col className="threat-by-type" sm={{ span: 3, order: 2, offset: "6" }} md={{ span: 3, order: 2, offset: "6" }} lg={{ span: 2, order: 2, offset: "8" }}>
                        <ThreatByType data={polarData} />
                        <img src={ZeronsecLogo} className="zeronsecLogo" alt="zeronsec" />
                    </Col>
                </Row>

                <Row className="row-5">
                    <Col className="infections-second" sm={{ span: 3, order: 1 }} md={{ span: 3, order: 1 }} lg={{ span: 2, order: 1 }}>
                        <InfectionPerSecond />
                    </Col>
                    <Col className="live-communications globeTable" sm={{ span: 6, order: 2 }} md={{ span: 6, order: 2 }} lg={{ span: 8, order: 2 }}>
                        <LiveCommunicationTable data={TableData} />
                    </Col>
                    <Col className="top-infected-systems" sm={{ span: 3, order: 3 }} md={{ span: 3, order: 3 }} lg={{ span: 2, order: 3 }}>
                        <ThreatInfectedSystem data={infected} />
                    </Col>
                </Row>

            </Globe3DWrapper>
        )
    }
}


export default connect(state => ({ ...state.globReducer }), {
    ...globeActions,
    isSession
})(Globe3D);