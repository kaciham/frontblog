import React from "react";
import Navigation from "../components/Navigation";

const Publier = () => {
  return (
    <div className="flex flex-col ">
      <Navigation />
      <div className="flex flex-row justify-center p-10">
        <div className="flex flex-col gap-10  w-2/3">
          <h2>Publier un article</h2>
          <input
            id="titre"
            type="text"
            placeholder="Titre"
            className=" border-solid border-4 pl-2"
          />
          <textarea
            name="contenu"
            id="contenu"
            cols="30"
            rows="10"
            placeholder="Contenu"
            className=" border-solid border-4 pl-2 "
          ></textarea>
          <button className=" bg-blue-500">Publier</button>
        </div>
      </div>
    </div>
  );
};

export default Publier;
