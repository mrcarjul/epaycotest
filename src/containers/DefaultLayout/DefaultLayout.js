import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";

import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarMinimizer,
  AppSidebarNav2 as AppSidebarNav,
  AppSidebarToggler,
} from "@coreui/react";
// sidebar nav config
import navigation from "../../_nav";
// routes config
import routes from "../../routes";

const DefaultFooter = React.lazy(() => import("./DefaultFooter"));

function DefaultLayout(props) {
  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  return (
    <div className="app">
      <div className="app-body">
        <AppSidebar fixed display="lg">
          <AppSidebarForm />
          <Suspense>
            <AppSidebarNav navConfig={navigation} {...props} router={router} />
          </Suspense>
          <AppSidebarFooter />
          <AppSidebarMinimizer />
        </AppSidebar>
        <main className="main">
          <AppHeader>
            <AppSidebarToggler className="d-lg-none" display="md" mobile />
          </AppHeader>
          <Container fluid>
            <Suspense fallback={loading()}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props) => <route.component {...props} />}
                    />
                  ) : null;
                })}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Suspense>
          </Container>
        </main>
      </div>
      <AppFooter>
        <Suspense fallback={loading()}>
          <DefaultFooter />
        </Suspense>
      </AppFooter>
    </div>
  );
}

export default DefaultLayout;
