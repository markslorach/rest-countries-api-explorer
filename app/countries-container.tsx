import { getCountries } from "@/lib/countries";
import { alphabeticalOrder } from "@/utils/helpers";
import CountryList from "./components/country-list";
import { getFavouriteCountries } from "@/lib/user";
import { auth } from "@clerk/nextjs/server";

export default async function CountryContainer() {
  const { data = [], error } = await getCountries();
  const { countries = [] } = await getFavouriteCountries();

  const { userId } = auth();

  return (
    <main>
      {error && <p>{error}</p>}
      {!error && (
          <CountryList
          data={alphabeticalOrder(data as any)}
            countries={countries}
            userId={userId}
          />
        )}
    </main>
  );
}
