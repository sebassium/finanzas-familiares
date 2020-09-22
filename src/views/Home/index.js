import React, { Fragment } from "react";
import { Header, Values, Description, Footer, MoreDescription } from "./components";

export default () => {
  return (
    <Fragment>
      <Header />
      <Description />
      <MoreDescription />
      <Values />
      <Footer />
    </Fragment>
  );
};
