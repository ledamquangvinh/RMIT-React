import { Dispatch, SetStateAction } from "react"

interface Props {
  filtertText : string
  inStockOnly : boolean
  onFilterTextChange : Dispatch<SetStateAction<string>>
  onInStockOnlyChange : Dispatch<SetStateAction<boolean>>
}

const SearchBar : React.FC<Props> = (props : Props) => {
  return (
    <>
      <form>
        <input type="text" value={props.filtertText} placeholder="Search..." onChange={(e) => props.onFilterTextChange(e.target.value)}/>
        <br/>
        <label>
          <input type="checkbox" checked={props.inStockOnly} onChange={(e) => props.onInStockOnlyChange(e.target.checked)}/>
          {" "}
          Only Show The Product InStock
        </label>
      </form>
    </>
  )
}

export default SearchBar