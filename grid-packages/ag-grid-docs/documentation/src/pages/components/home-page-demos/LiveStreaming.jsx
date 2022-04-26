import React from "react";
import {Helmet} from "react-helmet";
import {rootLocalPrefix} from "../../../utils/consts";

const LiveStreamingDemo = () => {
    return (<>
        <Helmet>
            <style type="text/css">{`
                #live-stream-updates-grid .number { text-align: right; }
                #live-stream-updates-grid .ag-row-level-0 { font-weight: bold; }
                #live-stream-updates-grid .ag-row-level-1 { color: lightblue; }
                #live-stream-updates-grid .ag-row-level-2 { color: lightyellow; }
            `}</style>
            <link rel="stylesheet" href={`${rootLocalPrefix}/dev/@ag-grid-community/core/dist/styles/ag-theme-balham-dark.css`}
                  crossOrigin="anonymous"/>
            <script crossOrigin="anonymous" src={`${rootLocalPrefix}/live-stream-updates/main.js`} type="text/javascript"/>
            <script src={`${rootLocalPrefix}/dev/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.js`} type="text/javascript"/>
        </Helmet>
        <div className="container-fluid blackish text-light pt-2" id="dashboard-demo">
            <div className="row">
                <div className="col-12">
                    <div id="live-stream-updates-grid" style={{height: 500}} className="ag-theme-balham-dark">
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12 text-right">
                    <a className="btn btn-link"
                       href="https://medium.com/ag-grid/how-to-test-for-the-best-html5-grid-for-streaming-updates-53545bb9256a">Read more about stream
                        performance</a>
                </div>
            </div>
        </div>
    </>)
}

export default LiveStreamingDemo;