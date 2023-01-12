export default function btnHome(el) {
  const $home = document.createElement("a");

  $home.classList.add("btn-home");
  $home.href = "#/";
  $home.textContent = "HOME";

  // document.addEventListener("click", (e) => {
  //   if (e.target !== $home) return;
  //   e.preventDefault();
  //   document
  //     .querySelector("#root section")
  //     .removeChild(document.querySelector(el));
  // });

  return $home;
}
