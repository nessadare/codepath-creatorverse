import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRoutes } from "react-router";
import ViewCreator from "./pages/ViewCreator";
import AddCreator from "./pages/AddCreator";
import ShowCreators from "./pages/ShowCreators";
import EditCreator from "./pages/EditCreator";

function App() {
  const [count, setCount] = useState(0);

  // define paths for pages

  let element = useRoutes([
    {
      path: "/",
      element: <ShowCreators />, // home page
      children: [
        {
          path: "edit",
          element: <EditCreator />,
        },
        {
          path: "view",
          element: <ViewCreator />,
        },
        {
          path: "add",
          element: <AddCreator />,
        },
      ],
    },
  ]);

  return element;
}

export default App;
