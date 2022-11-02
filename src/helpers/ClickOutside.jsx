export const ClickOutside = (isOpen, setIsOpen, ref) => {
  const handleClickOutside = (e) => {
    if (isOpen && !ref?.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };
  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
};
