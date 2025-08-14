// content creator card

import React from "react";

const Creator = ({ name, url, description, imageURL }) => {
  return (
    <div className="card">
      <div className="header">
        <h2>{name}</h2>
        <p className="subtitle">URL: {url}</p>
        <div className="image">{imageURL}</div>
      </div>
      <div className="content">{description}</div>
    </div>
  );
};

export default Creator;
