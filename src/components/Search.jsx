import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "./Input";

export const Search = () => {
  return (
    <div style={{ width: "300px" }}>
      <Input placeholderStatic={"Buscar"} icon={<AiOutlineSearch />} />
    </div>
  );
};
