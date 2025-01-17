"use client";
import { useState } from "react";
import { Country } from "../_types/types";
import { removeDuplicates } from "@/utils/helpers";
import CountryCard from "./CountryCard";
import RegionSelect from "./RegionSelect";
import SearchCountry from "./SearchCountry";
import ScrollButton from "./shared/ScrollButton";
import { usePathname } from "next/navigation";
import { FavouriteCountry } from "@prisma/client";

type Props = {
  data: Country[];
  removeFavourite?: (country: Country) => void;
  countries?: FavouriteCountry[];
  userId?: string | null;
};

const CountryList = ({ data, removeFavourite, countries, userId }: Props) => {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const pathname = usePathname();

  const filteredCountries = data.filter((country) => {
    const searchMatch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());

    const regionMatch =
      selectedRegion === "all" ? true : country.region === selectedRegion;

    return searchMatch && regionMatch;
  });

  const uniqueRegions = removeDuplicates(data.map((country) => country.region));

  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-5">
        <SearchCountry search={search} setSearch={setSearch} />

        <RegionSelect
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          uniqueRegions={uniqueRegions}
        />
      </div>

      <h1 className="text-xl font-semibold mt-10 mb-5">
        {pathname === "/favourite-countries"
          ? "Favourite Countries"
          : "Countries"}
      </h1>

      {!filteredCountries.length && (
        <>
          {pathname === "/" && <p>No countries found</p>}
          {pathname === "/favourite-countries" && (
            <p>Add a country to your favourites to see it here.</p>
          )}
        </>
      )}

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredCountries.map((country) => (
          <li key={country.cca3}>
            <CountryCard
              country={country}
              removeFavourite={removeFavourite}
              countries={countries}
              userId={userId}
            />
          </li>
        ))}
      </ul>
      <ScrollButton />
    </div>
  );
};

export default CountryList;
