import { useState } from "react";

const CardSabor = ({ title }) => {
  const [isAvailable, setIsAvailable] = useState(false);


  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={() => setIsAvailable(!isAvailable)} > 
        {isAvailable ? "disponivel" : "sabor indisponivel"}
      </button>
    </div>
  );
};

const App = () => {


  return (
    <>
      <h2>Confira esses sabores:</h2>
      <div className="card-container">
        <CardSabor title="Morango" />
        <CardSabor title="Coco" />
        <CardSabor title="Paçoca" />
      </div>
    </>
  );
};

export default App;
