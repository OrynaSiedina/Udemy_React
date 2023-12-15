import {Header,Meals,Cart} from "./components";
import CartContextProvider from "./components/store/CartContext";
import UserProgressContext from "./components/store/UserProgress"

function App() {
  return (
    <UserProgressContext>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart/>
      </CartContextProvider>
    </UserProgressContext>
  );
}

export default App;
