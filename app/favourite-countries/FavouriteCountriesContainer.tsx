"use client";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { alphabeticalOrder } from "@/utils/helpers";
import { Country } from "../_types/types";
import { useOptimistic } from "react";
import CountryList from "../components/CountryList";
import Link from "next/link";
import HomeButton from "../components/shared/HomeButton";

type Props = {
  userId: string | null;
  favouriteCountries: Country[];
};

const FavouriteCountriesContainer = ({ userId, favouriteCountries }: Props) => {
  const [optimisticFavourites, setOptimisticFavourites] =
    useOptimistic(favouriteCountries);

  const handleRemoveFavourite = (favouriteCountry: Country) => {
    setOptimisticFavourites((optimisticFavourites) =>
      optimisticFavourites.filter(
        (country) => country.cca3 !== favouriteCountry.cca3
      )
    );
  };

  return (
    <div>
      <SignedOut>
        <HomeButton />
        <p className="mt-10">
          Please{" "}
          <Link href="/sign-in" className="text-blue-500">
            sign in
          </Link>{" "}
          to see your favourite countries.
        </p>
      </SignedOut>
      <SignedIn>
        <CountryList
          data={alphabeticalOrder(optimisticFavourites)}
          removeFavourite={handleRemoveFavourite}
        />
      </SignedIn>
    </div>
  );
};

export default FavouriteCountriesContainer;
