import styled from "styled-components";

const Globe3DWrapper = styled.div`
height:100%;
color:white;
overflow:auto;
background-image:url('${require("./imgs/newbackground.svg")}');
padding:25px;

.globe-app{
    position: relative;
    z-index: 11;
    .js-globe{
        position:absolute;
        background-repeat: no-repeat;
        right:8%;
        left: 68%;
        top:10%;
        @keyframes li {
            from {
              opacity: 0;
              -webkit-transform: translate3d(0, -100%, 0);
              transform: translate3d(0, -100%, 0);
            }
          
            to {
              opacity: 1;
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
            }
        }
        li {
            animation: li 1s;
            font-size:12px;
        }
    }
}

.sectionTitle{
    letter-spacing:1.36px;
    font-family: Orbitron;
    color:#fff;
    text-align:left;
    font-size: 1rem !important;
}
.feviconImg{
    height: 25px;
    width: 28px;
    margin-right: 10px;
}
.globeTitle{
    font-size: 1rem;
    font-family: Orbitron;
    letter-spacing: 1.36px;
    margin-top:7px;
    width:fit-content;
    display:flex;
}
.hrtop{
    margin: 3px 0px;
    width: 100%;
    border: solid 1px rgb(23,195,252,0.5) !important;   
}

.localTimetitle{
    letter-spacing:1.36px;
    font-family: Orbitron;
    top:26px;
    text-align:left;
    color: #10c0f8;
    font-size: 1.125rem;
     letter-spacing: 2px;
}

.timestyle{
    font-size: 25px;
    font-family: Orbitron;
    color: #ffffff;
    letter-spacing: 3px;
}

.iconTitle{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12px;
    font-family: Orbitron;
    color: #ffffff;
    letter-spacing: 0.36px;
}
.iconCount{
    font-size: 25px;
    font-family: Orbitron;
    color: #ffffff;
    letter-spacing: 3px;
}
.glob-progress-container{
    margin:0px !important;
    height:7px !important;
}
.imgStyle {
    height: 15px !important;
    width: 25px !important;
}

.globe-table thead tr th {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.globeTable{
    overflow: hidden;
    .table-wrapper{
        max-width:100% !important;
    }
    .table-wrapper table{
        border-collapse: collapse;
        bottom:0px !important;
    }
    .table-wrapper table th{
        height:20px !important;
        padding:5px !important;
        margin: 3px 0px;
        border-top: solid .3px rgb(23,195,252,0.5) !important;
        border-bottom: solid .3px rgb(23,195,252,0.5) !important;   
        background-color: #061116;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }
    .table-wrapper table th:hover{
        background-color: #061116;
    }
    .table-wrapper table{
        td{
            padding: 10.5px 5px;
            font-family: Roboto-Regular;
            line-height : 0 ;
            font-size: 0.75rem !important;
        } 
        th{
            top : -4px;
            font-family: Roboto-Regular;
            background: transparent;
            font-size: 0.875rem !important;
        }
    }
    .table-wrapper table td:nth-child(1) {
        padding-left: 15px;
    }
}

.hrrows{
    background-color:  rgb(17, 150, 193) !important; 
    width: 100%;
    padding: 0px;
    margin: 3px 0px !important;
}

/* ---------------------------------------- New Code ---------------------------------------- */
.headerContent{
    position: fixed;
    top: 0;
    left: -3px;
    display: flex;
    justify-content: center;
    width: 100%;
    color: white;
}
.row-1{
    margin: -7px 0px 0px;
    height: 16%;
}
.row-2,
.row-3,
.row-4,
.row-5{
    margin: 0px;
    height: 21%;
}

/* ransomeares Section */
.top-ransomwares{
    height: 100%;
}

.ransomwares-container{
    height: 35%;
    display: flex;
    align-items: center;
}

.ransomwares-container,
.ransomwares-data{
    margin: 0px;
    width: 100%;
}

.ransomwares-title{
    color: rgb(250, 173, 20);
}

.ransomwares-title,
.ransomwares-count{
    font-family: Orbitron;
    font-size: 0.75rem;
    letter-spacing: 1.36px;
}

.ransomwares-count{
    color: rgb(16, 192, 248);
    font-weight: bold;
}

.left-section-1,
.left-section-2,
.left-section-3,
.left-section-4{
    padding-left: 5px;
    padding-right: 5px;
}

/* globe Section */
.globe-section{
    // height: 494%;
    height: 81vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

/* severity & local time Section */
.section-1{
    height: 100%;
}

.severity-container,
.local-time{
    height: 50%;
}

.severity-content{
    width: 100%;
}

.localTimetitle{
    color: rgb(16, 192, 248);
    font-size: 1.125rem;
    letter-spacing: 2px;
}

.timestyle{
    font-size: 25px;
    font-family: Orbitron;
    color: #ffffff;
    letter-spacing: 3px;
}

/* attack trends Section */
.globeBarChart{
    width: 100%;
    height: 82%;
    position: relative;
}

/* today-attacks & Infected System Section */
.today-attacks{
    height: calc(100% - 15px);
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
}

.malware-container,
.infected-system-container{
    padding: 0px 5px;
}

.number-of-attacks-today,
.number-of-infected-system{
    align-items: center;
    margin-top: 5px;
}

/* top arracker countries Section */
.attacker-countries{
    height: 100%;
    margin-top: -15px;
}

.attacker-contries-container{
    height: 82%;
    width: 100%;
    margin: 0px;
}

.attacker-contries-table-wrapper{
    padding-left: 0px;
}

.chartOuterWrapper,
.chartInnerWrapper{
    height: 100%;
    width: 100%;
}

/* Service Types Section */
.hrtop{
    width:100%;
}

.service-types-container{
    width: 100%;
    height: 65%;
    margin: 5px 0px 0px;
}

.service-types{
    height: calc(100% + 15px);
    padding: 0px;
    margin-top: -15px;
}

.chart-area{
    padding-left: 0px;
    padding-right: 0px;
}

.service-dot{
    position: relative;
    top: 1px;
    right: 1px;
    font-size: 28px;
    border-radius: 50%;
}

/* top attacker address Section */
.attacker-address{
    height: 100%;
}

.top-attacker-address-container{
    width: 100%;
    margin: 5px 0px 0px;
    height: 80%;
}

/* threat by type Section */
.threat-by-type{
    height: calc(100% + 34px);
    padding: 0px;
    display: flex;
    margin-top: -34px;
    flex-direction: column;
    justify-content: flex-end;
}
.zeronsecLogo{
    position: absolute;
    height: 40px;
    bottom: 70px;
    right: 111%;
    background: #25648d9c;
    opacity: 0.8;
    box-shadow: 0px 0px 20px 3px #25648d;
}

.threat-by-type-container{
    margin: 0px;
    height: 85%;
}

.threat-by-type-item-wrapper{
    width: 100%;
    margin: 0px;
    height: 17%;
}

.threat-by-type-data{
    width: 100%;
    margin: 0px;
    font-size: 12px;
    letter-spacing: 0.36px;
    height: 50%;
}

.threat-by-type-title{
    padding: 0px;
}

.threat-by-type-value{
    display: flex;
    justify-content: flex-end;
}

.progressbar-wrapper{
    width: 100%;
    margin: 0px;
    border: 1px solid rgb(11, 53, 67);
    height: 10px;
    border-radius: 25px;
}

.polarPerProcessFill{ 
    margin:0px;
    border: 1px solid rgb(11, 53, 67);
    borderRadius: 25px;
    opacity: 0.7;  
    backface-visibility: hidden;
    animation-name: polarPerProcess;
     animation-duration: 5s ;
     height : 6.2px;
     animation-timing-function: ease-in;
}
@keyframes polarPerProcess {  
      0%  {
        width : 0;  
      } 
  }
.pogressbar{
    backface-visibility: hidden;
    animation-name: progressBar;
    animation-duration: 5s ;
    animation-timing-function: ease-in;
}
@keyframes progressBar {  
     0%  {
       width : 0;  
     } 
 }


/* infection Section */
.infections-second{
    height: 100%;
}

.globeLineChart{
    width: 100%;
    height: 78%;
    position: relative;
}

/* live communications Section */
.live-communications{
    height: 100%;
    padding-left: 0px;
}

.sectionTitle{
    margin-bottom: 5px;
}

/* top infected Section */
.top-infected-systems{
    height: 100%;
    margin-top: 5px;
    padding: 0px;
}

.top-infected-system-container{
    height: 75%;
    width: 100%;
    margin: 5px 0px 0px;
}


/* --------------- Media Queries -----------------*/

@media only screen and (max-width: 1920px) and (max-height: 1080px),
@media only screen and (max-width: 1920px) and (max-height: 969px) {
    .top-infected-systems{
        margin-top: -2px;
    }
}

@media only screen and (max-width: 1680px) and (max-height: 1050px),
@media only screen and (max-width: 1680px) and (max-height: 907px){
    .top-ransomwares,
    .attack-trands,
    .attacker-countries,
    .attacker-address,
    .infections-second{
        padding-left: 0px;
    }
}

@media only screen and (max-width: 1680px) and (max-height: 1050px) {
    
    .globeTitle {
        margin-top: 8px !important;
    }
    .threat-by-type-title {
        padding: 0px;
        font-size: 14px;
        letter-spacing: 1.32px;
    }
}

@media only screen and (max-width: 1680px) and (max-height: 907px) {
    .globe-table thead tr th {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .progressbar-wrapper {
        margin-top: 6px;
    }
}

@media only screen and (max-width: 1600px) and (max-height: 900px) {
    .feviconImg {
        height: 22px !important;
        width: 22px !important;
        margin-right: 10px !important;
        margin-top: 2px !important;
    }
    .globeTitle {
        margin-top: 6px !important;
    }
    // .malware-container,
    //  .gmgSUK .infected-system-container {
    //     padding: 0px 15px 10px !important;
    // }
    .today-attacks {
        padding-left: 8px;
    }
    .progressbar-wrapper {
        margin-top: 6px;
    }
    .globe-table thead tr th {
        position: sticky;
        height: 14px;
        border: none;
        color: white;
        line-height: 1.36;
        font-size: 13px !important;
        vertical-align: top;
        text-transform: uppercase;
        margin: 0;
        padding: 0;
        z-index: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .globe-table tbody tr td {
        padding: 7.5px 0;
        line-height: 0 !important;
        font-size: 12px !important;
        text-align: left;
        border: 1px solid transparent;
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}

@media only screen and (max-width: 1600px) and (max-height: 789px),
@media only screen and (max-width: 1600px) and (max-height: 757px) {
    paddine: 20px;
    .feviconImg {
        height: 22px !important;
        width: 22px !important;
        margin-right: 10px !important;
        margin-top: 2px !important;
    }
    .progressbar-wrapper {
        margin-top: 5px;
    }
    .sectionTitle {
        font-size: 12px !important;
    }
    .attacker-contries-container {
        height: 83%;
        width: 100%;
        margin: 0px;
    }
    .globe-table tbody tr td {
        padding: 4.5px 0;
    }
    .ml{
        margin-top: -9px;
    }
    .service-types {
        margin-top: -24px;
    }
    .globeTitle {
        margin-top: 3px !important;
    }
    .local-time{
        margin-top: -8px;
    }
    .globe-table thead tr th {
        position: sticky;
        height: 20px;
        border: none;
        color: white;
        line-height: 1.36;
        font-size: 12px !important;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: top;
        text-transform: uppercase;
        margin: 0;
        padding: 0;
        z-index: 1;
    }
}

@media only screen and (max-width: 1440px) and (max-height: 900px) {
    .attacker-countries{
        margin-top: -10px;
    }
    .malware-container,
    .infected-system-container {
        padding: 0px 5px !important;
    }
    .feviconImg {
        height: 21px !important;
        width: 21px !important;
        margin-right: 10px !important;
        margin-top: 1px !important;
    }
    .globeTitle {
        font-size: 16px !important;
        margin-top: 6px !important;
        align-items: flex-start !important;
    }
    .sectionTitle{
        font-size: 14px !important;
    }
    .ransomwares-title{
        font-size: 11px !important;
    }
    .ransomwares-count{
        font-size: 12px !important;
    }
    .localTimetitle{
        font-size: 14px !important;
    }
    .threat-by-type{
        margin-top: -44px;
    }
    .zeronsecLogo{
        height: 30px;
    }
    .top-infected-systems{
        margin-top: -1px;
    }
    .service-types{
        margin-top: -37px;
    }
    .today-attacks{
        margin-top: -10px;
        padding-left: 8px;
    }
    .timestyle,
    .iconCount{
        font-size: 18px !important;
    }
    .malware-container,
    .infected-system-container{
        padding: 0px 6px 10px !important;
    }
    .globeTitle{
        font-size: 11px;
        margin-top: 4px;
        align-items: flex-start;
    }
    .feviconImg{
        height: 18px;
        width: 18px;
        margin-right: 10px;
    }
    .globe-table thead tr th{
        font-size: 11px !important;
        height: 15px !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .globe-table tbody tr td{
        font-size: 11px !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 !important;
    }
    .threat-by-type-title,
    .threat-by-type-value{
        font-size: 9px;
    }
    .imgStyle{
        width: 20px !important;
        height: 14px !important;
    }
    .service-dot{
        font-size: 20px;
        position: relative;
        right: 1px;
        top: 1px;
        border-radius: 50%;
    }
    .top-ransomwares,
    .attack-trands,
    .attacker-countries,
    .attacker-address,
    .infections-second{
        padding-left: 0px;
    }
    .progressbar-wrapper{
        margin-top: 3px;
    }
}
@media only screen and (max-width: 1440px) and (max-height: 757px) {
    .globeTitle {
        font-size: 16px !important;
        margin-top: 3px !important;
        align-items: flex-start !important;
    }
    .feviconImg {
        height: 21px !important;
        width: 21px !important;
        margin-right: 10px !important;
        margin-top: 2px !important;
    }
}

@media only screen and (max-width: 1400px) and (max-height: 1050px) {
    .sectionTitle{
        font-size: 14px !important;
    }
    .imgStyle{
        margin-right: 5px !important;
    }
    .chart-area {
        padding-left: 7px;
        padding-right: 0px;
    }
    .globeTitle {
        margin-top: 8px !important;
    }
    .today-attacks {
        padding-left: 8px;
    }
}

@media only screen and (max-width: 1400px) and (max-height: 907px) {
    .sectionTitle{
        font-size: 14px !important;
    }
    .imgStyle{
        margin-right: 5px !important;
    }
    .chart-area {
        padding-left: 7px;
        padding-right: 0px;
    }
    .globeTitle {
        margin-top: 8px !important;
    }
    .hVCOAP .globe-table thead tr th {
        font-size: 13px !important;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .js-globe {
        right:5% !important;
        left:73% !important;
        li{
        font-size:11px !important;
        }
    }
}

@media only screen and (max-width: 1366px) and (max-height: 768px) {
    .js-globe {
        right:5% !important;
        left:69% !important;
        li{
        font-size:11px !important;
        }
    }
    padding: 19px;
    .hrrows{
        margin: 1px 0 0 0 !important;
    }
    .attack-trands{
        margin-top: -2px;
    }
    .attacker-countries{
        margin-top: -7px;
    }
    .chart-area{
        padding-left: 5px !important;
    }
    .infections-second{
        margin-top: 0px;
    }
    .attacker-address{
        margin-top: -1px;
    }
    .severity-container{
        margin-top: -14px;
    }
    .local-time{
        margin-top: -6px;
    }
    .today-attacks{
        margin-top: -18px;
    }
    .threat-by-type{
        margin-top: -41px;
    }
    .zeronsecLogo{
        height: 20px;
        bottom: 50px;
        right: 109%;
    }
    .service-types{
        margin-top: -38px;
    }
    .sectionTitle{
        font-size: 12px !important;
    }
    .ransomwares-title{
        font-size: 10px !important;
    }
    .ransomwares-count{
        font-size: 11px !important;
    }
    .localTimetitle{
        font-size: 14px !important;
    }
    .timestyle,
    .iconCount{
        font-size: 18px !important;
    }
    .malware-container,
    .infected-system-container{
        padding: 0px 6px 10px;
    }
    .iconCount{
    }
    .globeTitle{
        font-size: 11px;
        margin-top: 4px;
        align-items: flex-start;
    }
    .feviconImg{
        height: 20px !important;
        width: 25px !important;
        margin-right: 10px !important;
        margin-top: -1px !important;
    }
    .ml{
        margin-left: -21px;
    }
    .globe-table thead tr th{
        font-size: 11px !important;
        height: 15px !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .globe-table tbody tr td{
        font-size: 11px !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 !important;
    }
    .threat-by-type-title,
    .threat-by-type-value{
        font-size: 9px;
    }
    
    .imgStyle{
        width: 20px !important;
        height: 14px !important;
    }
    .service-dot{
        font-size: 20px;
        position: relative;
        right: 1px;
        top: 1px;
        border-radius: 50%;
    }
    .top-ransomwares,
    .attack-trands,
    .attacker-countries,
    .attacker-address,
    .infections-second{
        padding-left: 0px;
    }
    .progressbar-wrapper{
        margin-top: 3px;
    }
    .malware-container,
    .infected-system-container{
        padding: 0px 15px 10px !important;
    }
    .globeTitle {
        font-size: 12px !important;
        margin-top: 7px !important;
    }
}

@media only screen and (max-width: 1366px) and (max-height: 657px) {
    .malware-container,
    .infected-system-container {
        padding: 0px 19px 10px !important;
    }
    .today-attacks{
        margin-top: -12px !important;
    }
    .globeTitle {
        font-size: 11px !important;
        margin-top: 4px !important;
    }
    .feviconImg {
        height: 18px !important;
        width: 21px !important;
        margin-right: 10px !important;
        margin-top: -1px !important;
    }
}

@media only screen and (max-width: 1366px) and (max-height: 721px) {
    .today-attacks{
        margin-top: -12px !important;
    }
}

@media only screen and (max-width: 1366px) and (max-height: 625px) {
    .malware-container,
    .infected-system-container {
        padding: 0px 19px 10px !important;
    }
    .today-attacks {
        margin-top: -11px !important;
    }
    .globeTitle {
        font-size: 11px !important;
        margin-top: 4px !important;
    }
    .feviconImg {
        height: 18px !important;
        width: 21px !important;
        margin-right: 10px !important;
        margin-top: -1px !important;
    }
}
@media only screen and (max-width: 1360px) and (max-height: 768px) {
    .malware-container,
    .infected-system-container{
        padding: 0px 15px 10px !important;
    }
    .today-attacks {
        margin-top: -20px;
        padding-left: 0px;
    }
    .malware-container,
    .infected-system-container {
        padding: 0px 21px 10px !important;
    }
    .globeTitle {
        font-size: 12px !important;
        margin-top: 7px !important;
    }
}
@media only screen and (max-width: 1360px) and (max-height: 625px) {
    .feviconImg {
        height: 18px !important;
        width: 18px !important;
        margin-right: 10px !important;
        margin-top: -3px !important;
    }
}

@media only screen and (max-width: 1280px) and (max-height: 1024px) {
    padding: 19px;
    .hrrows{
        margin: 1px 0 0 0 !important;
    }
    .globeTitle {
        font-size: 14px !important;
        margin-top: 10px !important;
    }
    .iconTitle {
        font-size: 14px !important;
    }
    .chart-area{
        padding-left: 11px !important;
    }
    .infections-second{
        margin-top: 6px;
    }
    .threat-by-type{
        margin-top: -45px;
    }
    .zeronsecLogo{
        height: 20px;
        bottom: 20px;
    }
    .top-ransomwares{
        margin-top: 9px;
    }
    .top-infected-systems{
        margin-top: 0px;
    }
    .attacker-address{
        margin-top: -1px;
    }
    .severity-container{
        margin-top: -14px;
    }
    .infections-second{
        margin-top: 0px;
    }
    .today-attacks{
        margin-top: -7px;
    }
    .service-types{
        margin-top: -28px;
    }
    .sectionTitle{
        font-size: 12px !important;
    }
    .ransomwares-title{
        font-size: 10px !important;
    }
    .ransomwares-count{
        font-size: 11px !important;
    }
    .localTimetitle{
        font-size: 14px !important;
    }
    .timestyle,
    .iconCount{
        font-size: 22px !important;
    }
    .today-attacks{
        padding-left: 0px;
    }
    .malware-container,
    .infected-system-container{
        padding: 0px 6px 10px !important;
    }
    .iconCount{
    }
    .feviconImg {
        height: 23px;
        width: 23px;
        margin-right: 10px;
        margin-top: -1px;
    }
    .globe-table thead tr th{
        font-size: 11px !important;
        height: 15px !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .globe-table tbody tr td{
        font-size: 11px !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 !important;
    }
    .threat-by-type-title,
    .threat-by-type-value{
        font-size: 9px;
    }
    .imgStyle{
        width: 20px !important;
        height: 14px !important;
    }
    .service-dot{
        font-size: 20px;
        position: relative;
        right: 1px;
        top: 1px;
        border-radius: 50%;
    }
    .top-ransomwares,
    .attack-trands,
    .attacker-countries,
    .attacker-address,
    .infections-second{
        padding-left: 0px;
    }
    .progressbar-wrapper{
        margin-top: 3px;
    }
}

@media only screen and (max-width: 1280px) and (max-height: 960px) {
    .severity-container{
        margin-top: -6px !important;
    }
    .timestyle,
    .iconCount{
        font-size: 22px !important;
    }
    .localTimetitle{
        font-size: 16px !important;
    }
    .ransomwares-title{
        font-size: 11px !important;
    }
    .globeTitle {
        font-size: 13px !important;
        margin-top: 9px !important;
        align-items: flex-start !important;
    }
}

@media only screen and (max-width: 1280px) and (max-height: 881px) {
    .feviconImg {
        height: 21px !important;
        width: 21px !important;
        margin-right: 10px !important;
        margin-top: -1px !important;
    }
}
@media only screen and (max-width: 1280px) and (max-height: 800px) {
    .globeTitle{
        margin-top: 7px !important; 
    }
    .threat-by-type{
        margin-top: -41px;
    }
    .zeronsecLogo{
        height: 20px;
        bottom: 40px;
        right: 109%;
    }
    .malware-container,
    .infected-system-container {
        padding: 0px 13px 10px !important;
    }
}

@media only screen and (max-width: 1280px) and (max-height: 817px) {
    .malware-container,
    .infected-system-container {
        padding: 0px 10px 10px !important;
    }
    .globeTitle{
        margin-top: 7px !important; 
    }
    .threat-by-type{
        margin-top: -41px;
    }
    .zeronsecLogo{
        height: 20px;
        bottom: 40px;
        right: 109%;
    }
    .malware-container,
    .infected-system-container {
        padding: 0px 13px 10px !important;
    }
    .feviconImg {
        height: 21px !important;
        width: 21px !important;
        margin-right: 10px !important;
        margin-top: -1px !important;
    }
}

@media only screen and (max-width: 1280px) and (max-height: 768px) {
    .js-globe {
        right:1% !important;
        left:76% !important;
        li{
        font-size:11px !important;
        }
    }
    .sectionTitle{
        font-size: 8px !important;
    }
    .globeTitle{
        margin-top: 6px !important;
    }
    .ransomwares-title{
        font-size: 8px !important;
    }
    .severity-container{
        margin-top: 0px !important;
    }
    .ransomwares-count{
        font-size: 8px !important;
    }
    .localTimetitle,
    .iconTitle{
        font-size: 12px !important;
    }
    .timestyle,
    .iconCount{
        font-size: 22px !important;
    }
    .today-attacks{
        padding-left: 8px;
        margin-top: -8px !important; 
    }
    .service-types{
        margin-top: -31px important;
    }
    .malware-container,
    .infected-system-container{
        padding: 0px 17px 10px !important;
    }
    .iconCount{
        display: flex;
        align-items: center;
    }
    .globeTitle{
        font-size: 11px;
        margin-top: 4px;
        align-items: center;
    }
    .feviconImg{
        height: 18px;
        width: 18px;
        margin-right: 10px;
    }
    .globe-table thead tr th{
        font-size: 9px !important;
        height: 15px !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .globe-table tbody tr td{
        font-size: 9px !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 !important;
    }
    .threat-by-type-title,
    .threat-by-type-value{
        font-size: 9px;
    }
    .threat-by-tipe{
        margin-top: -23px;
    }
    .top-infected-systems{
        margin-top: 15px;
    }
    
    .imgStyle{
        width: 20px !important;
        height: 14px !important;
    }
    .service-dot{
        font-size: 20px;
        position: relative;
        right: 1px;
        top: 1px;
        border-radius: 50%;
    }
    .top-ransomwares,
    .attack-trands,
    .attacker-countries,
    .attacker-address,
    .infections-second{
        padding-left: 0px;
    }
    .progressbar-wrapper{
        margin-top: 3px;
    }
}

@media only screen and (max-width: 1280px) and (max-height: 625px) {
    .threat-by-type {
        margin-top: -38px !important;
    }
    .zeronsecLogo{
        height: 20px;
        bottom: 40px;
        right: 109%;
    }
    .globeTitle {
        font-size: 12px !important;
        margin-top: 3px !important;
    }
    
}

@media only screen and (max-width: 1280px) and (max-height: 657px) {
    .malware-container,
    .infected-system-container {
        padding: 0px 20px 10px !important;
    }
    .attacks-today{
        margin-top: 2px;
    }
    .infected-system{

    }
    .service-types {
        margin-top: -30px !important;
    }
}

@media only screen and (max-width: 1280px) and (max-height: 720px) {
    .js-globe {
        right:3% !important;
        left:72% !important;
        li{
        font-size:11px !important;
        }
    }
    .top-ransomwares{
        margin-top: 4px;
    }
    .globeTitle{
        margin-top: 6px;
    }
    .severity-container{
        margin-top: -8px;
    }
    .today-attacks{
        margin-top: -19px;
    }
    .service-types{
        margin-top: -39px;
    }
    .threat-by-type{
        margin-top: -42px;
    }
    .zeronsecLogo{
        height: 20px;
        bottom: 40px;
        right: 109%;
    }
    .top-infected-systems{
        margin-top: -1px;
    }
    .attacker-countries{
        margin-top: -5px;
    }
    .attacker-address{
        margin-top: -4px;
    }
    .globeTable .table-wrapper table th{
        font-size: 9px !important;
    }
    .sectionTitle{
        font-size: 8px !important;
    }
    .ransomwares-title{
        font-size: 8px !important;
    }
    .ransomwares-count{
        font-size: 8px !important;
    }
    .localTimetitle,
    .iconTitle{
        font-size: 12px !important;
    }
    .timestyle,
    .iconCount{
        font-size: 18px !important;
    }
    .today-attacks{
        padding-left: 0px;
    }
    .malware-container,
    .infected-system-container{
        padding: 0px 10px 10px;
    }
    .iconCount{
        display: flex;
        align-items: center;
    }
    .globeTitle{
        font-size: 11px;
        margin-top: 4px;
        align-items: center;
    }
    .feviconImg{
        height: 18px;
        width: 18px;
        margin-right: 10px;
    }
    .globe-table thead tr th{
        font-size: 9px !important;
        height: 15px !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .globe-table tbody tr td{
        font-size: 9px !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 !important;
    }
    .threat-by-type-title,
    .threat-by-type-value{
        font-size: 9px;
    }
    .threat-by-tipe{
        margin-top: -23px;
    }
    .imgStyle{
        width: 20px !important;
        height: 14px !important;
    }
    .service-dot{
        font-size: 20px;
        position: relative;
        right: 1px;
        top: 1px;
        border-radius: 50%;
    }
    .top-ransomwares,
    .attack-trands,
    .attacker-countries,
    .attacker-address,
    .infections-second{
        padding-left: 0px;
    }
    .progressbar-wrapper{
        margin-top: 3px;
    }
}

@media only screen and (max-width: 1280px) and (max-height: 657px) {
    .globeTitle {
        margin-top: 5px !important;
        font-size: 12px !important;
    }
}
@media only screen and (max-width: 1280px) and (max-height: 800px) {
    .feviconImg {
        height: 21px !important;
        width: 21px !important;
        margin-right: 10px !important;
        margin-top: -2px !important;
    }
}

@media only screen and (max-width: 1200px) and (max-height: 600px) {
    .feviconImg{
        height: 16px;
        width: 16px;
        margin-right: 10px;
    }
    
}

@media only screen and (max-width: 1152px) and (max-height: 864px) {
    .attack-trands{
        margin-top: -10px;
    }
    .sectionTitle{
        font-size: 11px !important;
    }
    .attacker-countries{
        margin-top: -10px;
    }
    .attacker-address{
        margin-top: -3px;
    }
    .today-attacks {
        margin-top: -13px;
        padding-left: 4px;
    }
    .service-types{
        margin-top: -28px;
    }
    .threat-by-type{
        margin-top: -47px;
    }
    .zeronsecLogo{
        height: 20px;
        bottom: 15px;
    }
    }
    .severity-container{
        margin-top: -1px;
    }
    .globeTitle{
        font-size: 11px;
        margin-top: 9px;
        margin-left: 5px;
        align-items: flex-start;
    }
    .feviconImg {
        height: 20px !important;
        width: 20px !important;
        margin-right: 10px !important;
        margin-top: -1px !important;
    }
}

@media only screen and (max-width: 1152px) and (max-height: 753px) {
    .threat-by-type {
        margin-top: -32px !important;
    }
    .zeronsecLogo{
        height: 20px;
        bottom: 15px;
    }
    .top-infected-systems {
        margin-top: -1px;
    }
}
@media only screen and (max-width: 1152px) and (max-height: 721px) {
    .threat-by-type {
        margin-top: -32px !important;
    }
    .zeronsecLogo{
        height: 20px;
        bottom: 15px;
    }
    .top-infected-systems {
        margin-top: -1px;
    }
}

@media only screen and (max-width: 1024px) and (max-height: 768px) {
    .sectionTitle{
        font-size: 8px !important;
    }
    .ransomwares-title{
        font-size: 8px !important;
    }
    .ransomwares-count{
        font-size: 8px !important;
    }
    .localTimetitle,
    .iconTitle{
        font-size: 8px !important;
    }
    .timestyle,
    .iconCount{
        font-size: 12px !important;
    }
    .today-attacks {
        padding-left: 13px;
    }
    .malware-container,
    .infected-system-container{
        padding: 0px 6px 10px !important;
    }
    .iconCount{
        display: flex;
        align-items: center;
    }
    .globeTitle{
        font-size: 11px !important;
        margin-top: 6px !important;
        align-items: center !important;
    }
    .feviconImg{
        height: 18px;
        width: 18px;
        margin-right: 10px;
    }
    .globe-table thead tr th{
        font-size: 9px !important;
        height: 15px !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .globe-table tbody tr td{
        font-size: 9px !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 !important;
    }
    .threat-by-type-title,
    .threat-by-type-value{
        font-size: 9px;
    }
    .threat-by-tipe{
        margin-top: -30px;
    }
    .service-types{
        margin-top: -25px;

    }
    #ringChart{
        margin-left: 12px;
    }
    .imgStyle{
        width: 20px !important;
        height: 14px !important;
    }
    .service-dot{
        font-size: 20px;
        position: relative;
        right: 1px;
        top: 1px;
        border-radius: 50%;
    }
    .top-ransomwares,
    .attack-trands,
    .attacker-countries,
    .attacker-address,
    .infections-second{
        padding-left: 0px;
    }
    .progressbar-wrapper{
        margin-top: 3px;
    }
    .left-section-1,
    .left-section-2,
    .left-section-3,
    .left-section-4{
        padding-left: 2px;
        padding-right: 5px;
    }
    .top-infected-systems {
        margin-top: -1px;
    }
    .threat-by-type {
        margin-top: -42px;
    }
    .zeronsecLogo{
        height: 20px;
        bottom: 15px;
    }
}

@media only screen and (max-width: 1024px) and (max-height: 625px) {
    .js-globe {
        right:2% !important;
        left:76% !important;
        li{
        font-size:11px !important;
        }
    }
    .malware-container,
    .infected-system-container {
        padding: 0px 13px 10px !important;
    }
    .today-attacks{
        padding-left: 6px;
    }
    .attacker-countries {
        margin-top: -6px;
    }
    .attack-trands {
        margin-top: -5px;
    }
    .today-attacks {
        padding-left: 8px;
        margin-top: -14px !important;
    }
    .service-types {
        margin-top: -37px !important;
    }
    .threat-by-type {
        margin-top: -42px !important;
    }
    .zeronsecLogo{
        height: 20px;
        bottom: 15px;
    }
    .globeTitle {
        margin-top: 3px !important;
    }
}

/* --------------- Media Queries -----------------*/


/* ---------------------------------------- New Code ---------------------------------------- */

`;

export default Globe3DWrapper;
