import Board from "./Board.js";
import btnHome from "./btnHome.js";
import { ButtonRounded } from "./ButtonRounded.js";
import ContainerResults from "./ContainerResults.js";
import Rules from "./Rules.js";

// Data
import { infoBtn } from "../helpers/btnInfo.js";

export default function Bonus(props) {
  const d = document,
    $original = d.createElement("section"),
    $originalOptions = d.createElement("div"),
    $containerBtns = d.createElement("div"),
    { game, limit, personalClass, againClass } = props;

  $original.classList.add("mt-6", "container", "mx-auto");
  $originalOptions.classList.add(
    "relative",
    "bg-pentagon",
    "mx-auto",
    "my-10",
    "grid",
    "grid-cols-2",
    "gap-y-4",
    "bg-bg-pentagon",
    "bg-center",
    "bg-no-repeat",
    "w-72",
    "sm:w-[32rem]"
  );

  $containerBtns.classList.add(
    "flex",
    "flex-wrap",
    "gap-6",
    "justify-between",
    "px-4",
    "sm:text-right"
  );

  const copyInfoBtn = JSON.parse(JSON.stringify(infoBtn));
  copyInfoBtn[0].extraClasses = ["ml-auto", "mb-4", "btn-option-game-bonus"];
  copyInfoBtn[1].extraClasses = ["mx-auto", "btn-option-game-bonus"];
  copyInfoBtn[2].extraClasses = [
    "mx-auto",
    "btn-option-game-bonus",
    "col-span-2",
  ];
  copyInfoBtn[3].extraClasses = ["mx-auto", "btn-option-game-bonus"];
  copyInfoBtn[4].extraClasses = ["btn-option-game-bonus", "mb-4"];

  const $paper = ButtonRounded(copyInfoBtn[0]);
  const $rock = ButtonRounded(copyInfoBtn[1]);
  const $scissors = ButtonRounded(copyInfoBtn[2]);
  const $lizard = ButtonRounded(copyInfoBtn[3]);
  const $spock = ButtonRounded(copyInfoBtn[4]);

  $originalOptions.appendChild($scissors);
  $originalOptions.appendChild($spock);
  $originalOptions.appendChild($paper);
  $originalOptions.appendChild($lizard);
  $originalOptions.appendChild($rock);

  $containerBtns.appendChild(btnHome("btn-play-again-bonus"));
  $containerBtns.appendChild(
    Rules({ img: "./app/assets/images/image-rules-bonus.svg" })
  );

  $original.appendChild(
    Board({
      icon: "./app/assets/images/logo-bonus.svg",
      alt: "Bonus Icon",
      game,
    })
  );
  $original.appendChild($originalOptions);
  $original.appendChild($containerBtns);

  d.addEventListener("click", (e) => {
    if (
      e.target.matches(".btn-option-game-bonus") ||
      e.target.matches(".btn-option-game-bonus *")
    ) {
      const id = parseInt(e.target.getAttribute("data-id"));
      // console.log(id);
      const $containerResults = ContainerResults({
        id,
        game,
        limit,
        personalClass,
        againClass,
      });

      $originalOptions.classList.remove("animate-hi");
      $originalOptions.classList.add("animate-bye");

      setTimeout(() => {
        setTimeout(() => {
          $original.innerHTML = "";
          $original.appendChild(
            Board({
              icon: "./app/assets/images/logo-bonus.svg",
              alt: "Bonus Icon",
              game,
            })
          );
          $original.appendChild($containerResults);
          $original.appendChild($containerBtns);
        }, 500);
      }, 500);
    }

    if (e.target.matches(`.${againClass}`)) {
      $original.innerHTML = "";
      $original.appendChild(
        Board({
          icon: "./app/assets/images/logo-bonus.svg",
          alt: "Bonus Icon",
          game,
        })
      );
      $originalOptions.classList.remove("animate-bye");
      $originalOptions.classList.add("animate-hi");
      $original.appendChild($originalOptions);
      $original.appendChild($containerBtns);
    }
  });

  return $original;
}
