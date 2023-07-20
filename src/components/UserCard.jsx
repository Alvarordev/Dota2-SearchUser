import heroData from '../constants/heroes.json'
import rankData from '../constants/ranks.json'

export const UserCard = ({user, heroes, peer}) => {

    const profileData = user?.profile   
    const firstHero = heroData[heroes[0]]
    const secondHero = heroData[heroes[1]]
    const thirdHero = heroData[heroes[2]]
    const medalColor = `bg-red-500 flex h-[10px] w-full`

    function rankImg(rank) {
        const [rankID] = `${rank}`.split(" ");
        const rankIDNumber = `${rankID.charAt(0)}`;
        return rankIDNumber;
    }
    function starsImg(rank) {
        const [rankID] = `${rank}`.split(" ");
        const rankIDNumber = `${rankID.charAt(1)}`;
        return rankIDNumber;
    }
    const rank = rankData[rankImg(user?.rank_tier)]

    return (
        <div className="min-w-[480px] flex flex-col border border-gray-500 rounded-sm bg-[#171717] ">
        <header className="flex p-6 justify-between">
          <div>
            <a
              href={`https://www.opendota.com/players/${profileData?.account_id}`}
              target="_blank"
              className="text-2xl font-bold hover:underline"
            >
              {!user ? 'Unknown' : profileData?.personaname}
            </a>
            <h3 className="text-gray-500 text-lg font-semibold">
              {!user || rank?.medal === undefined ? 'Unknown' : rank?.medal}
            </h3>
            <div className="flex flex-col relative">
              <img
                src={`https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_${starsImg(user?.rank_tier)}.png`}
                alt=""
                className="w-14 absolute"
              />
              <img
                src={`https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_${!user || rank?.medal === undefined ? '0' : rankImg(user?.rank_tier)}.png`}
                alt="medal"
                className="w-14"
              />
            </div>
          </div>
          <img
            src={profileData?.avatarfull}
            alt="avatar"
            className="rounded-md h-[7rem] w-[7rem] ml-2"
          />
        </header>

        <main className="px-6 pb-6 flex gap-2 justify-between">
          <div>
            <span className="text-gray-500 font-semibold">heroes favoritos</span>
            <div className="flex [&>img]:w-[3.8rem]">
              <img
                src={`https://cdn.cloudflare.steamstatic.com/${!user ? '/apps/dota2/images/dota_react/heroes/puck.png?' : firstHero?.img}`}
                alt="heroes img"
              />
              <img
                src={`https://cdn.cloudflare.steamstatic.com/${!user ? '/apps/dota2/images/dota_react/heroes/puck.png?' : secondHero?.img}`}
                alt="heroes img"
              />
              <img
                src={`https://cdn.cloudflare.steamstatic.com/${!user ? '/apps/dota2/images/dota_react/heroes/puck.png?' : thirdHero?.img}`}
                alt="heroes img"
              />
            </div>
          </div>
          <div>
            <span className="text-gray-500 font-semibold">tu machete</span>
            <div className="flex items-center gap-2 ">          
              <img src={peer?.avatarfull} className="w-[2rem]"/>
              <span>{!user || !peer ? 'Unknown' : peer?.personaname}</span>  
            </div>
          </div>
        </main>

        <footer>
          <span
            className={ !user ? "bg-white flex min-h-[10px]":  medalColor}
          />
        </footer>
      </div>
    )
}