import { useState } from 'react';

const MovingElement = () => {
  const [position, setPosition] = useState({ x: 1, y: 150 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 150, y: 1 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y
      });
    }
  };

  return (
    <div className='container'>
      <div className='box2'
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >

        <input className='input1' type="text" />
        <label htmlFor="input1">box2 </label>
        <input className='input1' type="text" />
        <label htmlFor="input1">box2 </label>
        <input className='input1' type="text" />
        <label htmlFor="input1">box2 </label>

      </div>
    </div>
  );
};



export default MovingElement;