"use client";
import { Button } from "@/components/ui/button";
import { BookmarkIcon as BookmarkOutline } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkSolid } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

const AddToFavouritesButton = ({ isFavourite }: { isFavourite: boolean }) => {
  const pathname = usePathname();
  const isCountryPage = pathname.startsWith("/country/");

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <Button
      size="icon"
      type="submit"
      onClick={handleButtonClick}
      aria-label="Add country to favourites"
      className={`transform active:scale-95 transition-transform shadow-sm ${
        isCountryPage
          ? "bg-gray-100 hover:bg-gray-100"
          : "bg-gray-50 hover:bg-gray-50"
      }`}
    >
      {isFavourite ? (
        <BookmarkSolid className="w-[22px] h-[22px] text-blue-500" />
      ) : (
        <BookmarkOutline
          className="w-[22px] h-[22px] text-blue-500"
          strokeWidth={2}
        />
      )}
    </Button>
  );
};

export default AddToFavouritesButton;
