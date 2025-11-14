import React from "react";
import { ZsGlobeBarChart } from '../../../../../components/modules/components/Charts';

const AttackTrends = React.memo(props => {
    let barData = props.data;
    return (
        <React.Fragment>
            <div className="sectionTitle">Attack Trends</div>
            <hr className="hrtop" />
            <div id="globeBarChart" className="globeBarChart">
                <div id="globeBarChart_cc">
                    <ZsGlobeBarChart id="globeBarChart" data={barData} />
                </div>
            </div>
        </React.Fragment>
    );
});

export default AttackTrends;
