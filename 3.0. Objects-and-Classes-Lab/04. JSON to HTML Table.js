function fromJSONToHTMLTable(input) {
  let arr = JSON.parse(input);
  let tableHeadsValues = tableHeadArr(arr);
  let output = ["<table>"];
  let headers = createHtmlRow(tableHeadsValues, "tr", "th");
  output.push(headers);

  for (let i = 0; i < arr.length; i++) {
    const elements = Object.values(arr[i]);
    let newRow = createHtmlRow(elements, "tr", "td");
    output.push(newRow);
  }

  output.push("</table>");

  function tableHeadArr(arr) {
    let tableHeads = [];
    for (let i = 0; i < arr.length; i++) {
      const elements = Object.keys(arr[i]);
      tableHeads.push(elements);
    }
    return Array.from(new Set(tableHeads.flat()));
  }

  function entityReplace(incomeString) {
    let result = incomeString
      .toString()
      .replace(/"/, "&quot;")
      .replace(/'/, "&#39;")
      .replace(/&/, "&amp;")
      .replace(/</, "&lt;")
      .replace(/>/, "&gt;");
    return result;
  }

  function createHtmlRow(tHeadsArr, firstTag, secondTag) {
    let tHead = `   <${firstTag}>`;
    for (let i = 0; i < tHeadsArr.length; i++) {
      tHead += `<${secondTag}>${entityReplace(tHeadsArr[i])}</${secondTag}>`;
    }
    tHead += `</${firstTag}>`;
    return tHead;
  }

  return output.join("\n");
}

let a = fromJSONToHTMLTable([
  '[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]',
]);

console.log(a);
