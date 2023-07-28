import { Link, useParams } from "react-router-dom"
import data from '../../../data/data.json'

type Product = {
  id    : number
  name  : string
  price : number
}

export const DetailOfProduct : React.FC = () => {
  const param = useParams()
  const obj : Product = data.filter(item => item.id == parseInt(param.id!))[0]
  return (
    <div>
      <ul>
        <li>ID: {obj.id}</li>
        <li>Product Name: {obj.name}</li>
        <li>Product Price: {obj.price}</li>
      </ul>
      <Link to="/products">Return to List of Product</Link>
    </div>
  )
}