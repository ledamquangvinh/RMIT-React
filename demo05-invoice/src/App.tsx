import './App.sass'
import FilterableProductTable from './components/FilterableProductTable'
import { Product } from './model/Product.ts'
import data from './data/data.json'

const PRODUCTS: Product[] = data.map(item => new Product(item.category, item.price, item.stocked, item.name))

const App : React.FC = () => {
  return (
    <FilterableProductTable products={PRODUCTS} />
  )
}

export default App
