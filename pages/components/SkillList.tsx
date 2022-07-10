import { useEffect, useState } from "react";
import { StyledSkillList } from "../../styles/SkillList.Styled";
import { Skill, SkillTemplate } from "./Skill";

export const SkillList = (data: any) => {
  const [moves, setMoves] = useState();
  useEffect(() => {
    if (data !== null) {
      let map2 = data.data?.map((move: any, id: any) => {
        return <Skill key={id} link={move.move.url} />;
      });
      setMoves(map2);
    }
  }, [data]);

  return (
    <StyledSkillList>
      <SkillTemplate />
      <div className="moves">
        <div className="placeholder"></div>
        {moves}
      </div>
    </StyledSkillList>
  );
};

export default SkillList;
