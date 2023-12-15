import React, { useState } from 'react'
import { createContext } from 'react'

export const UserProgressContext = createContext({
  progress:'',
  showCart:()=>{},
  hideCart:()=>{},
  showCheckout:()=>{},
  hideCheckout:()=>{},
})
const UserProgressContextProvider = ({children}) => {
  const [userProgress, setUserProgress] = useState({})
  function showCart() {
    setUserProgress({progress: 'cart'})
  }
  function hideCart() {
    setUserProgress({progress: ''})
  }
  function showCheckout() {
    setUserProgress({progress: 'checkout'})
  }
  function hideCheckout() {
    setUserProgress({progress: ''})
  }

  const userProgressCtx = {
    progress: userProgress.progress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  }
  return <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
}

export default UserProgressContextProvider
