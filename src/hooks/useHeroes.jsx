import { useState } from "react";
import { getHeroes } from "../services/getHeroes";

export const useHeroes = () => {
    const [heroes, setHeroes] = useState([]);

    const fetchHeroes = async (username) => {
      try {
        const heroData = await getHeroes(username);
        const favoriteHeroes = [heroData[0].hero_id, heroData[1].hero_id, heroData[2].hero_id]
        setHeroes(favoriteHeroes);
      } catch (error) {
        
      }
    };
  
    return { heroes, fetchHeroes };
}