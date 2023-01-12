import Board from "./Board.js";
import btnHome from "./btnHome.js";
import { ButtonRounded } from "./ButtonRounded.js";
import ContainerResults from "./ContainerResults.js";
import Rules from "./Rules.js";

// Data
import { infoBtn } from "../helpers/btnInfo.js";

export default function Original(props) {
  const d = document,
    $original = d.createElement("section"),
    $originalOptions = d.createElement("div"),
    $containerBtns = d.createElement("div"),
    { game, limit, personalClass, againClass } = props;

  $original.innerHTML = "";

  $original.classList.add("mt-6", "container", "mx-auto");
  $originalOptions.classList.add(
    "relative",
    "bg-triangle",
    "mx-auto",
    "my-10",
    "grid",
    "grid-cols-2",
    "gap-y-4",
    "bg-bg-triangle",
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
  copyInfoBtn[0].extraClasses = ["mx-auto", "btn-option-game"];
  copyInfoBtn[1].extraClasses = ["col-span-2", "mx-auto", "btn-option-game"];
  copyInfoBtn[2].extraClasses = ["mx-auto", "btn-option-game"];

  const $paper = ButtonRounded(copyInfoBtn[0]);
  const $rock = ButtonRounded(copyInfoBtn[1]);
  const $scissors = ButtonRounded(copyInfoBtn[2]);

  $originalOptions.appendChild($paper);
  $originalOptions.appendChild($scissors);
  $originalOptions.appendChild($rock);

  $containerBtns.appendChild(btnHome());
  $containerBtns.appendChild(
    Rules({ img: "./app/assets/images/image-rules.svg" })
  );

  $original.appendChild(
    Board({
      icon: "./app/assets/images/logo.svg",
      alt: "Original Icon",
      game,
    })
  );
  $original.appendChild($originalOptions);
  $original.appendChild($containerBtns);

  d.addEventListener("click", (e) => {
    if (
      e.target.matches(".btn-option-game") ||
      e.target.matches(".btn-option-game *")
    ) {
      const id = parseInt(e.target.getAttribute("data-id"));
      console.log("Creando");
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
        $original.innerHTML = "";
        $original.appendChild(
          Board({
            icon: "./app/assets/images/logo.svg",
            alt: "Original Icon",
            game,
          })
        );
        $original.appendChild($containerResults);
        $original.appendChild($containerBtns);
      }, 500);
    }

    if (e.target.matches(`.${againClass}`)) {
      $original.innerHTML = "";
      $original.appendChild(
        Board({
          icon: "./app/assets/images/logo.svg",
          alt: "Original Icon",
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
