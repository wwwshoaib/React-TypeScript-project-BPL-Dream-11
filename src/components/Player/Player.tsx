import { useState } from "react";
import type { PlayerType } from "../../Type/PlayerType";
import { CiUser } from "react-icons/ci";
import { toast } from "react-hot-toast";

export interface PlayerProps {
  player: PlayerType;
  coin: number;
  setCoin: React.Dispatch<React.SetStateAction<number>>;

}


const Player = ({ player, coin, setCoin }: PlayerProps) => {

  console.log(coin);

  const { name, image, origin, position, price } = player;

  const handlePurchaseButton = (price: number) => {

    if (coin >= price) {
      setCoin(coin - price);

      toast.success(`You have successfully purchased ${name} for $${price} million!`);
      setIsSelected(true)

    } else {
      toast.error('Insufficient funds to purchase this player.');
    }
  }



  // State to manage whether the player is selected or not.
  const [isSelected, setIsSelected] = useState(false);


  return (
    <div className=" rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between">

      {/* Image & Origin Badge Header */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20 shadow-md">
          {origin}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Position Tag */}
          <p className="text-xs font-bold tracking-wider text-indigo-600 uppercase mb-1">
            {position}
          </p>

          {/* Player Name */}
          <div className="flex items-center gap-2 mb-3  text-xl font-extrabold text-gray-900 tracking-tight">
            <CiUser />
            <h2>
              {name}
            </h2>
          </div>



        </div>

        {/* Divider */}
        <div className="my-4 border-t border-gray-100" />

        {/* Price & Action Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 block font-medium">Price</span>
            <span className="text-lg font-black text-emerald-600">
              ${price ? price : `$ ${price}`} million
            </span>
          </div>

          <button
            onClick={() => handlePurchaseButton(Number(price))}
            disabled={isSelected}
            className={`text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-md ${isSelected
                ? 'bg-gray-400 cursor-not-allowed shadow-none'
                : 'bg-indigo-600 hover:bg-indigo-700 active:scale-95 hover:shadow-indigo-200'
              }`}
          >
            {isSelected ? 'Selected' : 'Choose Player'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;