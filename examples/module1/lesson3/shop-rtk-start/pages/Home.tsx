import { useEffect } from 'react';
import Product from '../components/Product';
import { fetchProducts } from '../state/productSlice';
import { useAppDispatch } from '../hooks/rtk';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Home = () => {
  const dispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.products);

  useEffect(() => {
    void dispatch(fetchProducts());
  }, [dispatch]);

  if (products.loading) {
    return <p>Loading...</p>;
  }

  if (products.error) {
    return <p>Error: {products.error}</p>;
  }

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Explore Our Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.items.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
