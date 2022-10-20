import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [show, setShow] = useState(initialValue);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return [show, openModal, closeModal];
};
