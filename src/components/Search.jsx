import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "./Input";
import styles from "../styles/Search.module.css";
import { useEffect, useState } from "react";
import { useRef } from "react";

export const Search = () => {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleSearchValue = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div
      ref={ref}
      style={{
        maxWidth: "350px",
        width: "100%",
        margin: "auto",
        position: "relative"
      }}
    >
      <Input
        type={"search"}
        staticPlaceholder={"Buscar"}
        icon={<AiOutlineSearch fill="#777" />}
        iconPosition="left"
        paddingtb={8}
        onChange={handleSearchValue}
        onFocus={() => setIsOpen(true)}
      />
      {isOpen && value.length > 2 && (
        <div className={styles.suggestionContainer}>raaaaaa</div>
      )}
    </div>
  );
};
