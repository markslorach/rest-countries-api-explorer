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
import { ArrowUpDown } from "lucide-react";

type Props = {
  data: Country[];
  removeFavourite?: (country: Country) => void;
  countries?: FavouriteCountry[];
  userId?: string | null;
};

const CountryList = ({ data, removeFavourite, countries, userId }: Props) => {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const pathname = usePathname();

  const filteredCountries = data
    // Filter by search
    .filter((country) => 
      country.name.common.toLowerCase().includes(search.toLowerCase())
    )
    // Filter by region
    .filter((country) => 
      selectedRegion === "all" || country.region === selectedRegion
    )
    // Sort by name
    .sort((a, b) => {
      const comparison = a.name.common.localeCompare(b.name.common);
      return sortDirection === "asc" ? comparison : -comparison;
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

      <div className="flex justify-between items-center mt-10 mb-5">
        <h1 className="text-xl font-semibold">
          {pathname === "/favourite-countries"
            ? "Favourite Countries"
            : "Countries"}
        </h1>
        <button
          onClick={() =>
            setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))
          }
          className="px-4 py-2 flex items-center gap-2 text-sm font-medium transform active:scale-95 rounded-md sm:hover:shadow-sm sm:hover:bg-gray-100 transition-colors"
        >
          <ArrowUpDown className="w-4 h-4" />
          {sortDirection === "asc" ? "A - Z" : "Z - A"}
        </button>
      </div>

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
