import { useEffect, useState } from "react";
import { InputField } from "./components/InputField";
import { useSelector, useDispatch } from "react-redux";
import { setList, selectList, selectScreen } from "../redux/redux";
import { PokemonThumbnail } from "./components/PokemonThumbnail";
import { useRouter } from "next/router";
import { StyledPokemonList } from "../styles/PokemonList.styled";
import { motion } from "framer-motion";

interface pokemon {
  name: string;
  url: string;
}

const PokemonList = () => {
  const router = useRouter();
  const list = useSelector(selectList);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState<Array<pokemon>>([]);
  const [mapSize, setMapSize] = useState(20);
  const [thumbnailMap, setThumbnailMap] = useState<any>();
  let i = 0;
  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollTop === scrollHeight - clientHeight) {
      setMapSize(mapSize + 20);
    }
  };

  function fetchPokemon(link: string) {
    fetch(link)
      .then((response) => response.json())
      .then((allpokemon) => {
        dispatch(setList(allpokemon));
      });
  }

  function setThumbnails() {
    let tempList = [];
    if (filteredList !== null)
      for (let i = 0; i < mapSize; i++) {
        if (i >= filteredList.length) {
          break;
        }
        tempList.push(filteredList[i]);
      }
    let map = tempList.map((pokemon, id) => {
      return <PokemonThumbnail router={router} key={id} link={pokemon.url} />;
    });
    setThumbnailMap(map);
  }

  function filterList() {
    let tempList: Array<any> = [];
    if (list !== null)
      for (let i = 0; i < list.results.length; i++) {
        if (list.results[i].name.includes(search)) {
          tempList.push(list.results[i]);
        }
      }
    setFilteredList(tempList);
  }

  useEffect(() => {
    setThumbnails();
  }, [filteredList, mapSize]);

  useEffect(() => {
    filterList();
  }, [search]);

  useEffect(() => {
    fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=898");
  }, []);

  useEffect(() => {
    if (list !== null) {
      filterList();
    }
  }, [list]);

  return (
    <StyledPokemonList
      as={motion.div}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
      transition={{ duration: 0.4 }}
      initial={{ x: -1000, opacity: 0 }}
      exit={{ x: -1000, opacity: 0, transition: { duration: 0.3 } }}
    >
      <InputField
        inputName="Pokemon name"
        callbackFunction={setSearch}
      ></InputField>
      <div className="thumbnail-map" onScroll={handleScroll}>
        {thumbnailMap}
      </div>
    </StyledPokemonList>
  );
};

export default PokemonList;
