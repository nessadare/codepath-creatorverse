// show all content creators

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Creator from "../components/Creator";
import { supabase } from "../client";
import { createClient } from "@supabase/supabase-js";

const CreatorList = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const getCreators = async () => {
      try {
        const { data, error } = await supabase.from("creators").select(); // select all

        if (error) throw error;

        setCreators(data || []); // [] if data is null
      } catch (err) {
        console.log("Failure to get creators:", err);
      }
    };

    getCreators();
  }, []);

  return (
    <div className="cards">
      <h1>List of all Creators</h1>
      {creators && creators.length > 0 ? ( // handles empty and null arrays
        <ul>
          {creators.map((creator) => (
            <div className="creator-preview">
              <div className="header">
                <h2>
                  <Link to={`/creator/${creator.id}`}>{creator.name}</Link>
                </h2>
                <div className="image">{creator.imageURL}</div>
              </div>
              <div className="content">{creator.description}</div>
            </div>
          ))}
        </ul>
      ) : (
        <p>No creators found</p>
      )}
    </div>
  );
};

export default CreatorList;
