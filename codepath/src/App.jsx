import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Router, useRoutes } from "react-router";
import CreatorDetail from "./pages/CreatorDetailPage";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import { supabase } from "./client";
import { createClient } from "@supabase/supabase-js";
import CreatorList from "./pages/CreatorListPage";

function App() {
  const [creators, setCreators] = useState([]);

  // paths

  let element = useRoutes([
    {
      path: "/",
      element: <CreatorList creators={creators} />,
      children: [
        {
          path: "edit",
          element: <EditCreator />,
        },
        {
          path: "view",
          element: <CreatorDetail />,
        },
        {
          path: "add",
          element: <AddCreator />,
        },
      ],
    },
  ]);

  useEffect(() => {
    const getCreators = async () => {
      try {
        const { data, error } = await supabase.from("creators").select(); // select all

        if (error) throw error;

        setCreators(data || []); // [] if data is null
      } catch (err) {
        console.log("Failure to get creators:", err);
        alert("Failed to get creators.");
      }
    };

    getCreators();
  }, []);

  return element;
}

export default App;
