import React, { createContext, useContext, useState } from 'react'

const FavouritesContext = createContext(null)

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([])

  const addFavourite = (restaurant) => {
    setFavourites(prev =>
      prev.find(r => r.id === restaurant.id) ? prev : [...prev, restaurant]
    )
  }

  const removeFavourite = (id) => {
    setFavourites(prev => prev.filter(r => r.id !== id))
  }

  const isFavourite = (id) => favourites.some(r => r.id === id)

  const toggleFavourite = (restaurant) => {
    isFavourite(restaurant.id)
      ? removeFavourite(restaurant.id)
      : addFavourite(restaurant)
  }

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite, isFavourite, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  )
}

export function useFavourites() {
  const ctx = useContext(FavouritesContext)
  if (!ctx) throw new Error('useFavourites must be inside FavouritesProvider')
  return ctx
}