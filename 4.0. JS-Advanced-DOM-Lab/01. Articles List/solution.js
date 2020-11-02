function createArticle() {
  let $titleInput = document.getElementById("createTitle");
  let $contenInput = document.getElementById("createContent");
  let $articles = document.getElementById("articles");

  if ($titleInput.value != "" && $contenInput.value != "") {
    let article = document.createElement("article");
    $articles.appendChild(article);
    let head = document.createElement("h3");
    let p = document.createElement("p");
    head.innerHTML = $titleInput.value;
    p.innerHTML = $contenInput.value;
    article.appendChild(head);
    article.appendChild(p);
    $titleInput.value = "";
    $contenInput.value = "";
  }
}
