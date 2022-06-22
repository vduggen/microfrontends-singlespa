import { registerApplication, start } from "single-spa";

function showWhenAnyOf(routes) {
  return function (location) {
    return routes.some((route) => location.pathname === route);
  };
}

function showWhenPrefix(routes) {
  return function (location) {
    return routes.some((route) => location.pathname.startsWith(route));
  };
}

function showExcept(routes) {
  return function (location) {
    return routes.every((route) => location.pathname !== route);
  };
}

registerApplication(
  "@mfu/login",
  () => System.import("@mfu/login"),
  showWhenAnyOf(['/']),
);

registerApplication(
  "@mfu/teacher",
  () => System.import("@mfu/teacher"),
  showWhenPrefix(["/teacher"]),
);

registerApplication(
  "@mfu/student",
  () => System.import("@mfu/student"),
  showWhenPrefix(["/student"]),
);

start({
  urlRerouteOnly: true,
});
