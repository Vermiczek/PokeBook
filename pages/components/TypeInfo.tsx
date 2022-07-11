import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledTypeInfo } from "../../styles/TypeInfo.styled";

interface props {
  type: string;
}
function getColor(type: string): string {
  if (type === "Normal") {
    return "#9c9a73";
  } else if (type === "Fighting") {
    return "#770404";
  } else if (type === "Flying") {
    return "#b79ff0";
  } else if (type === "Poison") {
    return "#973cc2";
  } else if (type === "Ground") {
    return "#eeecc5";
  } else if (type === "Rock") {
    return "#8b7734";
  } else if (type === "Bug") {
    return "#85bd2d";
  } else if (type === "Ghost") {
    return "#3c3579";
  } else if (type === "Steel") {
    return "#a8a8a8";
  } else if (type === "Fire") {
    return "#ff0000";
  } else if (type === "Water") {
    return "#6b9bf5";
  } else if (type === "Grass") {
    return "#28db31";
  } else if (type === "Electric") {
    return "#f1df35";
  } else if (type === "Psychic") {
    return "#ff5ea9";
  } else if (type === "Ice") {
    return "#84d6fc";
  } else if (type === "Dragon") {
    return "#ad9bf0";
  } else if (type === "Dark") {
    return "#4e4438";
  } else if (type === "Fairy") {
    return "#ffbffc";
  } else return "#ffffff0";
}

export const TypeInfo = ({ type }: props) => {
  const [color, setColor] = useState(getColor(type));
  const router = useRouter();

  useEffect(() => {
    setColor(getColor(type));
  }, [type]);

  if (type === "") {
    return <></>;
  } else
    return (
      <StyledTypeInfo>
        <div
          className="window"
          style={{
            backgroundColor: color,
          }}
        >
          {type}
        </div>
      </StyledTypeInfo>
    );
};

export default TypeInfo;
