import Header from "./components/Layout/Header";
import Items from "./components/Groceries/Items";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Items />
      </main>
    </>
  );
}

export default App;
