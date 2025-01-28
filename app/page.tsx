import { Suspense } from "react";
import CountryListSkeleton from "./components/skeletons/country-list-skeleton";
import CountriesContainer from "./countries-container";

export default function Home() {
  return (
    <Suspense fallback={<CountryListSkeleton/>}>
      <CountriesContainer />
    </Suspense>
  );
}
