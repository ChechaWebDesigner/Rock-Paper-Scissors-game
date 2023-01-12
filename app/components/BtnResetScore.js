export default function BtnResetScore(props) {
  const d = document,
    $btn = d.createElement("button"),
    { game } = props;

  $btn.textContent = "RESET SCORE";
  $btn.classList.add("btn-reset-score");

  d.addEventListener("click", (e) => {
    if (e.target !== $btn) return;
    localStorage.removeItem(game);
    d.querySelector(".score-value").textContent = 0;
  });

  return $btn;
}
