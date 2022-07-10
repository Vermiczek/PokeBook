import { useEffect, useState } from "react";
import { StyledSkill, StyledSkillTemplate } from "../../styles/Skill.styled";

interface props {
  link: string;
  key: number;
}
// interface move {
//   name: string;
//   accuracy: string;
//   pp: string;
//   descripton: string;
//   power: string;
// }

export const Skill = ({ link }: props) => {
  const [moveData, setMoveData] = useState<any>();
  const [unwrapped, setUnwrapped] = useState<boolean>(false);

  const toggleWrap = () => {
    if (unwrapped === true) {
      setUnwrapped(false);
    }
    if (unwrapped === false) {
      setUnwrapped(true);
    }
  };

  useEffect(() => {
    fetch(link)
      .then((response) => response.json())
      .then((move) => {
        let desc = "";
        for (let i = 0; i < move.flavor_text_entries.length; i++) {
          if (move.flavor_text_entries[i].language.name == "en") {
            desc = move.flavor_text_entries[i].flavor_text;
          }
        }
        let tempMove = {
          name: move.names[7].name,
          accuracy: move.accuracy,
          pp: move.pp,
          power: move.power,
          description: desc,
          type: move.type.name,
        };
        setMoveData(tempMove);
      });
  }, [link]);

  if (moveData != null) {
    if (unwrapped)
      return (
        <StyledSkill>
          <div className="wrapper">
            <div className="name">{moveData.name}</div>
            <div className="type">{moveData.type}</div>
            <div className="accuracy">{moveData.accuracy}</div>
            <div className="pp">{moveData.pp}</div>
            <div className="power">{moveData.power}</div>
          </div>
          <div
            className="description"
            onClick={() => {
              toggleWrap();
            }}
          >
            {" "}
            Description:
            <div className="description-helper">{moveData.description}</div>
          </div>
        </StyledSkill>
      );
    if (!unwrapped)
      return (
        <StyledSkill>
          <div className="wrapper">
            <div className="name">{moveData.name}</div>
            <div className="type">{moveData.type}</div>
            <div className="accuracy">{moveData.accuracy}</div>
            <div className="pp">{moveData.pp}</div>
            <div className="power">{moveData.power}</div>
          </div>
          <div
            onClick={() => {
              toggleWrap();
            }}
            className="showDescription"
          >
            Show description...
          </div>
        </StyledSkill>
      );
  }
  return <></>;
};

export const SkillTemplate = () => {
  return (
    <StyledSkillTemplate>
      <div className="wrapper">
        <div className="name">Name</div>
        <div className="type">Type</div>
        <div className="accuracy">Accuracy</div>
        <div className="pp">PP</div>
        <div className="power">Power</div>
      </div>
    </StyledSkillTemplate>
  );
};

export default Skill;
