import { Header } from "@/components/header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
    component: () => (
        <>
            <Header />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
});
