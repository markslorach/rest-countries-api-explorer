import prisma from "@/prisma/client";
import { currentUser } from "@clerk/nextjs/server";

// Get logged in user from the db or create a new user if not found
export async function getUser() {
  try {
    const clerkUser = await currentUser();
    const email = clerkUser?.emailAddresses[0]?.emailAddress as string;

    if (!clerkUser) return;

    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: { email, name: clerkUser?.firstName },
      });
    }

    return user;
  } catch (error) {
    console.error(error);
  }
}

// Get all favourite countries for a logged in user
export async function getFavouriteCountries() {
  try {
    const user = await getUser();
    if (!user) return { error: "User not found" };

    const countries = await prisma.favouriteCountry.findMany({
      where: { userId: user.id },
    });

    return { countries };
  } catch (error) {
    return { error: "Error fetching data" };
  }
}

// Add a country to a user's favourites
export async function addFavouriteCountry(countryCode: string) {
  try {
    const user = await getUser();
    if (!user) return { error: "User not found" };

    const country = await prisma.favouriteCountry.create({
      data: { userId: user.id, country: countryCode },
    });

    return { country };
  } catch (error) {
    return { error: "Error adding country" };
  }
}

// Remove a country from a user's favourites
export async function removeFavouriteCountry(countryCode: string) {
  try {
    const user = await getUser();
    if (!user) return { error: "User not found" };

    const existingCountry = await prisma.favouriteCountry.findFirst({
      where: { userId: user.id, country: countryCode },
    });

    if (!existingCountry) return { error: "Country not found in database" };

    const country = await prisma.favouriteCountry.delete({
      where: {
        userId: user.id,
        id: existingCountry.id,
      },
    });

    return { country };
  } catch (error) {
    return { error: "Error removing country" };
  }
}
