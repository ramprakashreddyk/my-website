import React from "react";
import "./App.css"

function App() {
  const pets = [
    {
      name: "Dolly",
      type: "cat",
      desc: "Dolly is a funny cat.",
      skills: ["fetch", "play dead", "roll over"],
      image: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
    },
    {
      name: "Molly",
      type: "cat",
      desc: "Dolly is a sweet cat.",
      skills: ["fetch", "play dead", "roll over"],
      image: "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg"
    }
  ];
  return(
    <div className="App">
      <h1>My pets</h1>
      <ul className="container">
        {pets.map((pet,index)=>(
          <li key={index}>
          <h1>{pet.name}</h1>
          <p>{pet.desc}</p>
          <img src={pet.image} alt={pet.name} width="200px" height="200px"/>
          <ul className="skills">
            {pet.skills.map((skill,index)=>(
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          </li>
        ))}
      </ul>
    </div>
  )
        }

export default App;