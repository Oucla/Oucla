import type { RouteType } from "types/global";
import { RouterConstantUtil } from "@/lib/RouterContantUtils";
import NotFound from "@/views/Notfound";
import { lazy } from "react";
import Login from "@/views/Login";
import Register from "@/views/Register";
const Home = lazy(() => import("@/views/Home"));
const Dashboard = lazy(() => import("@/views/Dashboard/Home"));
import LiveStream from "@/views/Dashboard/LiveStream";
import Events from "@/views/Dashboard/Events";
import Revenue from "@/views/Dashboard/Revenue";
import TicketManagement from "@/views/Dashboard/TicketManagement";

export const Routes: RouteType[] = [
  {
    path: RouterConstantUtil.page.home,
    component: Home,
    metadata: { isAuth: false },
  },
  {
    path: RouterConstantUtil.page.auth.login,
    component: Login,
    metadata: { isAuth: false },
  },
  {
    path: RouterConstantUtil.page.auth.login,
    component: Register,
    metadata: { isAuth: false },
  },
  {
    path: RouterConstantUtil.page.eventOwner.HOME,
    component: Dashboard,
    metadata: { isAuth: false },
  },
  {
    path: RouterConstantUtil.page.eventOwner.LIVE_STREAMING,
    component: LiveStream,
    metadata: { isAuth: false },
  },
  {
    path: RouterConstantUtil.page.eventOwner.EVENTS,
    component: Events,
    metadata: { isAuth: false },
  },
  {
    path: RouterConstantUtil.page.eventOwner.REVENUE,
    component: Revenue,
    metadata: { isAuth: false },
  },
  {
    path: RouterConstantUtil.page.eventOwner.TICKET_MANAGEMENT,
    component: TicketManagement,
    metadata: { isAuth: false },
  },
  {
    path: RouterConstantUtil.page.notFound,
    component: NotFound,
    metadata: { isAuth: false },
  },
];
