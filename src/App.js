import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart, Checkout, AdoptionPage } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [toyProducts, setToyProducts] = useState([]);
  const [foodProducts, setFoodProducts] = useState([]);
  const [medicinalProducts, setMedicinalProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchToyProducts = async () => {
    const { data: products } = await commerce.products.list({
      category_slug: "TOYS",
    });

    setToyProducts(products);
  };

  const fetchFoodProducts = async () => {
    const { data: products } = await commerce.products.list({
      category_slug: "FOOD",
    });
    setFoodProducts(products);
  };

  const fetchMedicineProducts = async () => {
    const { data: products } = await commerce.products.list({
      category_slug: "MEDICINE",
    });
    setMedicinalProducts(products);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchToyProducts();
    fetchFoodProducts();
    fetchMedicineProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products
              products={products}
              onAddToCart={handleAddToCart}
              category="all"
            />
          </Route>

          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
          <Route exact path="/toys">
            <Products
              products={toyProducts}
              onAddToCart={handleAddToCart}
              category="toys"
            />
          </Route>
          <Route exact path="/food">
            <Products
              products={foodProducts}
              onAddToCart={handleAddToCart}
              category="food"
            />
          </Route>
          <Route exact path="/Adoption" component={AdoptionPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
