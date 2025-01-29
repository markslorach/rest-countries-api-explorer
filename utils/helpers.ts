import { Country } from "@/app/types/types";

export function removeDuplicates(arr: string[]) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

export function alphabeticalOrder(data: Country[]) {
  return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
}