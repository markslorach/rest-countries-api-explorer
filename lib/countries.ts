import data from './data.json';

// export async function getCountries() {
//   try {
//     const response = await fetch("https://restcountries.com/v3.1/all", {
//       next: { revalidate: 3600, } ,
//     });
//     const data = await response.json();
//     return { data };
//   } catch (error) {
//     return { error: "Error fetching data" };
//   }
// }

export async function getCountries() {
  try {
    return { data };
  } catch (error) {
    return { error: "Error fetching data" };
  }
}

export async function getCountry(cca3: string) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${cca3}`,
      { next: { revalidate: 3600 } }
    );
    const data = await response.json();
    return { data: data[0] };
  } catch (error) {
    return { error: "Error fetching data" };
  }
}
