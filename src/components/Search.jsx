import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "./Input";

export const Search = () => {
  return (
    <div style={{ width: "300px" }}>
      <Input
        staticPlaceholder={"Buscar"}
        icon={<AiOutlineSearch fill="#777" />}
        iconSize={22}
        iconPosition="left"
        paddingtb={8}
      />
    </div>
  );
};
