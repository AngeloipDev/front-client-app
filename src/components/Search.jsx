import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "./Input";
import styles from "../styles/Search.module.css";
import { useState } from "react";

export const Search = () => {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const handleSearchValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div
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
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      {isFocus && value.length > 2 && (
        <div className={styles.suggestionContainer}>raaaaaa</div>
      )}
    </div>
  );
};
