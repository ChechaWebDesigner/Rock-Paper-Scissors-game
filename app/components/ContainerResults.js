//Data
import { infoBtn } from "../helpers/btnInfo.js";
//
import { ButtonRounded } from "./ButtonRounded.js";
import random from "../helpers/random.js";
import BtnPlayAgain from "./BtnPlayAgain.js";
import BtnResetScore from "./BtnResetScore.js";

export default function ContainerResults(props) {
  const d = document,
    $containerResults = d.createElement("div"),
    $titleUser = d.createElement("h4"),
    $titleMachine = d.createElement("h4"),
    $emptyMachine = d.createElement("div"),
    $square1 = d.createElement("div"),
    $square2 = d.createElement("div"),
    $square3 = d.createElement("div"),
    { id, game, limit, personalClass, againClass } = props,
    $btnPlayAgain = BtnPlayAgain({ againClass });

  const copyInfoBtn = JSON.parse(JSON.stringify(infoBtn));
  const option = copyInfoBtn.find((btn) => btn.id === id);
  option.size = "btn-mode-inside-circle-big";

  const $option = ButtonRounded(option);

  $containerResults.classList.add(
    personalClass,
    "grid",
    "grid-cols-2",
    "my-10",
    "mx-auto",
    "animate-hi",
    "w-full",
    "sm:grid-cols-3",
    "lg:w-3/4"
  );

  $emptyMachine.classList.add(
    "btn-mode-empty",
    "bg-[#0002]",
    "rounded-full",
    "animate-bye-enemy"
  );

  $titleUser.textContent = "YOU PICKED";
  $titleUser.classList.add("txt-player");
  $titleMachine.textContent = "THE HOUSE PICKED";
  $titleMachine.classList.add("txt-player");

  $square1.classList.add(
    "flex",
    "flex-col",
    "justify-between",
    "items-center",
    "p-4",
    "sm:order-1",
    "sm:flex-col-reverse"
  );
  $square2.classList.add(
    "flex",
    "flex-col",
    "justify-between",
    "items-center",
    "p-4",
    "sm:order-3",
    "sm:flex-col-reverse"
  );
  $square3.classList.add(
    "col-span-2",
    "text-center",
    "sm:order-2",
    "sm:col-span-1",
    "flex",
    "flex-col",
    "justify-center",
    "items-center"
  );

  $square1.appendChild($option);
  $square1.appendChild($titleUser);

  $square2.appendChild($emptyMachine);
  $square2.appendChild($titleMachine);

  $square3.appendChild($btnPlayAgain);
  $square3.appendChild(BtnResetScore({ game }));

  $containerResults.appendChild($square1);
  $containerResults.appendChild($square2);
  $containerResults.appendChild($square3);

  // Result
  const number = random(1, limit),
    rival = copyInfoBtn[number - 1];

  let score = parseInt(localStorage.getItem(game)) || 0;

  rival.size = "btn-mode-inside-circle-big";
  const $rival = ButtonRounded(rival);

  let $msgResult = d.createElement("h4");
  $msgResult.classList.add(
    "uppercase",
    "text-white",
    "text-3xl",
    "sm:text-5xl"
  );

  setTimeout(() => {
    if (number === id) {
      $msgResult.textContent = "Tie";
      $option.classList.add("bg-win");
      $rival.classList.add("bg-win");
      $rival.classList.add("animate-hi-enemy");
      $square2.replaceChild($rival, $emptyMachine);

      $square3.insertAdjacentElement("afterbegin", $msgResult);
      return;
    }
    if (rival.beats.includes(option.id)) {
      $msgResult.textContent = "You lose";
      $rival.classList.add("bg-win");
      score -= 1;
      localStorage.setItem(game, score);
      d.querySelector(".score-value").textContent = score;

      $rival.classList.add("animate-hi-enemy");
      $square2.replaceChild($rival, $emptyMachine);

      $square3.insertAdjacentElement("afterbegin", $msgResult);

      return;
    }

    $msgResult.textContent = "You win";
    $option.classList.add("bg-win");
    score += 1;
    localStorage.setItem(game, score);
    d.querySelector(".score-value").textContent = score;

    $rival.classList.add("animate-hi-enemy");
    $square2.replaceChild($rival, $emptyMachine);

    $square3.insertAdjacentElement("afterbegin", $msgResult);
  }, 1000);

  return $containerResults;
}
