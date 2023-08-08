import Product from "../components/Product";

import { posts } from "../data";

const Home = () => {
  // const API_URL = "https://fakestoreapi.com/products";

  return (
    <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
      {posts.length > 0 ? (
        posts.map((post) => <Product post={post} />)
      ) : (
        <div className="flex justify-center items-center text-red-950">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
