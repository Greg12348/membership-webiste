import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import { studioTheme } from "../ui-components";
import { ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter";

import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={studioTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;


