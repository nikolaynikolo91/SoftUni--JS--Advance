function solve() {
  let links = document.getElementsByTagName("a");

  for (let link of links) {
    link.addEventListener("click", (e) => {
      let $paragraph = e.target.parentNode.parentNode.lastElementChild;
      let regex = /\d+/g;

      let count = $paragraph.textContent.match(regex)[0];
      if (count) {
        count++;
        $paragraph.innerHTML = `visited ${count} times`;
      }
    });
  }
}
