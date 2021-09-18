//----------------------------------------------------------------
// ivfe - > immediately invoked function expression <--> only called once

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push(product, quantity);
    console.log(
      `${quantity} ${product} added to the cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4); // will also print the shippingCost because of closures! a function natively has access to all the variables that were present at the functions birthplace!
ShoppingCart2.addToCart('pizza', 2);

console.log(ShoppingCart2);

console.log(ShoppingCart.shippingCost); // not defined because the variable is private
