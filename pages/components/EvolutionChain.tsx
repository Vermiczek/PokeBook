import React from "react";
import { useState, useEffect } from "react";
import { StyledInput } from "../../styles/InputField.styled";
import { useSelector, useDispatch } from "react-redux";
import { StyledEvolutionChain } from "../../styles/EvolutionChain.styled";
import { NextRouter } from "next/router";
import { PokemonThumbnail } from "./PokemonThumbnail";

interface props {
  evochain: any;
  router: NextRouter;
}

//Component responsible for processing the input data from user.
export const EvolutionChain = ({ evochain, router }: props) => {
  const [evolve1, setEvolve1] = useState<any>();
  const [evolve2, setEvolve2] = useState();
  const [evolve3, setEvolve3] = useState();
  const [depth, setDepth] = useState<number>();

  function setThumbnails() {
    if (evochain !== null)
      if (evochain?.chain?.evolves_to?.length != 0) {
        let tempRef = evochain?.chain.evolves_to;
        let count = 1;
        if (evochain?.chain.evolves_to != null) {
          while (tempRef.length != 0) {
            tempRef = tempRef[0].evolves_to;
            count = count + 1;
          }
          setDepth(count);
        }
        if (count >= 2) {
          let url =
            "https://pokeapi.co/api/v2/pokemon/" + evochain.chain.species.name;
          var href = <PokemonThumbnail router={router} key={999} link={url} />;
          setEvolve1(href);

          let map2 = evochain?.chain.evolves_to.map(
            (pokemon: any, id: number) => {
              let url =
                "https://pokeapi.co/api/v2/pokemon/" + pokemon.species.name;
              return <PokemonThumbnail router={router} key={id} link={url} />;
            }
          );
          setEvolve2(map2);
          if (count == 3) {
            let map3 = evochain?.chain.evolves_to[0].evolves_to.map(
              (pokemon: any, id: number) => {
                let url =
                  "https://pokeapi.co/api/v2/pokemon/" + pokemon.species.name;
                return <PokemonThumbnail router={router} key={id} link={url} />;
              }
            );
            setEvolve3(map3);
          }
        }
      }
  }

  useEffect(() => {
    setThumbnails();
  }, [evochain, depth]);

  useEffect(() => {}, [evolve1]);

  if (depth === 2) {
    return (
      <StyledEvolutionChain>
        <div className="tier">{evolve1}</div>
        <div className="tier">{evolve2}</div>
      </StyledEvolutionChain>
    );
  }
  if (depth === 3) {
    return (
      <StyledEvolutionChain>
        <div className="tier">{evolve1}</div>
        <div className="tier">{evolve2}</div>
        <div className="tier">{evolve3}</div>
      </StyledEvolutionChain>
    );
  }
  return <div>xd</div>;
};

export default EvolutionChain;
