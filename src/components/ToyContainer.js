import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, removeToyFromList, updateToy }) {
  return (
    <div id="toy-collection">{
      toys.map(toy => <ToyCard key={toy.id} toy={toy} removeToyFromList={removeToyFromList} updateToy={updateToy} />)
    }</div>
  );
}

export default ToyContainer;
