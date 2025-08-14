import { useEffect, useState } from "react";
import Creator from "../components/Creator";
import { Form } from "react-router-dom";

const AddCreator = () => {
  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    setCreator({
      ...creator,
      [e.target.name]:
        e.target.name === "imageURL" ? e.target.files : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase.from("creators").insert({ ...creator });
      console.log("Inserted: ", { ...creator });
    } catch (err) {
      console.log("Failure to add creator: ", err);
    }
  };

  // render form
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={creator.name}
        onChange={handleChange}
      />
      <input
        type="url"
        name="url"
        value={creator.url}
        onChange={handleChange}
      />
      <input
        type="file"
        name="imageURL"
        value={creator.imageURL}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        value={creator.description}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddCreator;
