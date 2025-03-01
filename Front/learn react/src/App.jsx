import { useEffect } from "react";
import { useState } from "react";

const CardSabor = ({ title }) => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() =>{
    console.log(`${title} show that available ${isAvailable}`);
  }, [isAvailable])

  return (
    <div className="card" onClick={()=> setCount(count + 1)}>
      <h2>{title}  - {count} </h2>
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
