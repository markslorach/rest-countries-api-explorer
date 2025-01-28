import { Country } from "@/app/_types/types";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import CountryDetails from "./country-details";
import { getFavouriteCountries } from "@/server/lib/user";
import { getCountry } from "@/server/lib/countries";

const CountryPage = async ({ params }: { params: { cca3: string } }) => {
  const { userId } = auth();

  const { data } = await getCountry(params.cca3);
  const country = data as Country;

  if (!country) notFound();

  const { countries = [] } = await getFavouriteCountries();

  const isFavouriteCountry =
    countries?.map((country) => country.country).includes(country.cca3) ??
    false;

  return (
    <CountryDetails
      userId={userId}
      country={country}
      countries={{ countries }}
      isFavourite={isFavouriteCountry}
    />
  );
};

export default CountryPage;
