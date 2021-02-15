import { ChakraProvider } from "@chakra-ui/react"
import { AuthProvider } from '@/lib/auth';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';

import MDXComponents from '@/components/MDXComponents';
import GlobalStyle from "@/styles/GlobalStyle";
import theme from "@/styles/theme";

import SEO from '../next-seo.config';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme} >
      <AuthProvider>
        <MDXProvider components={MDXComponents}>
          <DefaultSeo {...SEO} />
          <GlobalStyle />
          <Component {...pageProps} />
        </MDXProvider>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
