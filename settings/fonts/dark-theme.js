const darkTheme = {
    background:"#202224",
    color:"#535960",
    hoverColor:"#B4B4B4",
    activeColor:"#4C8CEC",
    contentPadding:"0 10px 0 0",
    contentBg:"#1c1e20",
    contentPaddingMedia:"0 10px 0 10px",
    sidebar:{
        background:"#18191a",
        backgroundBg:"transparent",
        color:"#4B4F55",
        padding:"0 0",
        logoPaddingLeft:"2px",
        borderBottom:"#202224",
        selectedMenuBg:"#1b1c1e",
        selectedMenuBorder:"#374c7c70",
        selectedMenuColor:"#4C8CEC",
        border:"1px solid #242c3c",
        boxShadow:"rgba(0, 0, 0, 0.07)",
        scrollBg:"#ffffff17",
        navbarIconFontSize:"20px",
        extraContentBtnFontSize:"20px",
        ecMenuFontSize:"11px",
    },
    topbar:{
        color:"#535960",
        background:"#202224",
        boxShadow:"none",
        breadCrumFontSize:"12px",
        themeIcnFontSize:"15px",
        notification:{
            borderRadius: '5px',
            borderColor: 'rgba(27, 27, 27, 0.17)',
            background: '#111111',
            color:"#656667",
            read:"#090909",
            unRead:"#020202",
            headerShadow:"0px 10px 30px 0px rgba(82, 63, 105, 0.08)",
            countFontSize:"10px",
            countColor:"#5c626a",
            dotBgColor:"#e66161",
            nTitleFontSize:"12px",
            userPicColor:"#5179d9",
            seperatorBorderTop:"1px solid #5d5c5c1a"
        },
        user:{
           fontSize:"12px",
            userPicColor:"#5179d9",
            userNameColor:"#5c626a",
        },
        search:{
            background:"#111111",
            searchTopInputFontSize:"13px",
            serchResultHighlightColor:"#d4d4d4",
            hover:"#7b7575",
            btnLinkFontSize:"12px",
            btnLinkBg:"#020202",
            btnLinkColor:"#5f5d5d"
        }
    },
    footer:{
        background:"#171819",
        color:"#656667",
        padding:"0 10px",
        adTextFontSize:"12px",
    },
    body:{
        tabs:{
            background:"#1c1e20",
            contentBg:"#1c1e20",
            tabMargin:"0",
            contentHeight:"calc(100% - 35px)",
            tabContentScrollBg:"rgba(51,80,153,0.6)",
            fontSize:"13px"
        },
        toast:{
            background:"#080b0e",
            color:"#ffffff",
            fontSize:"12px",
            letterSpacing: '-0.31px',
            boxShadow:"0 0 7px 3px rgba(0, 0, 0, 0.21)"
        },
        dashboard:{
            emptyContentFontSize:"14px",
            addPanel:{
                pNameFontSize:"12px",
                pDecFontSize:"9px"
            },
            dashboardModel:{
                formCheckLabelFontsize:"10px",
                formCheckLabelColor:"#ffffff",
                btnBg:"#49af5b",
                btnColor:"#000000",
                btnFontSize:"12px"
            }
        },
        home:{
            counterValFontSize:"22px",
            splitedTimeFontSize:"12px",
            hitsFontSize:"14px"
        },
        incidents:{
            detailView:{
                borderRadius: '0',
                boxShadow: '-3px 0 11px 0 rgba(0, 0, 0, 0.2)',
                background: '#151618',
                progressSlaBorderBottom:"2px solid #6971e9",
                progressBg:"#2b2b2e",
                progressBarBg:"#6971e9 ",
                locColor:"#c9c9c9",
                locFontSize:"11px",
                locIconSize:"13px",
                slaLeftColor:"#c9c9c9",
                slaLeftFontSize:"10px"
            },
            incidentSideList:{
                iHeadertitleFontSize:"12px",
                iHeadertitleColor:"#535960",
                textFillColor:"#000",
                mediaScreenBg:"#1c1e20"
            },
            IncidentDetail:{
                detailTitleFontSize:"22px",
                detailTitleColor:"#d6d6d6",
                detailStatusFontSize:"12px",
                onlyStatusColor:"#8acb60",
                oTitleFontSize:"10px",
                oTitleColor:"#808284",
                oValueColor:"#cccccc",
                seperatorBorder:"1px solid #404142",
                seperatorSideBorder:"solid 1px #979797",
                navTabsBg:"#111111",
                navLinkColor:"#d6d6d6",
                navLinkActiveColor:"#ffffff",
                navLinkActiveBorder:"1px solid #414141",
                detailBoxesBorder:"1px solid #1c1e20",
                seperatorSideBorderAfter:"1px solid #1c1e20",
                heightLightColor:"#ff7c7c",
                heightLightFontSize:"12px",
                incidentCountFontSize:"12px",
                incidentCountColor:"#cccccc"
            },
            IncidentCard:{
                background:"#161617",
                selectedBg:"#111111",
                selectedBorder:"#27324a",
                selectedBoxShadow:"0 2px 7px 0 rgba(0, 0, 0, 0.4)",
                iTitleFontSize:"12px",
                iTitleColor:"#d6d6d6",
                tIconFontSize:"14px",
                tIconColor:"#ed5252",
                iStatusFontSize:"10px",
                onlyStatusColor:"#8acb60",
                extraDetailColor:"#5a6067",
                profileIconColor:"#fff"
            },
            timeLine:{
                visVerticalBg:"#262728",
                visMinorBorder:"1px solid #262728",
                visTextFontSize:"10px",
                visTextColor:"#d6d6d6",
                visPanelVisTopBorder:"#262728",
                visItemBg:"#5caaaf",
                visItemColor:"#ffffff",
                visSelectedBg:"#4e8bff",
                visInnerFontSize:"14px" 
            },
            warrom:{
                messageTextBg:"#3c4b6c",
                messageTextFontSize:"11px",
                messageTextColor:"#ffffff",
                otherUserMessageTextBg:"#2c3240",
                UserPicBg:"#5a6067",
                msgTimeFontSize:"10px",
                msgTimeColor:"#5a6067",
                composeAreaBg:"#1a1c1e",
                placeholderFontSize:"10px",
                composeIcnPathFill:"#b4b4b4",
                sendBtnColor:"#234632",
                sendBtnBg:"#35684b"
            }
        },
        report:{
            tAddBtnColor:"#000",
            tAddBtnBg:"#4e8bff",
            bottomOptionsFontSize:"13px"
        }
    },
    modal:{
        background:"#080808",
        header:{
            fontSize:"14px"
        },
        body:{
            
        },
        footer:{},
        mask:{
            background:"rgba(17, 17, 17, 0.5)",

        }
    },
    drawer:{
        background:"#18191a",
        titleFontSize:"13px",
        header:{
            color:"#656667",
            fontSize:"12px"
        },
        mask:{
            background:"rgba(17, 17, 17, 0.5)",
        }
    },
    card:{
        borderRadius: '5px',
        borderColor: 'rgba(27, 27, 27, 0.17)',
        background: '#171819',
        color:"#656667",
        color2:"#627ebf",
        headerShadow:"0px 10px 30px 0px rgba(82, 63, 105, 0.08)",
        fontSize:"12px"
    },
    box:{
        background:"#151515",
        unVisited:"#1b1c1e",
        color:"#bcbcbc",
        userName:"#616161",
        time:"#4b4f55",
        time1:"#748aa1",
        border:"solid 1px rgba(27, 27, 27, 0.17)",
        fontSize:"12px"
    },
    tooltip:{
        color:"#fff",
        background:"#000",
        fontSize:"11px"
    },
    dropDown:{
        color:"#fff",
        background:"#171819",
        selectedColor:"",
        selectedBgColor:"" ,
        fontSize:"12px"       
    },
    table:{
        background:"#1c1e20",
        color:"#52585f",
        hoverBg:"#111111",
        selectedBorderColor:"#324674",
        fontSize:"12px",
        tr:{
            background:"#161819",
            color:"#959696"
        },
        bottomOptHover:{
            color:"#405b9e",
        }
    },

};

export default darkTheme;
