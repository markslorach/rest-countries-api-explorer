import { getCountry } from "@/server/lib/countries";
import { getFavouriteCountries } from "@/server/lib/user";
import { auth } from "@clerk/nextjs/server";
import FavouriteCountriesContainer from "./favourite-countries-contrainer";

const FavouriteCountriesPage = async () => {
  const { userId } = auth();

  let favouriteCountries = [];

  if (userId) {
    const { countries = [], error } = await getFavouriteCountries();

    if (error) return <div className="px-4 md:container mt-10">{error}</div>;

    if (countries.length > 0) {
      favouriteCountries = await Promise.all(
        countries.map(async (country) => {
          const { data } = await getCountry(country.country);
          return data;
        })
      );
    }
  }

  return (
    <FavouriteCountriesContainer
      userId={userId}
      favouriteCountries={favouriteCountries}
    />
  );
};

export default FavouriteCountriesPage;
