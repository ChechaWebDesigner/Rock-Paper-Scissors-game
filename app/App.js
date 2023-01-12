import Router from "./components/Router.js";

export default function App() {
  const $root = document.getElementById("root");

  while ($root.hasChildNodes()) {
    $root.removeChild($root.lastChild);
  }

  Router();
}
