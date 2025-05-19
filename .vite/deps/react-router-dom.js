import {
  require_react_dom
} from "./chunk-YBFRUR3B.js";
import {
  Action,
  Await,
  BrowserRouter,
  DataRouterContext,
  DataRouterStateContext,
  ErrorResponseImpl,
  FetchersContext,
  Form,
  FrameworkContext,
  HashRouter,
  HistoryRouter,
  IDLE_BLOCKER,
  IDLE_FETCHER,
  IDLE_NAVIGATION,
  Link,
  Links,
  LocationContext,
  MemoryRouter,
  Meta,
  NavLink,
  Navigate,
  NavigationContext,
  Outlet,
  PrefetchPageLinks,
  RemixErrorBoundary,
  Route,
  RouteContext,
  Router,
  RouterProvider,
  Routes,
  Scripts,
  ScrollRestoration,
  ServerMode,
  ServerRouter,
  SingleFetchRedirectSymbol,
  StaticRouter,
  StaticRouterProvider,
  ViewTransitionContext,
  createBrowserHistory,
  createBrowserRouter,
  createClientRoutes,
  createClientRoutesWithHMRRevalidationOptOut,
  createCookie,
  createCookieSessionStorage,
  createHashRouter,
  createMemoryRouter,
  createMemorySessionStorage,
  createPath,
  createRequestHandler,
  createRouter,
  createRoutesFromChildren,
  createRoutesFromElements,
  createRoutesStub,
  createSearchParams,
  createSession,
  createSessionStorage,
  createStaticHandler2,
  createStaticRouter,
  data,
  decodeViaTurboStream,
  deserializeErrors2,
  generatePath,
  getHydrationData,
  getPatchRoutesOnNavigationFunction,
  getTurboStreamSingleFetchDataStrategy,
  href,
  hydrationRouteProperties,
  invariant,
  isCookie,
  isRouteErrorResponse,
  isSession,
  mapRouteProperties,
  matchPath,
  matchRoutes,
  parsePath,
  redirect,
  redirectDocument,
  renderMatches,
  replace,
  resolvePath,
  setDevServerHooks,
  shouldHydrateRouteLoader,
  unstable_RouterContextProvider,
  unstable_createContext,
  useActionData,
  useAsyncError,
  useAsyncValue,
  useBeforeUnload,
  useBlocker,
  useFetcher,
  useFetchers,
  useFogOFWarDiscovery,
  useFormAction,
  useHref,
  useInRouterContext,
  useLinkClickHandler,
  useLoaderData,
  useLocation,
  useMatch,
  useMatches,
  useNavigate,
  useNavigation,
  useNavigationType,
  useOutlet,
  useOutletContext,
  useParams,
  usePrompt,
  useResolvedPath,
  useRevalidator,
  useRouteError,
  useRouteLoaderData,
  useRoutes,
  useScrollRestoration,
  useSearchParams,
  useSubmit,
  useViewTransitionState
} from "./chunk-UBTZC3LN.js";
import {
  __toESM,
  require_react
} from "./chunk-JRE55LYH.js";

