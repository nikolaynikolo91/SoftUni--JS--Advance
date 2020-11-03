function growingWord() {
  const colors = ["blue", "green", "red"];
  const paragraph = document.getElementsByTagName("p")[2];

  let color = paragraph.style.color;
  let size = paragraph.style.fontSize.replace('px', '');

  if (!color) {
    paragraph.style.color = "blue";
  } else {
    paragraph.style.color = colors[(colors.indexOf(color) + 1) % colors.length];
    }

  paragraph.style.fontSize = (!size ? 2 : size * 2) + 'px';
}
