import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Props = {
  search: string;
  setSearch: (search: string) => void;
};

const SearchCountry = ({ search, setSearch }: Props) => {
  return (
    <div role="search" className="w-full">
      <Input
        className="focus-visible:ring-0 md:w-72 h-14 shadow-sm dark:bg-gray-700"
        icon={<Search className="h-6 w-6 text-gray-600" />}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchCountry;
