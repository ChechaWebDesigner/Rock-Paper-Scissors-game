export default function RulesImg(props) {
  const d = document,
    $container = d.createElement("div"),
    $title = d.createElement("h3"),
    $imgRules = d.createElement("img"),
    $btnX = d.createElement("button"),
    $imgX = d.createElement("img"),
    $bgModal = d.createElement("div"),
    { imgRules, imgX } = props;

  $container.classList.add("modal-rules");

  $bgModal.classList.add(
    "w-full",
    "min-h-screen",
    "h-full",
    "fixed",
    "bg-[#0006]"
  );
  $bgModal.id = "modal";

  $title.textContent = "RULES";
  $title.classList.add(
    "text-center",
    "text-2xl",
    "text-score-text",
    "font-extrabold",
    "sm:text-3xl",
    "sm:order-1"
  );

  $imgRules.src = imgRules;
  $imgRules.classList.add(
    "sm:w-11/12",
    "p-2",
    "sm:order-3",
    "sm:mx-auto",
    "sm:mt-10"
  );

  $imgX.src = imgX;
  $btnX.classList.add("btn-close", "p-2", "sm:order-2");
  $btnX.appendChild($imgX);

  $container.appendChild($title);
  $container.appendChild($imgRules);
  $container.appendChild($btnX);

  $bgModal.appendChild($container);
  return $bgModal;
}
