import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import theme from '@/lib/theme';
import fontFace from '@/lib/fontface';
import type { AppProps } from 'next/app';
import seo from 'site.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seo} />
      <ChakraProvider theme={theme}>
        <Global styles={fontFace} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
