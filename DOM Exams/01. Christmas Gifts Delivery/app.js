function solution() {
    let inputGift = document.getElementsByTagName('input')[0];
    let addInputBTn = document.getElementsByTagName('button')[0];
    let $allUl = document.getElementsByTagName('ul')
    let $listField = $allUl[0]
    let $sendField = $allUl[1]
    let $discardField = $allUl[2]

    addInputBTn.addEventListener('click', addToList);

    function addToList(e) {

        let $allGift = $listField.getElementsByTagName('li');
        if ($allGift.length === 0) {
            createLiToList(inputGift.value);
            inputGift.value = '';
        } else {
            let regex = /^.*(?=(\SendDiscard))/g;
            let arr = [];
            arr.push(inputGift.value);
            inputGift.value = '';

            Array.from($allGift).forEach((gift) => {

                arr.push((gift.textContent).match(regex)[0])
            });

            arr.sort((a, b) => a.localeCompare(b));
            $listField.textContent = '';

            arr.forEach((giftName) => {
                createLiToList(giftName)
            });
        }
    }

    function createLiToList(name) {
        let newLiList = document.createElement('li');
        newLiList.classList.add('gift');
        newLiList.textContent = name;
        let $sendBtn = document.createElement('button');
        $sendBtn.id = 'sendButton';
        $sendBtn.textContent = 'Send';

        let $discardBtn = document.createElement('button');
        $discardBtn.id = 'discardButton';
        $discardBtn.textContent = 'Discard';

        newLiList.appendChild($sendBtn);
        newLiList.appendChild($discardBtn);
        $listField.appendChild(newLiList);

        $sendBtn.addEventListener('click', sendFunc)
        $discardBtn.addEventListener('click', discFunc)

        function sendFunc(e2) {
            newLiList.removeChild($sendBtn)
            newLiList.removeChild($discardBtn)
            $sendField.appendChild(newLiList)
        }

        function discFunc(e3) {
            $discardField.appendChild(newLiList)
            newLiList.removeChild($sendBtn)
            newLiList.removeChild($discardBtn)
        }
    }
}