import { Link, Route, Routes} from 'react-router-dom'
import { ListOfProduct } from './ListOfProduct'
import { DetailOfProduct } from './DetailOfProduct'
import { CreateProduct } from './CreateProduct'

import './style.sass'

export const Products : React.FC = () => {
  return(
    <div className='product'>
      <h2>Product Management</h2>
      <Link to="new">Create New</Link>
      <Routes>
        <Route index element={ <ListOfProduct /> }/>
        <Route path=":id"  element= { <DetailOfProduct /> }/>
        <Route path="new" element={ <CreateProduct/> } />
      </Routes>
    </div>
  )
  }