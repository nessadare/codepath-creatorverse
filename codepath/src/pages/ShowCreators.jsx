// show all content creators

import { useEffect } from "react";
import Creator from "../components/Creator";

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    // runs on page load
    const fetchCreators = async () => {
      // get creators
      setCreators(data);
    };
  }, []);

  return (
    <div className="cards">
      <div className="h1">List of all Creators</div>
      <ul>
        {creators.map((creator) => (
          <Creator id={creator.id} creator={creator} />
        ))}
      </ul>
    </div>
  );
};

export default ShowCreators;
