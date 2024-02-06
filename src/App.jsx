import './App.css'
import ContentRedBox1 from './components/containerRed/ContentRedBox1'
import ContentBleuBox1 from './components/containerBleu/ContentBleuBox1'

import React, { useRef } from 'react';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

const ComponentToPrint = React.forwardRef((_, ref) => (
  <div className='main' ref={ref}>
    <>
      <ContentBleuBox1 />
      <ContentRedBox1 />

      <br />
    </>
  </div>
));

ComponentToPrint.displayName = 'ComponentToPrint';

const MyComponent = () => {
  const componentRef = useRef();

  return (
    <React.Fragment>
      <ComponentToPrint ref={componentRef} />
      <button onClick={() => exportComponentAsJPEG(componentRef)}>
        Export As JPEG
      </button>
      <button onClick={() => exportComponentAsPDF(componentRef)}>
        Export As PDF
      </button>
      <button onClick={() => exportComponentAsPNG(componentRef)}>
        Export As PNG
      </button>
    </React.Fragment>
  );
};


export default MyComponent;
