import { createRoot } from "react-dom/client";

import { MainView } from "./components/main-view/main-view";

import "./index.css";

const FstopApplication = () => {
    return <MainView />;
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<FstopApplication />);