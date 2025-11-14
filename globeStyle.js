import styled from "styled-components";

export const GlobeComponentWrapper = styled.div`
    background: #04101b url('${require("./imgs/newbackground.svg")}');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
//progressbar style
.globe-app{
    position: relative;
    z-index: 11;

    .js-globe{
        position:absolute;
        background-repeat: no-repeat;
        right:8%;
        left: 68%;
        top:10%;
        li{
            font-size:12px;
        }
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
          }
          
     }
}

//chart style start
.divsPolar{
    margin-top:12px !important;
}

.sectionLineChart{
    bottom:0%;
    height:20%;
    position : fixed;
    left : 0;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    width: 18%;
    height: 20%;
}
.sectionBarChart{
    left: 0;
    width: 18%;
    // top: 18.5%;
     top: 18.5%;
    height:19%;
    padding-left: 30px;
    position: absolute;
   
}
@keyframes progressBar {  
      0%  {
        width : 0;  
      } 
      100% { width: 100%; }
  }

.polarPerProcessFill{
        backface-visibility: hidden;
        animation-name: polarPerProcess;
         animation-duration: 5s ;
         height : 9.5px;
         animation-timing-function: ease-in;
    }
    @keyframes polarPerProcess {  
          0%  {
            width : 0;  
          } 
      }
.sectionPolarChart{
    bottom:27%;
    height:20%;
    position : absolute;
    display:flex;
    flex-direction:column;
    right : 0;
    padding-right: 30px;
    width:17%;
}
.linetable{
    right : 22px;
}

//chart style end
    .globeTitle{
        font-family: Orbitron;
        color: #ffffff;
        font-size: 1 rem;
        letter-spacing: 1.36px;
        justify-content: center;
        display: flex;
        margin-top: 8px;
    }
    .globe-app{
        position: relative;
        z-index: 11;
         height: 74vh;
        width: 1200px;
       margin: 0px auto;
    }
    .table-wrapper{
        overflow:hidden !important;
    }
    table{
        border-collapse: inherit;
    }
     .section{
        width : 60%
        bottom:0%;
        margin:0 auto;
        left : 21%;
        .table-wrapper{
            max-width:98% !important;
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
            
        }
        .table-wrapper table th:hover{
            background-color: #061116;
        }
    }
     .topRansomware{
        left: 0;
        width:18%;
        top : 3%;
        padding-left : 30px;
        position:absolute;
        .sectionTitle{
            letter-spacing:1.36px;
            font-family: Orbitron;
            color:#fff;
            text-align:left;
        }
     }

      .section1{
        top : 41%;
        padding-left: 30px;
        position : absolute;
        left : 0;
        display: flex;
        flex-direction: column;
        width:25%;
        height:20%;
        .imgStyle{
            height:9px !important;
        }
        .table-wrapper table td{
            padding : 7px 5px;
        }
    }
    .section2{
        bottom:20%;
        height:20%;
        position : fixed;
        left : 0;
        padding-left: 30px;
        display: flex;
        flex-direction: column;
        width : 18%;
        .glob-progress-container{
                margin:-3px !important;
                 height:5px !important;
                 .zsProgressState{
                    backface-visibility: hidden;
                    animation-name: progressBar;
                     animation-duration: 2s ;
                     animation-timing-function: ease-in;
                }
                @keyframes progressBar {  
                      0%  {
                        width : 0;  
                      } 
                  }
        }
       
    } 
    .section3{
        bottom:0%;
        height:20%;
        position : absolute;
        display:flex;
        flex-direction:column;
        right : 0;
        padding-right: 30px;
        width:17%;
        .glob-progress-container{
            margin:-3px !important;
             height:5px !important;
             .zsProgressState{
                backface-visibility: hidden;
                animation-name: progressBar1;
                 animation-duration: 2s ;
                 animation-timing-function: ease-in;
            }
            @keyframes progressBar1 {  
                  0%  {
                    width : 0;  
                  } 
              }
             
        }
    
    }
    
    .sectionheartbeat{
        bottom: 0%;
        padding-left: 30px;
        position: absolute;
        display: flex;
        flex-direction: column;
        left: 0;
        width:18%;
        margin-bottom: 3px;
    }
    .percentagetop{
        margin-top: 3px;
    }
    
    .section4{
        top:34%;
        height:20%;
        position : absolute;
        right : 0;
        padding-right: 30px
        width:17%;
        display:flex;
        flex-direction:column;
    }
    .tableLine{
        right:22px !important;
    }
    .severityImage{
        width:17%;
        height:7%;
        padding-right: 30px;
        top: 3%;
        position: absolute;
        right: 3px;
    }
    .localTime{
        width:17%;
        padding-right: 30px;
        top: 9%;
        height:10%;
        position: absolute;
        right: 0;
    }

    .malwareToday{
        width:17%;
        padding-right: 30px;
        top: 18%;
        height:10%;
        position: absolute;
        right: 7px;
    }
    .infectedSystem{
        width:17%;
        padding-right: 30px;
        top:27%;
        height:10%;
        position: absolute;
        right: 0;
    }

    .timestyle{
        font-size: 25px;
        font-family: Orbitron;
        color: #ffffff;
        letter-spacing: 3px;
    }
    .malwareTitle{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 12px;
        font-family: Orbitron;
        color: #ffffff;
        letter-spacing: 0.36px;
    }
    .malwareCount{
        font-size: 25px;
        font-family: Orbitron;
        color: #ffffff;
        letter-spacing: 3px;
    }

    .hrtop{
        margin: 3px 0px;
        width: 100%;
        border: solid 1px rgb(23,195,252,0.5) !important;   
    }
    .hrrows{
        background-color:  rgb(17, 150, 193) !important; 
        width: 100%;
        position: relative;
    }
    .bottomLine{
        border: solid .3px rgb(23, 195, 252,0.5) !important;
        margin-bottom: 0px !important;
        margin-top: 32px;
    }
    .bottomContent .bottomLine{
         visibility : hidden;
     }
    
   .section1  .table-wrapper table tr{
        background: transparent;
    }
    .section2  .table-wrapper table tr{
        background: transparent;
    }
    .section3  .table-wrapper table tr{
        background: transparent;
    }
    .section4  .table-wrapper table tr{
        background: transparent;
    }
    .buttonstyle{
        margin: 0px 0px 0px -13px;
        border-radius: 30px;
        position : absolute;
        top : 16%;
        border: none;
        color: #fff;
        background-color: #3ab8e7;
    }   
    .table-wrapper table{
        bottom : 15px;
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
    .sectionTitle{
        letter-spacing:1.36px;
        font-family: Orbitron;
        top:26px;
        color:#fff;
        text-align:left;
    }
    .localTimetitle{
        letter-spacing:1.36px;
        font-family: Orbitron;
        top:26px;
        color:#fff;
        text-align:left;
    }

    @media only screen and (min-width: 1601.98px) and (max-width:1680px)  {
        .imgWidth{
            width:23% !important;
        }
        .polarPerWidth{
            width:86% !IMPORTANT;
             margin-top : 3px;
        }
        .percentagetop{
            margin-bottom : 3px;
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

    .polarPerProcessFill{
        backface-visibility: hidden;
        animation-name: polarPerProcess;
         animation-duration: 5s ;
         height : 9.5px;
         animation-timing-function: ease-in;
    }
    @keyframes polarPerProcess {  
          0%  {
            width : 0;  
          } 
      }

    @media only screen and (min-width: 1024px) and (max-width:1601px) and (min-height: 1024px) {
        table{
            border-collapse: collapse;
        }
        .globeImage{
            height:23px !important;
            width:25px !important;
        }
        .tableLine{
            right:13px !important;
        }
        .globe-app{
            height:67vh !important;
        }
        .globeTitle{
            font-size: 0.875rem !important;
        }
        .section1{
            width:28%;
            top:41% !important;
            height:19% !important;
        }
       
        .section2{
            bottom:22%;
            height:19%;
            width:20%;
        }
        .section{
            width:56%;
        }
        .section3{
            bottom:1%;
            width:20%;
        }
        .section4{
            width:20%;
            top:36%;
        }
        .linetable{
            right : 12px;
        }
        .topRansomware{
            top:2%;
            width:20%;
           
        }
        .titleRansome{
            font-size: 0.625rem !important;
            height:50px !important;
        }
        .severityImage{
            width:20%;
            right : 5px;
        }
        .localTime{
            width:20%;
            .timestyle{
                font-size: 0.875rem !important;
            }
            .localTimetitle{
                font-size:1 rem !important;
            }
        }
        .polarPerProcessFill{
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
        .malwareToday{
            // width:20%;
            width:20% !important;
            top:18% !important;
        }
        .sectionTitle{
            font-size: 0.75rem !important;
        }

        .malwareCount{
            font-size:1 rem !important;
        }
        .table-wrapper table{
            bottom : 15px;
            td{
            padding: 9px 5px;
            font-family: Roboto-Regular;
            line-height : 0 ;
            font-size: 0.625rem !important;
            } 
            th{
                top : -4px;
                font-family: Roboto-Regular;
                background: transparent;
                font-size: 0.625rem !important;
            }
        }
        .sectionPolarChart{
            bottom:24% !important;
            width:19.99%;
            height:22%;
        }
       
        .sectionBarChart{
            width:25%;
            top:19%;
        }
        .sectionLineChart{
            // bottom:6%;
            bottom:3%;
            width:20%;
            height:21%;
        }
        .infectedSystem{
            width:20% !important;
        }
    }

    @media only screen and (min-width: 1024px) and (max-width:1601px)  and  (max-height: 1023.98px) and  (min-height: 781px) {
        .globe-app{
            height:75vh !important;
            width:1024px !important;
        }
        .globeImage{
            height:20px !important;
            width:24px !important;
        }
            .js-globe {
                right:12% !important;
                li{
                font-size:11px !important;
                }
            }
        
        .tableLine{
            right:13px !important;
        }
        .globeTitle{
            font-size: 0.75rem !important;
        }
        .sectionPolarChart{
            bottom:25%;
            width:19.99%;
            height:22%;
            line-height: 1;
        }
        .percentagetop{
            margin-bottom: 3px;
        }
        .polarPerWidth{
            margin-top : 3px;
        }
        .polarPerProcess{
            height:8px !important;
        }
        .polarPerProcessFill{
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
        .polarPerTitle{
            font-size: 0.688rem !important;
        }
        .sectionBarChart{
            // width:20%;
            width:23%;
            //top:21%;
            top:18.5%;
            height:19%;
        }
        .divsPolar{
            margin-top:10px !important;
        }
        .sectionLineChart{
            bottom:0%;
            width:20%;
            height:20%;
        }
       
        .section1{
            width:31%;
            top:41% !important;
            height:19% !important;
        }
        .linetable{
            right : 12px;
        }
        .section2{
            bottom:21%;
            height:17%;
            width:23%;
        }
        .section{
            width:56%;
        }
        .section3{
            bottom:0%;
            width:20%;
            height:20%;

        }
        .section4{
            width:20%;
            //top:30%;
            top:34%;
        }
        .topRansomware{
            top:2%;
            width:23%;
            
        }
        .titleRansome{
            font-size: 0.625rem !important;
            height:38px !important;
        }
        .severityImage{
            width:20%;
            right : 5px;
        }
        .localTime{
            width:20%;
            .timestyle{
                font-size: 0.875rem !important;
            }
            .localTimetitle{
                font-size: 0.875rem !important;
            }
        }
        .malwareToday{
            width:20%;
        }
        .sectionTitle{
            font-size: 0.688rem !important;
        }
        .malwareTitle{
            font-size: 0.625rem !important;
        }

        .malwareCount{
            font-size: 0.875rem !important;
        }
        .table-wrapper table{
            bottom : 15px;
            td{
            padding: 7.5px !important;
            font-family: Roboto-Regular;
            line-height : 0 ;
            font-size: 0.625rem !important;
            } 
            th{
                top : -4px;
                font-family: Roboto-Regular;
                background: transparent;
                font-size: 0.625rem !important;
            }
        }
    }

   



    @media only screen and (min-width: 1024px) and (max-width:1601px)  and  (max-height: 780.98px)  and  (min-height: 701px) {
        table{
            border-collapse: seperate;
        }
        .globeImage{
            height:20px !important;
            width:24px !important;
        }
        .divsPolar{
            margin-top:7px !important;
        }
        .table-wrapper{
            margin-top:5px;
        }
        .globe-app{
            height:73vh !important;
            width:1024px !important;
        }
            .js-globe {
                left: 63% !important;
                width: 19%;
                right:12.5%;
                li{
                font-size:10px !important;
                }
            }
        .tableLine{
            right:13px !important;
        }
        .globeTitle{
            font-size: 0.75rem !important;
        }
        .sectionPolarChart{
            bottom:27%;
            width:19.99%;
            height:20%;
            line-height: 1;
        }
        .percentagetop{
            margin-bottom: 3px;
        }
        .polarPerWidth{
            margin-top : 3px;
        }
        .polarPerProcess{
            height:8px !important;
        }
        .polarPerProcessFill{
       
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
        .polarPerTitle{
            font-size: 0.688rem !important;
        }
        .sectionBarChart{
            width:23%;
            top:18%;
            height:20%;
        }
        .sectionLineChart{
             bottom:0%;
            width:20%;
            height:20%;
        }
     
        .section1{
            width:31%;
            top:41% !important;
            height:20% !important;
        }
        .linetable{
            right : 12px;
        }
        .section2{
            bottom:21%;
            height:17%;
            width:23%;
        }
        .section{
            width:56%;
        }
        .section3{
            bottom:0%;
            width:20%;
            height:20%;

        }
        .section4{
            width:20%;
            top:33%;
        }
        .topRansomware{
            top:2%;
            width:23%;
            
        }
        .titleRansome{
            font-size: 0.625rem !important;
            height:38px !important;
        }
        .severityImage{
            width:20%;
            right : 5px;
        }
        .localTime{
            width:20%;
            top:7%;
            .timestyle{
                font-size: 0.875rem !important;
            }
            .localTimetitle{
                font-size: 0.875rem !important;
            }
        }
        .malwareToday{
            width:20%;
            top:16%;
        }
        .sectionTitle{
            font-size: 0.688rem !important;
        }
        .malwareTitle{
            font-size: 0.625rem !important;
        }
        .severityImage{
            top:2% !important;
        }
        .malwareCount{
            font-size: 0.875rem !important;
        }
        .table-wrapper table{
            bottom : 15px;
            td{
            padding: 6px !important;
            font-family: Roboto-Regular;
            line-height : 0 ;
            font-size: 0.625rem !important;
            } 
            th{
                top : -4px;
                font-family: Roboto-Regular;
                background: transparent;
                font-size: 0.625rem !important;
            }
        }
    }





    @media only screen and (min-width: 1024px) and (max-width:1601px)  and  (max-height: 700.98px) {
        table{
            border-collapse: collapse;
        }
        .divsPolar{
            margin-top:5px !important;
        }
        .globeImage{
            height:20px !important;
            width:24px !important;
        }
        .table-wrapper{
            margin-top:5px;
        }
        .globe-app{
            height:73vh !important;
            width:1024px !important;
        }
            .js-globe {
                top: 10% !important;
    right: 12.5% !important;
    left: 60% !important;
    width: 19%;
                li{
                font-size:10px !important;
                }
            }
        .tableLine{
            right:13px !important;
        }
        .globeTitle{
            font-size: 0.75rem !important;
        }
        .sectionPolarChart{
            bottom:30%;
            width:19.99%;
            height:20%;
            line-height: 1;
        }
        .percentagetop{
            margin-bottom: 3px;
        }
        .polarPerWidth{
            margin-top : 3px;
        }
        .polarPerProcess{
            height:8px !important;
        }
        .polarPerProcessFill{
       
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
        .polarPerTitle{
            font-size: 0.688rem !important;
        }
        .sectionBarChart{
            width:23%;
            top:20%;
            height:20%;
        }
        .sectionLineChart{
             bottom:0%;
            width:20%;
            height:20%;
        }
      
        .section1{
            width:31%;
            top:42% !important;
            height:20% !important;
        }
        .linetable{
            right : 12px;
        }
        .section2{
            bottom:20%;
            height:17%;
            width:23%;
        }
        .section{
            width:56%;
        }
        .section3{
            bottom:0%;
            width:20%;
            height:20%;

        }
        .section4{
            width:20%;
            top:33%;
        }
        .topRansomware{
            top:2%;
            width:23%;
            
        }
        .titleRansome{
            font-size: 0.625rem !important;
            height:38px !important;
        }
        .severityImage{
            width:20%;
            right : 5px;
        }

        .localTime{
            width:20%;
            top:7%;
            .timestyle{
                font-size: 0.875rem !important;
            }
            .localTimetitle{
                font-size: 0.875rem !important;
            }
        }
        .malwareToday{
            width:20%;
            top:16%;
        }
        .sectionTitle{
            font-size: 0.688rem !important;
        }
        .malwareTitle{
            font-size: 0.625rem !important;
        }
        .severityImage{
            top:2% !important;
        }
        .malwareCount{
            font-size: 0.875rem !important;
        }
        .table-wrapper table{
            bottom : 15px;
            td{
            padding: 5px !important;
            font-family: Roboto-Regular;
            line-height : 0 ;
            font-size: 0.625rem !important;
            } 
            th{
                top : -4px;
                font-family: Roboto-Regular;
            background: transparent;
            font-size: 0.625rem !important;
            }
        }
    }


    

    
`;

