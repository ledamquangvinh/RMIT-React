import { JSXElementConstructor, ReactElement } from "react";
import { Product } from "../../../model/Product";
import ProductCategoryRow from "../ProductCategoryRow";
import ProductRow from "../ProductRow";

interface Props {
  products: Product[]
  filterText: string
  inStockOnly: boolean
}

const ProductTable : React.FC<Props> = (props: Props) => {
  const rows : ReactElement<any, string |JSXElementConstructor<any>>[] = []
  let lastCategory : string | null = null

  props.products.forEach((product) => {
    if(product.Name.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1)
      return

    if(props.inStockOnly != product.Stocked)
      return

    if(product.Category !== lastCategory) 
      rows.push(<ProductCategoryRow category={product.Category} key={product.Category}/>)

    rows.push(<ProductRow product={product} key={product.Name}/>)
    lastCategory = product.Category
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default ProductTable