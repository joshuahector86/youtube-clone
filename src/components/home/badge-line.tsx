import { Badge } from "@/components/ui/badge";
import { badges } from "@/data/home/badge-data";

const BadgeLine = () => {
  const isAll = (badgeName: string): boolean => {
    return badgeName === "All";
  };
  return (
    <div className="flex gap-2 overflow-auto pb-2">
      {badges.map((badge) => (
        <Badge
          variant="secondary"
          className={`text-sm cursor-default
            ${isAll(badge.name) ? "bg-[#717171]" : ""}
        
        `}
        >
          {badge.name}
        </Badge>
      ))}
    </div>
  );
};

export default BadgeLine;
