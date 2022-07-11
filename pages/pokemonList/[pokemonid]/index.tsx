import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledPokemonIndex } from "../../../styles/PokemonIndex.styled";
import { PokemonPicture } from "../../../components/PokemonPicture";
import { TypeInfo } from "../../../components/TypeInfo";
import { EvolutionChain } from "../../../components/EvolutionChain";
import { SkillList } from "../../../components/SkillList";
import { PokemonStats } from "../../../components/PokemonStats";
import { AnimatePresence, motion } from "framer-motion";
import { AbilityData } from "../../../components/AbilityData";

const hex2rgba = (hex: string = "#ffffff", alpha = 0.5) => {
  const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

function getColor(type: string): string {
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

//Main pokemon screen
const PokemonScreen = () => {
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [pokemonExtendedData, setPokemonExtendedData] = useState<any>(null);
  const [pokemonName, setPokemonName] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [spriteUrl, setSpriteUrl] = useState<string>("");
  const [backSpriteUrl, setBackSpriteUrl] = useState<string>("");
  const [abilities, setAbilities] = useState<any>("");
  const [movesData, setMovesData] = useState<any[]>();
  const [evolutionChain, setEvolutionChain] = useState<any>();
  const [stats, setStats] = useState<any>("");
  const [description, setDescription] = useState("");
  const [hw, setHw] = useState({ height: "", weight: "" });

  const router = useRouter();

  function fetchPokemonData(inputId: string | string[] | undefined) {
    if (inputId !== undefined) {
      fetch("https://pokeapi.co/api/v2/pokemon/" + inputId + "/")
        .then((response) => response.json())
        .then((pokemon) => {
          setPokemonData(pokemon);
          let tempH = (pokemon.height * 10).toString();
          let tempW = pokemon.weight / 10;

          setHw({
            height: "Height: " + tempH + "cm",
            weight: "Weight: " + tempW + "kg",
          });
        })
        .catch((e) => {
          console.log(e);
        });

      fetch("https://pokeapi.co/api/v2/pokemon-species/" + inputId + "/")
        .then((response) => response.json())
        .then((pokemon2) => {
          let desc = "";
          for (let i = 0; i < pokemon2.flavor_text_entries.length; i++) {
            if (pokemon2.flavor_text_entries[i].language.name == "en") {
              desc = pokemon2.flavor_text_entries[i].flavor_text;
            }
          }
          setDescription(desc);
          setPokemonExtendedData(pokemon2);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  useEffect(() => {
    fetchPokemonData(router.query.pokemonid);
  }, [router.query.pokemonid]);

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
      setBackSpriteUrl(pokemonData.sprites.back_default);
      setMovesData(pokemonData.moves);
      setStats(pokemonData.stats);
      setAbilities(pokemonData.abilities);
    }
  }, [pokemonData]);

  useEffect(() => {
    if (pokemonExtendedData !== null) {
      fetch(pokemonExtendedData.evolution_chain.url)
        .then((response) => response.json())
        .then((evo) => {
          setEvolutionChain(evo);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [pokemonExtendedData]);

  useEffect(() => {
    //
  }, [evolutionChain]);

  useEffect(() => {}, [type1, type2]);

  useEffect(() => {}, [stats]);

  return (
    <StyledPokemonIndex>
      <AnimatePresence>
        <motion.div
          animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
          transition={{ duration: 0.4 }}
          initial={{ x: -1000, opacity: 0 }}
          exit={{ x: -1000, transition: { duration: 0.3 } }}
          style={{
            backgroundImage:
              "linear-gradient(to right," +
              hex2rgba(getColor(type1), 0.7) +
              "," +
              hex2rgba(getColor(type1), 0.7) +
              ")",
          }}
          className="wrapper-all"
        >
          <button
            onClick={() => {
              router.replace("/pokemonList");
            }}
            className="back"
          >
            Back to pokemon list
          </button>
          <PokemonPicture
            fronturl={spriteUrl}
            backurl={backSpriteUrl}
            name={pokemonName}
          />
          <div className="infowrapper">
            <div className="typeInfo">
              <TypeInfo type={type1} />
              <TypeInfo type={type2} />
            </div>
            <div className="pokeInfo ">
              <div>{hw.height}</div>
              <div>{hw.weight}</div>
              <div className="desc">{description}</div>
            </div>
          </div>
          <AbilityData abilityData={abilities} />
          <div className="pokeStats">
            <PokemonStats stats={stats} />
          </div>
          <div className="pokeEvos">
            <EvolutionChain router={router} evochain={evolutionChain} />
          </div>
          <div>
            <SkillList data={movesData} />
          </div>
        </motion.div>
      </AnimatePresence>
    </StyledPokemonIndex>
  );
};

export default PokemonScreen;
