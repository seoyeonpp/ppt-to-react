import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("slide-2", "routes/slide-2.tsx"),
  route("slide-3", "routes/slide-3.tsx"),
  route("slide-4", "routes/slide-4.tsx"),
  route("slide-5-1", "routes/slide-5-1.tsx"),
  route("slide-5-2", "routes/slide-5-2.tsx"),
  route("slide-6", "routes/slide-6.tsx"),
  route("slide-7", "routes/slide-7.tsx"),
  route("slide-8", "routes/slide-8.tsx"),
  route("slide-9", "routes/slide-9.tsx"),
] satisfies RouteConfig;
