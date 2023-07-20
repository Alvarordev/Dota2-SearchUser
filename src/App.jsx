import { useCallback } from "react";
import { useUser } from "./hooks/useUser";
import { useInput } from "./hooks/useInput";
import debounce from "just-debounce-it";
import { useHeroes } from "./hooks/useHeroes";
import { UserCard } from "./components/UserCard";
import { usePeer } from "./hooks/usePeer"
import BigNumber from "bignumber.js";

function App() {
  const { user, fetchUser } = useUser();
  const { heroes, fetchHeroes } = useHeroes();
  const { query, updateQuery } = useInput();
  const { peer, fetchPeer} = usePeer();

  const debouncedGetCharacters = useCallback(
    debounce((search) => {
      void fetchUser(search);
      void fetchHeroes(search);
      void fetchPeer(search)
    }, 300),
    [query]
  );

  const handleChange = (event) => {
    const input = event.target.value;
    let steamID; 
    if (input?.includes("steamcommunity.com")) {
      const parts = input?.split("/");
      const steamId = parts[4];
      steamID = BigNumber(`${steamId}`).minus("76561197960265728");
    } else {
      steamID = BigNumber(`${input}`).minus("76561197960265728");
    }
    updateQuery(steamID);

    debouncedGetCharacters(steamID);
  };

  return (
    <div className=" bg-[#242424] min-h-screen text-white flex flex-col items-center justify-center body-font font-inter"
    style={{
      backgroundImage: "url('../dota.png')",
      backgroundRepeat: 'space',
      backgroundSize: '130px', 
    }}>
      <div className="bg-transparent flex flex-col text-center backdrop-blur-sm"> 
        <h1 className="text-[32px] font-bold my-6">Dota 2 - Search User</h1>
        <input
          className="bg-black border border-gray-500 rounded-sm min-w-[480px] mb-5 p-1"
          placeholder="Ingresa tu ID de Steam o el URL"
          onChange={handleChange}
          type="text"
        />
      </div>

      <UserCard user={user} heroes={heroes} peer={peer}/>
    </div>
  );
}

export default App;
