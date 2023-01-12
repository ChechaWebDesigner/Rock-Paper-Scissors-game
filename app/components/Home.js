import { ButtonRounded } from "./ButtonRounded.js";

export default function Home() {
  const d = document,
    $home = d.createElement("section"),
    $title = d.createElement("h2"),
    $containerModes = d.createElement("div"),
    $original = d.createElement("a"),
    $bonus = d.createElement("a");

  $home.classList.add("container", "mx-auto");

  $title.classList.add(
    "text-center",
    "text-white",
    "text-3xl",
    "font-bold",
    "uppercase",
    "my-5",
    "sm:text-4xl"
  );
  $title.textContent = "Choose the game mode";

  $containerModes.classList.add("modes");

  $original.href = "#/original";
  $original.appendChild(
    ButtonRounded({
      bgFrom: "from-from-scissors-gradient",
      bgTo: "to-to-scissors-gradient",
      shadow: "shadow-shadow-scissors",
      text: "Original",
    })
  );

  $bonus.href = "#/bonus";
  $bonus.appendChild(
    ButtonRounded({
      bgFrom: "from-from-paper-gradient",
      bgTo: "to-to-paper-gradient",
      shadow: "shadow-shadow-paper",
      text: "Bonus",
    })
  );

  $containerModes.appendChild($original);
  $containerModes.appendChild($bonus);

  $home.appendChild($title);
  $home.appendChild($containerModes);

  return $home;
}
