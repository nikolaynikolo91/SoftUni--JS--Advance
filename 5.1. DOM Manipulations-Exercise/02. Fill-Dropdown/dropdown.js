function addItem() {
  let $text = document.getElementsByTagName("input")[0];
  let $value = document.getElementsByTagName("input")[1];
  let $selectMenu = document.getElementsByTagName("select")[0];

  let $options = document.createElement("option");
  $options.textContent = $text.value;
  $options.value = $value.value;

  $selectMenu.appendChild($options);

  $text.value = "";
  $value.value = "";

  // console.log($selectMenu);
}
