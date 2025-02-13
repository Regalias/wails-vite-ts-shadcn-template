import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/features/navigation/sidebar";
import { AppTopBar } from "@/features/navigation/topbar";
import { AwaitReady } from "@bindings/App";
import { Box, LoaderPinwheel } from "lucide-react";

export const Route = createRootRoute({
  component,
  loader: async () => {
    await AwaitReady();
  },
  wrapInSuspense: true,
  pendingComponent: () => {
    return (
      <div className="flex flex-col justify-center items-center h-svh gap-8">
        <div className="flex flex-col items-center text-4xl gap-2">
          <Box size={128} strokeWidth={1.5} />
          <div>Box</div>
        </div>

        <div className="flex gap-2 text-lg items-center">
          <LoaderPinwheel className="animate-spin" /> <span>Initializing...</span>
        </div>
      </div>
    );
  },
});

function component() {
  return (
    <>
      <SidebarProvider className="flex flex-col">
        <AppTopBar />
        <div className="flex flex-1">
          <AppSidebar className="top-header" />
          <SidebarInset>
            <Outlet />
          </SidebarInset>
        </div>
      </SidebarProvider>

      {/* Dev tools aren't omitted correctly in wails build, remove when not debugging */}
      {/* <TanStackRouterDevtools /> */}
    </>
  );
}
