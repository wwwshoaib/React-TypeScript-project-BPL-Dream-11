import { use, useState } from "react";
import type { PlayerType } from "../../Type/PlayerType";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";



export interface PlayersProps {
    playersPromise: Promise<PlayerType[]>,
    coin: number,
    setCoin: React.Dispatch<React.SetStateAction<number>>
}

const Players = ({ playersPromise, coin, setCoin }: PlayersProps) => {

    // Use the use hook to handle the promise and get the players data.
    const players = use(playersPromise);

    // State to manage the active tab (available or selected).
    const [activeTab, setActiveTab] = useState('available');
    // Function to handle tab button clicks and update the active tab state.
    const handleBtn = (tab: 'available' | 'selected') => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-between p-10">
                    <h2 className="text-xl font-bold">

                        {/* Render the appropriate player list based on the active tab */}
                        {
                            activeTab === 'available' ? (
                                'Available Players'
                            ) : (
                                'Selected Players'
                            )
                        }
                    </h2>
                    <div className="flex ">
                        {/* Tab buttons */}
                        <button onClick={() => handleBtn('available')}
                            className={`btn  rounded-r-none ${activeTab === 'available' ? 'btn-success' : ''}`}>Available</button>
                        <button onClick={() => handleBtn('selected')}
                            className={`btn rounded-l-none ${activeTab === 'selected' ? 'btn-success' : ''}`}>Selected</button>
                    </div>

                </div>

                {/* Render the appropriate player list based on the active tab */}
                {
                    activeTab === 'available' ? (
                        <AvailablePlayers players={players} coin={coin} setCoin={setCoin} />
                    ) : (
                        <SelectedPlayers />
                    )
                }


            </div>
        </>
    );
};

export default Players;