export const BoxWrapComponent = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    z-index: 0;
    transition: top 1s linear;

    .data-box-topLeft{
        position: absolute;
        top: 2.5%;
        left: 1.5%;
        height: 32%;
        width: 15%;
        
    }

    .data-box-topRight{
        position: absolute;
        top: 2.5%;
        right: 1.5%;  
        height: 32%;
        width: 15%;
        
    }

    .data-box-bottomLeft{
        position: absolute;
        bottom: 2.5%;
        left: 1.5%;  
        height: 32%;
        width: 15%;
        
    }

    .data-box-bottomRight{
        position: absolute;
        bottom: 2.5%;
        right: 1.5%;
        height: 32%;
        width: 15%;
        
    }

    .data-box-table{
        position: absolute;
        bottom: 6%;
        left: 17.5%;
        height: 25%;
        width: 65%;
        
    }

    @media screen and (max-width: 1500px) {
        top:100%;
    }
`;

export const BoxWrapComponentSmall = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    z-index: 20;
    transition: top 1s linear;

    .open-box-btn{
        display: none;
        width: 65%;
        height: 4%;
        position: fixed;
        bottom: -5%;
        left: 17.5%;
        background: rgba(14, 93, 118, .5);
        border: 1px solid #22c2ed;
        border-bottom: none;
        opacity: 0.6;
        text-align: center;
        font-size: 22px;
        color: #fff;
        transition: bottom 1s linear;
    }

    .open-box-btn:hover{
        cursor: pointer;
        opacity: 0.8;
    }


    .data-box-topLeft{
        position: absolute;
        top: 2.5%;
        left: 1.5%;
        height: 32%;
        width: 15%;
        opacity: 0.6;
    }

    .data-box-topRight{
        position: absolute;
        top: 2.5%;
        right: 1.5%;  
        height: 32%;
        width: 15%;
        opacity: 0.6;
    }

    .data-box-bottomLeft{
        position: absolute;
        bottom: 2.5%;
        left: 1.5%;  
        height: 32%;
        width: 15%;
        opacity: 0.6;
    }

    .data-box-bottomRight{
        position: absolute;
        bottom: 2.5%;
        right: 1.5%;
        height: 32%;
        width: 15%;
        opacity: 0.6;
    }

    .data-box-table{
        position: absolute;
        bottom: 6%;
        left: 17.5%;
        height: 25%;
        width: 65%;
        opacity: 0.6;
    }

    @media screen and (max-width: 1500px) {
        .open-box-btn{
            display: block;
            bottom: 0;
        }
    }
`;
