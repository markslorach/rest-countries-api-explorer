import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { REGIONS } from "@/constants/constants";

type Props = {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
};

const RegionSelect = ({ selectedRegion = "all", setSelectedRegion }: Props) => {
  return (
    <Select value={selectedRegion} onValueChange={setSelectedRegion}>
      <SelectTrigger className="md:w-52 h-14 px-5 shadow-sm dark:bg-gray-700 dark:border-gray-500/50">
        <SelectValue placeholder="Filter by region" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">All Regions</SelectItem>
          {REGIONS.sort().map((region, idx) => (
            <SelectItem
              key={idx}
              value={region}
              onClick={(e) => e.stopPropagation()}
            >
              {region}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default RegionSelect;
