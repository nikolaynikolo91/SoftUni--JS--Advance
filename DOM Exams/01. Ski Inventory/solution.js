function solve() {
   let allBtn = document.getElementsByTagName('button')
   let filterBtn = allBtn[0];
   let addBtn = allBtn[1];
   let buyBtn = allBtn[2];

   let allInput = document.getElementsByTagName('input');
   let inputFilter = allInput[0];

   let inName = allInput[1];
   let inQuantity = allInput[2];
   let inPrice = allInput[3];

   let newProductField = document.querySelector('#products > ul')
   let myProductUl = document.getElementsByTagName('ul')[1]


   buyBtn.addEventListener('click', cleanFunc)

   function cleanFunc(myProductUl) {
      setTotal(undefined)
      document.getElementsByTagName('ul')[1].innerHTML = ' '
   }

   function setTotal(num) {
      let $total = document.getElementsByTagName('h1')[1];
      let price = $total.textContent.match(/\d+[.]?\d+/g);
      if (num !== undefined) {
         price = Number(price) + Number(num);
         $total.textContent = `Total Price: ${price.toFixed(2)}`
      } else {
         $total.textContent = `Total Price: 0.00`
      }

   }




   addBtn.addEventListener('click', (e) => {
      e.preventDefault()
      makeLi(inName.value, inQuantity.value, inPrice.value, newProductField)
      inName.value = '';
      inQuantity.value = '';
      inPrice.value = '';
   })




   function makeLi(name, quantity, price, newProductField) {
      if (quantity >= 1 && name !== '' && price > 0) {

         let li = document.createElement('li');

         let span = document.createElement('span');
         span.textContent = name;
         let strong = document.createElement('strong')
         strong.textContent = `Available: ${quantity}`;

         let div = document.createElement('div');
         let divStrong = document.createElement('strong');
         Number
         divStrong.textContent = `${Number(price).toFixed(2)}`;
         var divBtn = document.createElement('button');
         divBtn.textContent = "Add to Client's List"

         divBtn.addEventListener('click', divBtnFunc)

         div.appendChild(divStrong);
         div.appendChild(divBtn);
         li.appendChild(span);
         li.appendChild(strong)
         li.appendChild(div)

         newProductField.appendChild(li);
      }

   }

   filterBtn.addEventListener('click', (e2) => {
      let allLi = document.getElementsByTagName('li')
      let allSpan = document.getElementsByTagName('span')
      let regexTest = new RegExp(inputFilter.value, 'g')

      if (inputFilter.value === '') {
         Array.from(allLi).forEach((x) => x.style.display = 'block')
      }

      Array.from(allSpan).forEach((x) => {
         if (!(regexTest.test(x.textContent))) {
            x.parentNode.style.display = 'none'
         }
      })
   })

   function divBtnFunc(e3) {
      let privLi = e3.target.parentNode.parentNode
      let name = privLi.getElementsByTagName('span')[0];
      let allStrong = privLi.getElementsByTagName('strong')
      let price = allStrong[1];
      setTotal(price.textContent)

      let privQuant = allStrong[0];
      let regNumber = /\d+/g
      let numAvailable = privQuant.textContent.match(regNumber)[0];

      let newLi = document.createElement('li')
      newLi.textContent = name.textContent
      // newLi.appendChild(name.cloneNode(true));
      newLi.appendChild(price.cloneNode(true))
      myProductUl.appendChild(newLi)

      numAvailable--;

      if (numAvailable === 0) {
         privLi.parentNode.removeChild(privLi)
      } else {
         privQuant.textContent = `Available: ${numAvailable}`
      }



      console.log(numAvailable)
   }
}