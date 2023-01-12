export function ButtonRounded(props) {
  const d = document,
    $circle = d.createElement("button"),
    $miniCircle = d.createElement("div"),
    {
      alt = "",
      bgFrom = "",
      bgTo = "",
      id = null,
      img = "",
      shadow = "",
      text = "",
      extraClasses = [],
      size = "btn-mode-inside-circle-base",
    } = props;

  $circle.classList.add("btnRounded", bgFrom, bgTo, shadow, ...extraClasses);
  $circle.dataset.id = id;
  $miniCircle.classList.add("btn-mode-inside-circle", size);
  $miniCircle.dataset.id = id;

  if (img) {
    const $img = d.createElement("img");
    $img.classList.add("w-full");
    $img.src = img;
    $img.alt = alt;
    $img.dataset.id = id;
    $miniCircle.appendChild($img);
  }

  if (text) {
    const $span = d.createElement("span");
    $span.classList.add("txt-description-button");
    $span.innerHTML = text;
    $span.dataset.id = id;
    $miniCircle.appendChild($span);
  }

  $circle.appendChild($miniCircle);

  return $circle;
}
