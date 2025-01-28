"use server";
import { addFavouriteCountry, removeFavouriteCountry } from "@/server/lib/user";
import { revalidatePath } from "next/cache";

export async function addFavouriteCountryAction(countryCode: string) {
  try {
    await addFavouriteCountry(countryCode);
  } catch (error: any) {
    return { error: "Failed to add countries to favourites" };
  } finally {
    revalidatePath("/favourite-countries");
  }
}

export async function removeFavouriteCountryAction(countryCode: string) {
  try {
    await removeFavouriteCountry(countryCode);
  } catch (error: any) {
    return { error: "Failed to remove countries from favourites" };
  } finally {
    revalidatePath("/favourite-countries");
  }
}
