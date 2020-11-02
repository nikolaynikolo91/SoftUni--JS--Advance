function createArticle() {
  let title$ = document.getElementById("createTitle");
  let content$ = document.getElementById("createContent");
  let articles$ = document.getElementById("articles");

  if (title$.value !== "" && content$.value !== "") {
    let article = document.createElement("article");
    let head = document.createElement("h3");
    head.textContent = title$.value;
    let p = document.createElement("p");
    p.textContent = content$.value;

    article.appendChild(head);
    article.appendChild(p);
    articles$.appendChild(article);
  }
}
