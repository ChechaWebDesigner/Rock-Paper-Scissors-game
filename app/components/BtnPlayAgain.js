export default function BtnPlayAgain({ againClass }) {
  const $btn = document.createElement("button");

  $btn.classList.add("btn-play-again", againClass);
  $btn.textContent = "PLAY AGAIN";

  return $btn;
}
