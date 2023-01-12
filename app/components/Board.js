export default function Board(props) {
  const d = document,
    $board = d.createElement("nav"),
    $icon = d.createElement("img"),
    $score = d.createElement("div"),
    $scoreTitle = d.createElement("p"),
    $scoreValue = d.createElement("p"),
    { alt, icon, game } = props;

  $board.classList.add(
    "flex",
    "flex-wrap",
    "justify-between",
    "items-center",
    "mx-auto",
    "p-4",
    "w-10/12",
    "border-4",
    "border-header-outline",
    "rounded-lg",
    "sm:w-2/3",
    "board"
  );

  $icon.classList.add("w-1/4", "sm:w-1/5", "min-w-[7.5rem]", "p-1");
  $icon.src = icon;
  $icon.alt = alt || "";

  $score.classList.add(
    "w-1/5",
    "sm:w-1/6",
    "min-w-[5.5rem]",
    "py-2",
    "px-4",
    "bg-white",
    "rounded-lg"
  );

  $scoreTitle.textContent = "SCORE";
  $scoreTitle.classList.add(
    "text-sm",
    "text-score-text",
    "tracking-wide",
    "sm:text-base"
  );

  $scoreValue.textContent = localStorage.getItem(game) ?? 0;
  $scoreValue.classList.add(
    "text-3xl",
    "text-dark-text",
    "font-extrabold",
    "score-value",
    "sm:text-5xl"
  );

  $score.appendChild($scoreTitle);
  $score.appendChild($scoreValue);

  $board.appendChild($icon);
  $board.appendChild($score);

  return $board;
}
