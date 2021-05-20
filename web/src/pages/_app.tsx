import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Layout from '@/components/Layout';

const client = new ApolloClient({
  uri: 'http://localhost:4040/graphql',
  cache: new InMemoryCache(),
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
