import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

/*
  In task using functions are required,
    but creating Custom Document as FC doesn't described in NextJS documentation.
  And creating Custom Document is a fix for using styled-components,
    as I can guess from the solution on medium.com.
*/
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
