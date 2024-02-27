import { createContext, useState } from "react";

export const AddedItemContext = createContext()

const AddedItemProvider = ({children}) => {
	const [addedItem, setAddedItem] = useState(null)
	const [display, setDisplay] = useState(false)
	const [errorModal, setErrorModal] = useState(false)

  return (
	 <AddedItemContext.Provider value={{addedItem, setAddedItem, display, setDisplay, errorModal, setErrorModal}}>
		{children}
	 </AddedItemContext.Provider>
  )
}

export default AddedItemProvider
