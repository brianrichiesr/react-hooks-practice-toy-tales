import React from "react";

function ToyCard({ toy, removeToyFromList, updateToy }) {
  const handleDelete = (e) => {
    e.stopPropagation();
    removeToyFromList(toy.id);
  }
  const handleUpdate = (e) => {
    e.stopPropagation();
    updateToy(toy);
  }
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={handleUpdate} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
