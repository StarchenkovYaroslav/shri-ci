import { FC } from "react";
import { Helmet } from "react-helmet";

export const About: FC = () => {
  return (
    <>
      <Helmet>
        <title>About page</title>
      </Helmet>
      <h1 data-testid="page-title">About</h1>
      <div>Hello, my dear-dear!</div>
      <p>This is an example application.</p>
    </>
  );
};
