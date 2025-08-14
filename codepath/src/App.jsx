import "./App.css";
import { useRoutes } from "react-router";

import CreatorDetail from "./pages/CreatorDetailPage";
import AddCreator from "./pages/AddCreatorPage";
import EditCreator from "./pages/EditCreator";

import CreatorList from "./pages/CreatorListPage";

function App() {
  // paths

  let element = useRoutes([
    {
      path: "/",
      element: <CreatorList />,
    },
    {
      path: "/creator/:id",
      element: <CreatorDetail />,
    },
    {
      path: "/creator/:id/edit",
      element: <EditCreator />,
    },
    {
      path: "/add",
      element: <AddCreator />,
    },
  ]);

  return element;
}

export default App;
