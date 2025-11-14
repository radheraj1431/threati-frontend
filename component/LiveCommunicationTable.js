import React from "react";
import moment from "moment";
import { ZsExpandableTable } from "../../../components";

const LiveCommunicationTable = React.memo(props => {
    const tableData = props.data;
    const sevirityColor= [
        "#D8E7A5",
        "#6FBE44",
        "#80C342",
        "#9DCB3B",
        "#C5D92D",
        "#BEC031",
        "#FFC709",
        "#F78F1E",
        "#F15D22",
        "#EE3624",
        "#ED2024"
    ];
    const columns = [
        {
            key: "",
            text: "",
            width: "0.1",
            render: object => <span style={{ fontSize: "26px", color:sevirityColor[parseInt(object["score"])], position: "relative", top: "6px", borderRadius: "50%" }} className="tableLine">&#9474;</span>
        },
        {
            key: "updateTime",
            text: "TimeStamp",
            render: object => <span>{object["updateTime"] ? moment(object["updateTime"]).format("YYYY-MM-DD hh:mm") : null}</span>
        },
        {
            key: "src",
            text: "Source",
            render: object => <span>{object["src"]}</span>
        }, {
            key: "dest",
            text: "Destination",
            render: object => <span>{object["dest"]}</span>
        }, {
            key: "srcCountry",
            text: "Source Country",
            render: object => <span>{object["srcCountry"]}</span>
        }, {
            key: "destCountry",
            text: "Destination Country",
            render: object => <span>{object["destCountry"]}</span>
        }, {
            key: "appProtocol",
            text: "Protocol",
            render: object => <span>{object["appProtocol"]}</span>
        },
    ];
    return (
        <React.Fragment>
            <div className="sectionTitle">Live Communications</div>
            <ZsExpandableTable
                columns={columns}
                topLine={false}
                bottomLine={false}
                globe={true}
                dataSource={tableData.length > 0 ? tableData : []}
                pagination={false}
                className="bottomContent"
            />
        </React.Fragment>
    );
});

export default LiveCommunicationTable;
