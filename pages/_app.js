// import "semantic-ui-css/semantic.min.css";
import "../styles/global.css";
import { MantineProvider } from "@mantine/core";

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
