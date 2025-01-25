"use client";
import Link from "next/link";
import { Country } from "../_types/types";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import RemoveFavouriteForm from "./user/RemoveFavouriteForm";
import { usePathname } from "next/navigation";
import { FavouriteCountry } from "@prisma/client";
import AddToFavourites from "./user/AddToFavouritesForm";

type Props = {
  country: Country;
  removeFavourite?: (country: Country) => void;
  countries?: FavouriteCountry[];
  userId?: string | null;
};

const CountryCard = ({
  country,
  removeFavourite,
  countries,
  userId,
}: Props) => {
  const pathname = usePathname();

  const isFavouriteCountry =
    countries?.map((country) => country.country).includes(country.cca3) ??
    false;

  return (
    <Link href={`/country/${country.cca3}`}>
      <article className="p-4 relative rounded-lg shadow-sm bg-white dark:bg-gray-700 space-y-7 border border-gray-300/50 dark:border-gray-500/50 md:hover:scale-[102%] duration-300 ease-in-out transition-transform">
        <AspectRatio ratio={16 / 9}>
          <Image
            width={300}
            height={200}
            src={country.flags.png}
            alt={country.name.common}
            className="object-cover w-full h-full rounded-lg shadow-sm border border-gray-300/50 dark:border-gray-500/50"
          />
        </AspectRatio>

        <div>
          <h2 className="font-semibold text-lg line-clamp-1 mb-2.5">
            {country.name.common}
          </h2>

          <p className="mb-2">
            <span className="font-semibold">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>

          <p className="mb-1.5">
            <span className="font-semibold">Region:</span> {country.region}
          </p>

          <p className="line-clamp-1 w-[80%]">
            <span className="font-semibold">
              {country.capital?.length > 1 ? "Capitals:" : "Capital:"}
            </span>{" "}
            {country.capital ? country.capital.join(", ") : "No Capital"}
          </p>
          <div className="absolute bottom-4 right-4">
            {(pathname === "/favourite-countries" && (
              <RemoveFavouriteForm
                removeFavourite={removeFavourite}
                country={country}
              />
            )) ||
              (userId && pathname === "/" && (
                <AddToFavourites
                  countryCode={country.cca3}
                  isFavourite={isFavouriteCountry}
                />
              ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CountryCard;
