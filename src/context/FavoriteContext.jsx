import { createContext, useState } from "react";


export const FavoriteContext = createContext()


const FavoriteProvider = ({children}) => {
	const total = JSON.parse(localStorage.getItem('favoriteItems'))?.length
	const [favoriteLength, setFavoriteLength] = useState(total || 0)

  return (
	 <FavoriteContext.Provider value={{favoriteLength, setFavoriteLength}}>
		{children}
	 </FavoriteContext.Provider>
  )
}

export default FavoriteProvider
