import React from "react";
import { OffCanvas } from "./OffCanvas";

export const OffCanvasSearch = ({ show, setShow }) => {
  return (
    <>
      <OffCanvas show={show} onHide={() => setShow(false)}>
        Búsqueda
        <button onClick={() => setShow(false)}>CERRAR</button>
      </OffCanvas>
    </>
  );
};
