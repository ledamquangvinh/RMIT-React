import { Link } from "react-router-dom"

export const CreateProduct : React.FC = () => {
  return(
    <form action="#">
      <h1>Create new Product Information</h1>
      <fieldset>
        <legend>Product Information</legend>
        <div>
          <label>Product name</label>
          <input type="text" placeholder="Enter product name"/>
        </div>

        <div>
          <label>Product Price</label>
          <input type="number" placeholder="Enter product price"/>
        </div>

        <div>
          <button type="button">Submit</button>
          <Link to="/products">Cancel</Link>
        </div>
      </fieldset>
    </form>
  )
}