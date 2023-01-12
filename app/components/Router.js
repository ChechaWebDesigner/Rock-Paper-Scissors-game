import Bonus from "./Bonus.js";
import Home from "./Home.js";
import Original from "./Orginal.js";

export default function Router() {
  const { hash } = location,
    $root = document.getElementById("root");

  if (hash === "#/original") {
    $root.appendChild(
      Original({
        againClass: "btn-play-again-original",
        game: "scoreOriginal",
        limit: 3,
        personalClass: "container-results-original",
      })
    );
  } else if (hash === "#/bonus") {
    $root.appendChild(
      Bonus({
        againClass: "btn-play-again-bonus",
        game: "scoreBonus",
        limit: 5,
        personalClass: "container-results-bonus",
      })
    );
  } else {
    $root.appendChild(Home());
  }
}
