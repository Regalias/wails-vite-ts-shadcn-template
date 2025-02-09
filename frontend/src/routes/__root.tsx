import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { AppSidebar } from "@/components/navigation/sidebar";
import { AppTopBar } from "@/components/navigation/topbar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const Route = createRootRoute({
  component,
});

function component() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
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
    </ThemeProvider>
  );
}
