"use client";
import Link from "next/link";
import { Country } from "../_types/types";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import RemoveFavouriteForm from "./user/remove-from-favourites-form";
import { usePathname } from "next/navigation";
import { FavouriteCountry } from "@prisma/client";
import AddToFavourites from "./user/add-to-favourites-form";
import { Earth, MapPin, UsersRound } from "lucide-react";

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
      <article className="p-4 relative rounded-lg shadow-sm bg-white dark:bg-gray-700 space-y-5 border border-gray-300/50 dark:border-gray-500/50 md:hover:scale-[102%] duration-300 ease-in-out transition-transform">
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
          <h2 className="font-semibold text-lg line-clamp-1 mb-3.5 leading-snug">
            {country.name.common}
          </h2>

          <div className="w-[80%] mb-3 flex items-center gap-1 text-sm">
            <span className="flex items-center gap-1 text-gray-600">
              <MapPin className="w-4 h-4" />{" "}
              {country.capital?.length > 1 ? "Capitals:" : "Capital:"}
            </span>{" "}
            <span className="font-medium line-clamp-1">
              {country.capital ? country.capital.join(", ") : "No Capital"}
            </span>
          </div>

          <div className="mb-3 flex items-center gap-1 text-sm">
            <span className="flex items-center gap-1 text-gray-600">
              <UsersRound className="w-4 h-4" /> Population:
            </span>{" "}
            <span className="font-medium">
              {country.population.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm">
            <span className="flex items-center gap-1 text-gray-600">
              <Earth className="w-4 h-4" /> Region:
            </span>{" "}
            <span className="font-medium">{country.region}</span>
          </div>

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
