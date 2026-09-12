import { use } from "react";
import type { PlayerType } from "../../Type/PlayerType";
import Player from "../Player/Player";


export interface PlayersProps {
    playersPromise: Promise<PlayerType[]>
}

const Players = ({ playersPromise }: PlayersProps) => {

    const players = use(playersPromise);
    console.log(players);

    return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-between p-10">
                    <h2 className="text-xl font-bold">Available Players</h2>
                    <div className="flex gap-2">
                        <button className="btn btn-success">Available</button>
                        <button className="btn">Selected</button>
                    </div>

                </div>

                <div className="md:min-w-300 mx-auto p-3 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-5">
                    {
                        players.map(player =>
                            <Player
                                key={player.id}
                                player={player} >

                            </Player>)
                    }

                </div>

            </div>
        </>
    );
};

export default Players;