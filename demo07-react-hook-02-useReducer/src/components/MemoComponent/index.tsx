import {createContext, useContext, useMemo, useState} from 'react'


type ComplexObject = {
  kind : string
}

const Context = createContext<ComplexObject | null>(null)

const useComplexObject = () => {
  const object = useContext(Context)
  if(!object) {throw new Error("useGetComplexObject must be used within a Provider")}
  return object
}

const MyComponent = () => {
  const object = useComplexObject();

  return(
    <div>
      <p>Current object: {object.kind}</p>
    </div>
  )
}

const MemoComponent : React.FC = () => {
  const object = useMemo(() => ({kind:"Object"}), [])

  return(
    <Context.Provider value={object}>

    </Context.Provider>
  )
}

export default MemoComponent