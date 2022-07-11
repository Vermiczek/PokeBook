import { NextRouter } from "next/router";
import { useEffect, useState } from "react";

import { StyledPokemonThumbnail } from "../../styles/PokemonThumbnail.styled";
import { useDispatch } from "react-redux";
import { setPokemon, setScreen } from "../../redux/redux";
import { TypeInfo } from "./TypeInfo";
import { motion, useAnimation } from "framer-motion";

interface props {
  link: string;
  router: NextRouter;
}

//hmm
export function getColor(type: string): string {
  if (type === "Normal") {
    return "#c9c8b4";
  } else if (type === "Fighting") {
    return "#c95050";
  } else if (type === "Flying") {
    return "#dad0f3";
  } else if (type === "Poison") {
    return "#d895f7";
  } else if (type === "Ground") {
    return "#d1c28f";
  } else if (type === "Rock") {
    return "#ccbf95";
  } else if (type === "Bug") {
    return "#e0ffae";
  } else if (type === "Ghost") {
    return "#9591bb";
  } else if (type === "Steel") {
    return "#a8a8a8";
  } else if (type === "Fire") {
    return "#f57f7f";
  } else if (type === "Water") {
    return "#c9d7f1";
  } else if (type === "Grass") {
    return "#a1eea5";
  } else if (type === "Electric") {
    return "#fcf5b6";
  } else if (type === "Psychic") {
    return "#fab7d6";
  } else if (type === "Ice") {
    return "#d0edfa";
  } else if (type === "Dragon") {
    return "#ded7f8";
  } else if (type === "Dark") {
    return "#a39e97";
  } else if (type === "Fairy") {
    return "#ecdaeb";
  } else return "#ffffff0";
}

export const PokemonThumbnail = ({ link, router }: props) => {
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [pokemonName, setPokemonName] = useState(null);
  const [type1, setType1] = useState("");
  const [id, setId] = useState("");
  const [type2, setType2] = useState("");
  const [colors, setColors] = useState({
    color1: getColor(type1),
    color2: getColor(type2),
  });
  const [spriteUrl, setSpriteUrl] = useState<string>("");

  const dispatch = useDispatch();

  function fetchSinglePokemon(linkInput: string) {
    fetch(linkInput)
      .then((response) => response.json())
      .then((pokemon) => {
        setPokemonData(pokemon);
      });
  }

  useEffect(() => {
    if (pokemonData !== null) {
      let str = pokemonData.types[0].type.name;
      let str2 = str.charAt(0).toUpperCase() + str.slice(1);
      setType1(str2);

      try {
        let str = pokemonData.types[1].type.name;
        let str2 = str.charAt(0).toUpperCase() + str.slice(1);
        setType2(str2);
      } catch {
        //
      }
      str = pokemonData.name;
      setId(pokemonData.id);
      str2 = str.charAt(0).toUpperCase() + str.slice(1);
      for (let i = 0; i < str2.length; i++) {
        if (str2.charAt(i) === "-") {
          str2 =
            str2.slice(0, i + 1) +
            str2.charAt(i + 1).toUpperCase() +
            str2.slice(i + 2);
          str2 = str2.replace("-", " ");
        }
      }
      setPokemonName(str2);
      setSpriteUrl(pokemonData.sprites.front_default);
    }
  }, [pokemonData]);

  useEffect(() => {
    fetchSinglePokemon(link);
  }, [link]);

  useEffect(() => {
    if (type2 !== "") {
      setColors({
        color1: getColor(type1),
        color2: getColor(type2),
      });
    } else {
      setColors({
        color1: getColor(type1),
        color2: getColor(type1),
      });
    }
  }, [type1, type2]);

  if (pokemonData !== null)
    return (
      <StyledPokemonThumbnail
        key={pokemonData.id}
        as={motion.div}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
        whileTap={{ scale: 1.0, transition: { duration: 0.2 } }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        onClick={() => {
          dispatch(setPokemon(pokemonData));
          router.replace("/pokemonList/" + pokemonData.id);
        }}
        style={{
          backgroundImage:
            "linear-gradient(to right," +
            colors.color1 +
            "," +
            colors.color2 +
            ")",
        }}
      >
        <div>#{id}</div>
        <div
          style={{
            height: "17rem",
            width: "17rem",
            backgroundImage: `url(${spriteUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="name">{pokemonName}</div>
        <div className="types-wrapper">
          <TypeInfo type={type1} />
          <TypeInfo type={type2} />
        </div>
      </StyledPokemonThumbnail>
    );
  return <></>;
};

export default PokemonThumbnail;
