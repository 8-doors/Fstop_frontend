import { createRoot } from "react-dom/client";

import "./index.css";

const FstopApplication = () => {
    return (
        <div className="GoodMorning">
            <div>Good Morning</div>
        </div>
    )
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<FstopApplication />);