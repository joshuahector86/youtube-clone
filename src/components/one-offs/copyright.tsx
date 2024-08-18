import { CopyrightIcon } from "lucide-react";

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <p className="flex items-center gap-1 text-muted-foreground text-sm">
      <CopyrightIcon size={15} /> {currentYear} Dimitri Hector.
    </p>
  );
};

export default Copyright;
