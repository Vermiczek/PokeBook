import { useEffect, useState } from "react";
import { StyledAbilities } from "../../styles/AbilityData.styled";

interface abitableElement {
  description: string;
  name: string;
}

export const AbilityData = ({ abilityData }: any) => {
  const [abiMap, setAbiMap] = useState<any>();
  const [abiTable, setAbiTable] = useState<any[]>([]);

  useEffect(() => {
    let key = 0;
    let tab: any[] = [];
    for (let i = 0; i < abilityData.length; i++) {
      fetch(abilityData[i].ability.url)
        .then((response) => response.json())
        .then((ability) => {
          let tempName = "";
          let tempDescription = "";

          for (let name of ability.names) {
            if (name.language.name === "en") {
              tempName = name.name;
            }
          }

          for (let text of ability.flavor_text_entries) {
            if (text.language.name === "en") {
              tempDescription = text.flavor_text;
            }
          }

          tab.push({ description: tempDescription, name: tempName });
          if (i === abilityData.length - 1) setAbiTable(tab);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [abilityData]);

  useEffect(() => {
    if (abiTable != null) {
      let map = abiTable.map((abi: abitableElement) => {
        return (
          <div className="ability">
            <div className="name">{abi.name}</div>
            <div className="description">{abi.description}</div>
          </div>
        );
      });
      setAbiMap(map);
    }
  }, [abiTable]);

  return <StyledAbilities>{abiMap}</StyledAbilities>;
};

export default AbilityData;
