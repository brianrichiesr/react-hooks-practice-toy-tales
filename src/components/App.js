import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
const Url = "http://localhost:3001/toys"

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {

    fetch(Url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw (response.statusText);
      }
    })
    .then(data => setToys(data))
    .catch(err => alert(err))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const addToyToList = (toyObj) => {
    fetch(Url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(toyObj)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw (response.statusText);
      }
    })
    .then(data => setToys(currentValue => [data, ...currentValue]))
    .catch(err => alert(err))
  }

  const removeToyFromList = (toyId) => {
    fetch(`${Url}/${toyId}`, {
      method: "DELETE"
    })
    .then(() => {
      const newList = [...toys].filter(toy => {
        return toy.id !== toyId;
      })
      setToys(newList);
    })
  }

  const updateToy = (toyObj) => {
    fetch(`${Url}/${toyObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({likes: Number(toyObj.likes) + 1})
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw (response.statusText);
      }
    })
    .then(data => {
      const newList = [...toys].map(toy => {
        if (toy.id === data.id) {
          return data;
        } else {
          return toy;
        }
      })
      setToys(newList);
    })
    .catch(err => alert(err))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToyToList={addToyToList} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} removeToyFromList={removeToyFromList} updateToy={updateToy} />
    </>
  );
}

export default App;
