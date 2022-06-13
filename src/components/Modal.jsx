import React from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';

const Modal = ({children, width, height, header, posX, posY }) => {
  return (
    <div>
      <DialogComponent
        width={width}
        height={height}
        position={{ X: posX, Y: posY }}
        showCloseIcon={true}
        overlayClick={true}
        header={header}
        animationSettings={{ effect: 'FadeZoom', duration: 300 }}
      >
        {children}
      </DialogComponent>
    </div>
  );
};

export default Modal;
