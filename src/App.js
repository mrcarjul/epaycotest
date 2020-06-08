import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Cargando...</div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
const Page404 = React.lazy(() => import("./views/Pages/Page404"));

function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route
            exact
            path="/404"
            name="Page 404"
            render={(props) => <Page404 {...props} />}
          />
          <Route
            path="/"
            name="Home"
            render={(props) => <DefaultLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
