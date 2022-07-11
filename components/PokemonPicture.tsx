import { motion } from "framer-motion";
import { set } from "immer/dist/internal";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledNavButton } from "../styles/NavButton.styled";
import { StyledPokemonPicture } from "../styles/PokemonPicture.styled";

interface props {
  fronturl: string;
  backurl: string;
  name: string;
}

export const PokemonPicture = ({ fronturl, backurl, name }: props) => {
  const [currentUrl, setCurrentUrl] = useState(fronturl);
  const toggleUrl = () => {
    if (currentUrl === fronturl) setCurrentUrl(backurl);
    else if (currentUrl === backurl) setCurrentUrl(fronturl);
  };

  useEffect(() => {
    setCurrentUrl(fronturl);
  }, [fronturl]);

  if (currentUrl !== null)
    return (
      <StyledPokemonPicture
        key={0}
        as={motion.div}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
        whileTap={{ scale: 1.0, transition: { duration: 0.2 } }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <div
          className="pokemon-sprite"
          onClick={() => {
            toggleUrl();
          }}
          style={{
            height: "17rem",
            width: "17rem",
            backgroundSize: "100%",
            backgroundImage: `url(${currentUrl})`,
          }}
        ></div>
        <div>{name}</div>
      </StyledPokemonPicture>
    );
  else return <div></div>;
};

export default PokemonPicture;
