import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import Article from "../components/Article";

const Home = () => {
  const [dataMix, setDataMix] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8090/redact/index")
      .then((res) => setDataMix(res.data));
  }, []);

  console.log(dataMix);

  return (
    <div>
      <Navigation />
      <h2>Liste des articles</h2>
      <div className="gap-3 p-3">
        {dataMix.map((article) => (
          <Article key={article} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
