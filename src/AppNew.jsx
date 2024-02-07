import './App.css'
import ContentRedBox1 from './components/blockExport/containerRed/ContentRedBox1'
import ContentBleuBox1 from './components/blockExport/containerBleu/ContentBleuBox1'
import { useState } from 'react';

import React, { useRef } from 'react';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';


const ComponentToPrint = React.forwardRef((_, ref) => (
  <div className='mainExport' ref={ref}>
    <>
      <ContentBleuBox1 />
      <ContentRedBox1 />

    </>
  </div>
));

ComponentToPrint.displayName = 'ComponentToPrint';

const MyComponent = () => {
  const componentRef = useRef();



  const [inputCount, setInputCount] = useState(0);

  const handleAddInput = () => {
    setInputCount(prevCount => prevCount + 1);
  };

  return (
    <React.Fragment>
      <ComponentToPrint ref={componentRef} />
      <div className="blockBtnExport">
        <button onClick={() => exportComponentAsJPEG(componentRef)}>
          Export As JPEG
        </button>
        <button onClick={() => exportComponentAsPDF(componentRef)}>
          Export As PDF
        </button>
        <button onClick={() => exportComponentAsPNG(componentRef)}>
          Export As PNG
        </button>
      </div>

      <div>
        <button onClick={handleAddInput}>Ajouter un inputtttt</button>

        {
          Array.from({ length: inputCount }, (_, index) => (
            <input key={index} id={`input-${index}`} type="text" />
          ))
        }
      </div>

      <div className="box1"> {/* Open the div containerBleuSection2 */}
        {
          Array.from({ length: inputCount }, (_, index) => (
            <input key={index} id={`input-${index}`} type="text" />
          ))
        }
      </div> {/* Close the div containerBleuSection2 */}


    </React.Fragment>
  );
};


export default MyComponent;
