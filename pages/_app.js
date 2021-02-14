import { ChakraProvider } from "@chakra-ui/react"
import { AuthProvider } from '@/lib/auth';
import { MDXProvider } from '@mdx-js/react';

import MDXComponents from '@/components/MDXComponents';
import GlobalStyle from "@/styles/GlobalStyle";
import theme from "@/styles/theme";


const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme} >
      <AuthProvider>
        <MDXProvider components={MDXComponents}>
          <GlobalStyle />
          <Component {...pageProps} />
        </MDXProvider>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
