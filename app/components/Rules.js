import RulesImg from "./RulesImg.js";

export default function (props) {
  const d = document,
    $rules = d.createElement("button"),
    { img } = props;

  $rules.classList.add("btn-rules");
  $rules.textContent = "RULES";

  d.addEventListener("click", (e) => {
    if (
      e.target !== $rules &&
      !e.target.matches(".btn-close") &&
      !e.target.matches(".btn-close *")
    )
      return;

    if (e.target === $rules) {
      let $modal = RulesImg({
        imgRules: img,
        imgX: "./app/assets/images/icon-close.svg",
      });
      d.body.appendChild($modal);
    }

    if (e.target.matches(".btn-close") || e.target.matches(".btn-close *"))
      d.body.removeChild(d.body.lastChild);
  });

  return $rules;
}
