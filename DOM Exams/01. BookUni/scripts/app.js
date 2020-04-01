function solve() {

    let allInputs = document.getElementsByTagName('input')
    let $book = allInputs[0];
    let $year = allInputs[1];
    let $price = allInputs[2];

    let $bookShelf = document.getElementsByClassName('bookShelf')
    let $oldBooks = $bookShelf[0];
    let $newBooks = $bookShelf[1];

    let allButton = document.getElementsByTagName('button');
    let $addButton = allButton[0];

    let $totalPrice = document.getElementsByTagName('h1')[1]

    let regexNumber = /(\d*\.)?\d+/g;




    $addButton.addEventListener('click', (e) => {
        e.preventDefault()
        let newDir = document.createElement('div')
        newDir.classList = 'book';

        let newP = document.createElement('p');

        newP.textContent = `${$book.value} [${$year.value}]`

        let buyBookBtn = document.createElement('button');
        buyBookBtn.textContent = `Buy it only for ${Number($price.value).toFixed(2)} BGN`


        let oldBookBtn = document.createElement('button')
        oldBookBtn.textContent = 'Move to old section';

        if ($year.value < 2000) {
            buyBookBtn.textContent = `Buy it only for ${(Number($price.value)*0.85).toFixed(2)} BGN`
            newDir.appendChild(newP)
            newDir.appendChild(buyBookBtn)

            $oldBooks.appendChild(newDir)
        } else {

            newDir.appendChild(newP)
            newDir.appendChild(buyBookBtn)
            newDir.appendChild(oldBookBtn)

            $newBooks.appendChild(newDir)
        }



        oldBookBtn.addEventListener('click', (e2) => {
            // let yearRegex = /\[(\d+)\]/g;
            // let currentPara = e2.target.parentNode.getElementsByTagName('p')[0].textContent;
            // let arrMatch = yearRegex.exec(currentPara)

            // if (Number(arrMatch[1]) < 2020) {
            let child = e2.target.parentNode
            let privPrice = (buyBookBtn.textContent).match(regexNumber)[0]
            privPrice = Number(privPrice) * 0.85;
            buyBookBtn.textContent = `Buy it only for ${Number(privPrice).toFixed(2)} BGN`
            oldBookBtn.parentNode.removeChild(oldBookBtn)
            // oldBookBtn.style.display = "none"
            $oldBooks.appendChild(child)


            // }

        })

        buyBookBtn.addEventListener('click', (e3) => {
            let totalPrice = ($totalPrice.textContent).match(regexNumber)[0]
            let privPrice = (e3.target.textContent).match(regexNumber)[0]
            let allPrice = Number(totalPrice) + Number(privPrice)
            $totalPrice.textContent = `Total Store Profit: ${allPrice.toFixed(2)} BGN`

            e3.target.parentNode.parentNode.removeChild(e3.target.parentNode)

        })

    });














}