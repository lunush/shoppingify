import { useGetItemsQuery } from '@/graphql/generated';
import Head from 'next/head';

const Home = () => {
  const { data, loading, error } = useGetItemsQuery();

  if (loading) return <div>Loading..</div>;
  if (error) return <div>{JSON.stringify(error)}</div>;

  console.log(data);
  return (
    <div>
      <Head>
        <title>Shoppingify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Shoppingify</div>
      <div>
        {data?.getItems.map((item) => (
          <div>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
