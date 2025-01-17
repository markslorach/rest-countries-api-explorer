import { getCountries } from "@/lib/countries";
import { alphabeticalOrder } from "@/utils/helpers";
import CountryList from "./components/CountryList";
import { getFavouriteCountries } from "@/lib/user";
import { auth } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

export default async function CountryContainer() {
  const { data = [], error } = await getCountries();
  const { countries = [] } = await getFavouriteCountries();

  const { userId } = auth();

  return (
    <main>
      {error && <p>{error}</p>}
      {!error && (
        <CountryList
          data={alphabeticalOrder(data)}
          countries={countries}
          userId={userId}
        />
      )}
    </main>
  );
}
