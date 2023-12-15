import {Header,Meals,Cart,Checkout} from "./components";
import CartContextProvider from "./components/store/CartContext";
import UserProgressContext from "./components/store/UserProgress"

function App() {
  return (
    <UserProgressContext>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart/>
        <Checkout/>
      </CartContextProvider>
    </UserProgressContext>
  );
}

export default App;
