import { useGetCategoriesQuery, useGetItemsQuery } from '@/graphql/generated';
import { AiOutlinePlus } from 'react-icons/ai';

const Items = () => {
  const { data: categoriesData } = useGetCategoriesQuery();
  const { data: itemsData, loading, error } = useGetItemsQuery();

  if (loading) return <div>Loading..</div>;
  if (error) return <div>{JSON.stringify(error)}</div>;

  return (
    <div className="px-10 py-4">
      {categoriesData?.getCategories.map((category) => {
        if (
          !itemsData?.getItems.find((item) => item.category === category.name)
        )
          return;

        return (
          <div key={category.id} className="mt-1">
            <h1 className="mb-1 text-xl">{category.name}</h1>
            <div className="flex flex-wrap align-start">
              {itemsData?.getItems
                .filter((item) => item.category === category.name)
                .map((item) => (
                  <div
                    className="flex items-center justify-center bg-white px-4 py-2 shadow-lg rounded-xl mr-4 my-4 whitespace-nowrap
                    transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer"
                    key={item.id}
                  >
                    <span className="mr-2">{item.name}</span>
                    <AiOutlinePlus className="hover:bg-gray-200 p-1 transition duration-300 ease-in-out w-6 h-6 rounded-full" />
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
