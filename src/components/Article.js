import React from "react";

const Article = ({ article }) => {
  console.log(article);
  return (
    <div className="gap-4 flex flex-col border-2 border-black-600 p-3 m-3">
      <h2 className=" text-left">{article.titre}</h2>
      <p className=" text-center">{article.contenu}</p>
    </div>
  );
};

export default Article;
