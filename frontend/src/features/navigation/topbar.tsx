import { ThemeModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { BedIcon } from "lucide-react";

export const AppTopBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full items-center border-b bg-background">
      <div className="flex h-header w-full items-center gap-2 px-4">
        <BedIcon />
        <span>Application</span>

        <Separator orientation="vertical" className="ml-4 data-[orientation=vertical]:h-4" />
        <div className="p-2 flex gap-2">
          <Button variant="link" asChild>
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link to="/settings" className="[&.active]:font-bold">
              Settings
            </Link>
          </Button>
        </div>

        {/* Right aligned section */}
        <div className="w-full sm:ml-auto sm:w-auto">
          <ThemeModeToggle />
        </div>
      </div>
    </header>
  );
};
