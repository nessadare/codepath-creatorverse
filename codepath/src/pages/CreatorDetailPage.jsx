// view a single content creator

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Creator from "../components/Creator";
import { supabase } from "../client";

const CreatorDetail = (creators) => {
  const { id } = useParams();
  const [creator, setCreator] = useState([]);

  useEffect(() => {
    const getCreator = async () => {
      try {
        const { data, error } = await supabase
          .from("creators")
          .select()
          .eq("id", id);

        if (error) throw error;

        setCreator(data || []); // [] if data is null
      } catch (err) {
        console.log("Failure to get creator:", err);
      }
    };

    getCreator();
  }, []);

  return (
    <>
      {creator && creator.length > 0 ? (
        <div className="card-detail">
          <Creator creator={creator} />{" "}
        </div>
      ) : (
        <p>Creator not found.</p>
      )}
    </>
  );
};

export default CreatorDetail;