// node_modules/react-router/dist/development/dom-export.mjs
var React = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var React2 = __toESM(require_react(), 1);
function RouterProvider2(props) {
  return React.createElement(RouterProvider, { flushSync: ReactDOM.flushSync, ...props });
}
var ssrInfo = null;
var router = null;
function initSsrInfo() {
  if (!ssrInfo && window.__reactRouterContext && window.__reactRouterManifest && window.__reactRouterRouteModules) {
    if (window.__reactRouterManifest.sri === true) {
      const importMap = document.querySelector("script[rr-importmap]");
      if (importMap == null ? void 0 : importMap.textContent) {
        try {
          window.__reactRouterManifest.sri = JSON.parse(
            importMap.textContent
          ).integrity;
        } catch (err) {
          console.error("Failed to parse import map", err);
        }
      }
    }
    ssrInfo = {
      context: window.__reactRouterContext,
      manifest: window.__reactRouterManifest,
      routeModules: window.__reactRouterRouteModules,
      stateDecodingPromise: void 0,
      router: void 0,
      routerInitialized: false
    };
  }
}
function createHydratedRouter({
  unstable_getContext
}) {
  var _a, _b;
  initSsrInfo();
  if (!ssrInfo) {
    throw new Error(
      "You must be using the SSR features of React Router in order to skip passing a `router` prop to `<RouterProvider>`"
    );
  }
  let localSsrInfo = ssrInfo;
  if (!ssrInfo.stateDecodingPromise) {
    let stream = ssrInfo.context.stream;
    invariant(stream, "No stream found for single fetch decoding");
    ssrInfo.context.stream = void 0;
    ssrInfo.stateDecodingPromise = decodeViaTurboStream(stream, window).then((value) => {
      ssrInfo.context.state = value.value;
      localSsrInfo.stateDecodingPromise.value = true;
    }).catch((e) => {
      localSsrInfo.stateDecodingPromise.error = e;
    });
  }
  if (ssrInfo.stateDecodingPromise.error) {
    throw ssrInfo.stateDecodingPromise.error;
  }
  if (!ssrInfo.stateDecodingPromise.value) {
    throw ssrInfo.stateDecodingPromise;
  }
  let routes = createClientRoutes(
    ssrInfo.manifest.routes,
    ssrInfo.routeModules,
    ssrInfo.context.state,
    ssrInfo.context.ssr,
    ssrInfo.context.isSpaMode
  );
  let hydrationData = void 0;
  if (ssrInfo.context.isSpaMode) {
    let { loaderData } = ssrInfo.context.state;
    if (((_a = ssrInfo.manifest.routes.root) == null ? void 0 : _a.hasLoader) && loaderData && "root" in loaderData) {
      hydrationData = {
        loaderData: {
          root: loaderData.root
        }
      };
    }
  } else {
    hydrationData = getHydrationData(
      ssrInfo.context.state,
      routes,
      (routeId) => {
        var _a2, _b2, _c;
        return {
          clientLoader: (_a2 = ssrInfo.routeModules[routeId]) == null ? void 0 : _a2.clientLoader,
          hasLoader: ((_b2 = ssrInfo.manifest.routes[routeId]) == null ? void 0 : _b2.hasLoader) === true,
          hasHydrateFallback: ((_c = ssrInfo.routeModules[routeId]) == null ? void 0 : _c.HydrateFallback) != null
        };
      },
      window.location,
      (_b = window.__reactRouterContext) == null ? void 0 : _b.basename,
      ssrInfo.context.isSpaMode
    );
    if (hydrationData && hydrationData.errors) {
      hydrationData.errors = deserializeErrors2(hydrationData.errors);
    }
  }
  let router2 = createRouter({
    routes,
    history: createBrowserHistory(),
    basename: ssrInfo.context.basename,
    unstable_getContext,
    hydrationData,
    hydrationRouteProperties,
    mapRouteProperties,
    future: {
      unstable_middleware: ssrInfo.context.future.unstable_middleware
    },
    dataStrategy: getTurboStreamSingleFetchDataStrategy(
      () => router2,
      ssrInfo.manifest,
      ssrInfo.routeModules,
      ssrInfo.context.ssr,
      ssrInfo.context.basename
    ),
    patchRoutesOnNavigation: getPatchRoutesOnNavigationFunction(
      ssrInfo.manifest,
      ssrInfo.routeModules,
      ssrInfo.context.ssr,
      ssrInfo.context.routeDiscovery,
      ssrInfo.context.isSpaMode,
      ssrInfo.context.basename
    )
  });
  ssrInfo.router = router2;
  if (router2.state.initialized) {
    ssrInfo.routerInitialized = true;
    router2.initialize();
  }
  router2.createRoutesForHMR = /* spacer so ts-ignore does not affect the right hand of the assignment */
  createClientRoutesWithHMRRevalidationOptOut;
  window.__reactRouterDataRouter = router2;
  return router2;
}
function HydratedRouter(props) {
  if (!router) {
    router = createHydratedRouter({
      unstable_getContext: props.unstable_getContext
    });
  }
  let [criticalCss, setCriticalCss] = React2.useState(
    true ? ssrInfo == null ? void 0 : ssrInfo.context.criticalCss : void 0
  );
  if (true) {
    if (ssrInfo) {
      window.__reactRouterClearCriticalCss = () => setCriticalCss(void 0);
    }
  }
  let [location, setLocation] = React2.useState(router.state.location);
  React2.useLayoutEffect(() => {
    if (ssrInfo && ssrInfo.router && !ssrInfo.routerInitialized) {
      ssrInfo.routerInitialized = true;
      ssrInfo.router.initialize();
    }
  }, []);
  React2.useLayoutEffect(() => {
    if (ssrInfo && ssrInfo.router) {
      return ssrInfo.router.subscribe((newState) => {
        if (newState.location !== location) {
          setLocation(newState.location);
        }
      });
    }
  }, [location]);
  invariant(ssrInfo, "ssrInfo unavailable for HydratedRouter");
  useFogOFWarDiscovery(
    router,
    ssrInfo.manifest,
    ssrInfo.routeModules,
    ssrInfo.context.ssr,
    ssrInfo.context.routeDiscovery,
    ssrInfo.context.isSpaMode
  );
  return (
    // This fragment is important to ensure we match the <ServerRouter> JSX
    // structure so that useId values hydrate correctly
    React2.createElement(React2.Fragment, null, React2.createElement(
      FrameworkContext.Provider,
      {
        value: {
          manifest: ssrInfo.manifest,
          routeModules: ssrInfo.routeModules,
          future: ssrInfo.context.future,
          criticalCss,
          ssr: ssrInfo.context.ssr,
          isSpaMode: ssrInfo.context.isSpaMode,
          routeDiscovery: ssrInfo.context.routeDiscovery
        }
      },
      React2.createElement(RemixErrorBoundary, { location }, React2.createElement(RouterProvider2, { router }))
    ), React2.createElement(React2.Fragment, null))
  );
}
export {
  Await,
  BrowserRouter,
  Form,
  HashRouter,
  HydratedRouter,
  IDLE_BLOCKER,
  IDLE_FETCHER,
  IDLE_NAVIGATION,
  Link,
  Links,
  MemoryRouter,
  Meta,
  NavLink,
  Navigate,
  Action as NavigationType,
  Outlet,
  PrefetchPageLinks,
  Route,
  Router,
  RouterProvider2 as RouterProvider,
  Routes,
  Scripts,
  ScrollRestoration,
  ServerRouter,
  StaticRouter,
  StaticRouterProvider,
  DataRouterContext as UNSAFE_DataRouterContext,
  DataRouterStateContext as UNSAFE_DataRouterStateContext,
  ErrorResponseImpl as UNSAFE_ErrorResponseImpl,
  FetchersContext as UNSAFE_FetchersContext,
  FrameworkContext as UNSAFE_FrameworkContext,
  LocationContext as UNSAFE_LocationContext,
  NavigationContext as UNSAFE_NavigationContext,
  RemixErrorBoundary as UNSAFE_RemixErrorBoundary,
  RouteContext as UNSAFE_RouteContext,
  ServerMode as UNSAFE_ServerMode,
  SingleFetchRedirectSymbol as UNSAFE_SingleFetchRedirectSymbol,
  ViewTransitionContext as UNSAFE_ViewTransitionContext,
  createBrowserHistory as UNSAFE_createBrowserHistory,
  createClientRoutes as UNSAFE_createClientRoutes,
  createClientRoutesWithHMRRevalidationOptOut as UNSAFE_createClientRoutesWithHMRRevalidationOptOut,
  createRouter as UNSAFE_createRouter,
  decodeViaTurboStream as UNSAFE_decodeViaTurboStream,
  deserializeErrors2 as UNSAFE_deserializeErrors,
  getHydrationData as UNSAFE_getHydrationData,
  getPatchRoutesOnNavigationFunction as UNSAFE_getPatchRoutesOnNavigationFunction,
  getTurboStreamSingleFetchDataStrategy as UNSAFE_getTurboStreamSingleFetchDataStrategy,
  hydrationRouteProperties as UNSAFE_hydrationRouteProperties,
  invariant as UNSAFE_invariant,
  mapRouteProperties as UNSAFE_mapRouteProperties,
  shouldHydrateRouteLoader as UNSAFE_shouldHydrateRouteLoader,
  useFogOFWarDiscovery as UNSAFE_useFogOFWarDiscovery,
  useScrollRestoration as UNSAFE_useScrollRestoration,
  createBrowserRouter,
  createCookie,
  createCookieSessionStorage,
  createHashRouter,
  createMemoryRouter,
  createMemorySessionStorage,
  createPath,
  createRequestHandler,
  createRoutesFromChildren,
  createRoutesFromElements,
  createRoutesStub,
  createSearchParams,
  createSession,
  createSessionStorage,
  createStaticHandler2 as createStaticHandler,
  createStaticRouter,
  data,
  generatePath,
  href,
  isCookie,
  isRouteErrorResponse,
  isSession,
  matchPath,
  matchRoutes,
  parsePath,
  redirect,
  redirectDocument,
  renderMatches,
  replace,
  resolvePath,
  HistoryRouter as unstable_HistoryRouter,
  unstable_RouterContextProvider,
  unstable_createContext,
  setDevServerHooks as unstable_setDevServerHooks,
  usePrompt as unstable_usePrompt,
  useActionData,
  useAsyncError,
  useAsyncValue,
  useBeforeUnload,
  useBlocker,
  useFetcher,
  useFetchers,
  useFormAction,
  useHref,
  useInRouterContext,
  useLinkClickHandler,
  useLoaderData,
  useLocation,
  useMatch,
  useMatches,
  useNavigate,
  useNavigation,
  useNavigationType,
  useOutlet,
  useOutletContext,
  useParams,
  useResolvedPath,
  useRevalidator,
  useRouteError,
  useRouteLoaderData,
  useRoutes,
  useSearchParams,
  useSubmit,
  useViewTransitionState
};
/*! Bundled license information:

react-router/dist/development/dom-export.mjs:
  (**
   * react-router v7.6.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/index.mjs:
  (**
   * react-router-dom v7.6.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=react-router-dom.js.map
