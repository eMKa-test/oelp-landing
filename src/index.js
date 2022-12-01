
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./style/main.scss";

const TopPane = lazy(() => import("./layers/TopPane"));
const MiddlePane = lazy(() => import("./layers/MiddlePane"));
const FooterPane = lazy(() => import("./layers/FooterPane"));

const App = () => (
    <Suspense fallback={<span>loading...</span>}>
        <div className="landing-page">
            <TopPane />
            <MiddlePane />
            <FooterPane />
        </div>
    </Suspense>
);


ReactDOM.render(
    (<App />),
    document.getElementById("root")
);
