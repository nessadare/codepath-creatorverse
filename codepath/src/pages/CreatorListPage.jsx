// show all content creators

import { useEffect } from "react";
import Creator from "../components/Creator";

const CreatorList = (creators) => {
  return (
    <div className="cards">
      <h1>List of all Creators</h1>
      {creators && creators.length > 0 ? ( // handles empty and null arrays
        <ul>
          {creators.map((creator) => (
            <Creator key={creator.id} creator={creator} /> // React requires key for efficiently updating lists
          ))}
        </ul>
      ) : (
        <p>No creators found</p>
      )}
    </div>
  );
};

export default CreatorsList;
