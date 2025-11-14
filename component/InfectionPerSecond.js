import React from "react";
import { ZsGlobeLineChart } from '../../../../../components/modules/components/Charts';

const InfectionPerSecond = React.memo(props => {
    return (
        <React.Fragment>
            <div className="sectionTitle">Infections / Second</div>
            <hr className="hrtop" />
            <div className="globeLineChart" id="globeLineChart">
                <div id="globeLineChart_cc">
                    <ZsGlobeLineChart id="globeLineChart" />
                </div>
            </div>
        </React.Fragment>
    );
});

export default InfectionPerSecond;
