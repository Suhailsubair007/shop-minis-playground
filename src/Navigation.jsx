import { TransitionLink } from "@shopify/shop-minis-react";

export default function Navigation() {
  return (
    <nav>
      <TransitionLink to="/">Home</TransitionLink>
      <TransitionLink to="/cart">Cart</TransitionLink>
    </nav>
  );
}
