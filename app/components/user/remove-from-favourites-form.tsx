"use client";
import { Country } from "@/app/_types/types";
import { Button } from "@/components/ui/button";
import { removeFavouriteCountryAction } from "@/server/actions/actions";
import { BookmarkIcon as BookmarkOutline } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkSolid } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
  removeFavourite?: (country: Country) => void;
  country: Country;
};

const RemoveFavouriteForm = ({ removeFavourite, country }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  async function action() {
    if (removeFavourite) {
      removeFavourite(country);
      await removeFavouriteCountryAction(country.cca3);
    }
  }

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <form className="flex" action={action}>
      <Button
        size="icon"
        type="submit"
        onClick={handleButtonClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Add country to favourites"
        className="transform active:scale-95 transition-transform shadow-sm bg-gray-50 hover:bg-gray-50"
      >
        {isHovered ? (
          <BookmarkOutline className="w-[22px] h-[22px] text-blue-500" strokeWidth={2} />
        ) : (
          <BookmarkSolid className="w-[22px] h-[22px] text-blue-500" />
        )}
      </Button>
    </form>
  );
};

export default RemoveFavouriteForm;
