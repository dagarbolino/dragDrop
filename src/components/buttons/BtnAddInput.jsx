import { useState } from 'react';

export default function BtnAddInput() {
    const [inputCount, setInputCount] = useState(0);
  
    const handleAddInput = () => {
      setInputCount(prevCount => prevCount + 1);
    };
  
  return (
    <div>
      <button onClick={handleAddInput}>Ajouter un inputoooooo</button>
      {
        Array.from({ length: inputCount }, (_, index) => (
          <input key={index} id={`input-${index}`} type="text" />
        ))
      }
    </div>
  )
}

