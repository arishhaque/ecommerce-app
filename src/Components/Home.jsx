import ProductsPage from '../Pages/Products/ProductsPage';
import Filters from '../Pages/Filters/FiltersPage';

function Home() {
  return (
    <>
      <div className="main-container">
        <Filters />
        <ProductsPage />
      </div>
    </>
  )
}

export default Home;
