import { useState } from "react";
import AnimalShow from "./comps/AnimalShow";

function App() {
  const [animal, setAnimal] = useState({type: "Cow"})

  const handleAddAnimal = () => {
    setAnimal({type: "Bird"})
  }

  return (
    <>
      <header
        className="p-3 mb-3 text-light bg-dark">
        <h1>Animalia</h1>
      </header>
      <main className="container">
        <button onClick={handleAddAnimal} className="btn btn-primary">Add Animal</button>
        <AnimalShow animal={animal} />
      </main>
    </>
  );
}

export default App;
