import { useGetItemsQuery } from '@/graphql/generated';

const Home = () => {
  const { data, loading, error } = useGetItemsQuery();

  if (loading) return <div>Loading..</div>;
  if (error) return <div>{JSON.stringify(error)}</div>;

  return (
    <div>
      {data?.getItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default Home;
