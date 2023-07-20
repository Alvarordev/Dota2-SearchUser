import { useState } from "react";
import { getPeer } from "../services/getPeer";

export const usePeer = () => {
    const [peer, setPeer] = useState([]);

    const fetchPeer = async (accountId) => {
      try {
        const heroData = await getPeer(accountId);
        setPeer(heroData);
      } catch (error) {
        console.err(error);
      }
    };
  
    return { peer, fetchPeer };
}