
import type { PlayerType } from '../../Type/PlayerType';
import Player from '../Player/Player';



const AvailablePlayers = ({players, coin, setCoin}: {players: PlayerType[], coin: number, setCoin: React.Dispatch<React.SetStateAction<number>>}) => {
    
    return (
         <div className="md:min-w-300 mx-auto p-3 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-5">
                    {
                        players.map(player =>
                            <Player
                                key={player.id}
                                player={player}
                                coin={coin}
                                setCoin={setCoin}
                            >

                            </Player>)
                    }

                </div>
    );
};

export default AvailablePlayers;