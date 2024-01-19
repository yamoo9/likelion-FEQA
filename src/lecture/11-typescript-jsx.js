import React from 'react';
import ReactDOM from 'react-dom/client';
const createApp = () => {
    return (React.createElement("div", { id: "app" },
        React.createElement("h1", null,
            "\uC548\uB155!",
            React.createElement("br", null),
            "\uB9AC\uC561\uD2B8"),
        React.createElement("p", null, "\uB9AC\uC561\uD2B8\uB294 \uC624\uD508 \uC18C\uC2A4 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC785\uB2C8\uB2E4.")));
};
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(createApp());
