function solve() {
   let $createBtn = document.getElementsByTagName('button')[0]
   let $name = document.getElementById('creator');
   let $title = document.getElementById('title');
   let $category = document.getElementById('category');
   let $content = document.getElementById('content')
   let $allSection = document.getElementsByTagName('section');
   let $newArticle = $allSection[1];
   let $archiveArticle = document.getElementsByTagName('ul')[0]




   $createBtn.addEventListener('click', createNewArt)


   function createNewArt(e) {
      e.preventDefault()
      console.log(e.target)
      let article = document.createElement('article');

      let title = document.createElement('h1')
      title.textContent = $title.value;
      let p = document.createElement('p');
      p.textContent = "Category:";
      let pStrong = document.createElement('strong');
      pStrong.textContent = $category.value;
      let p2 = document.createElement('p');
      p2.textContent = "Creator:";
      p2Strong = document.createElement('strong');
      p2Strong.textContent = $name.value;
      let p3 = document.createElement('p');
      p3.textContent = $content.value;

      let div = document.createElement('div');
      div.classList.add('buttons');
      let btnDel = document.createElement('button');
      btnDel.classList.add("btn", "delete");
      btnDel.textContent = 'Delete'
      let btnArch = document.createElement('button');
      btnArch.classList.add("btn", "archive")
      btnArch.textContent = 'Archive'

      div.appendChild(btnDel);
      div.appendChild(btnArch);
      p2.appendChild(p2Strong);
      p.appendChild(pStrong);

      article.appendChild(title);
      article.appendChild(p);
      article.appendChild(p2);
      article.appendChild(p3);
      article.appendChild(div)

      $newArticle.appendChild(article)

      btnDel.addEventListener('click', deleteArt)
      btnArch.addEventListener('click', archiveFunc)


      function archiveFunc(e) {
         let allLi = document.getElementsByTagName('li')
         if (allLi.length === 0) {
            let newLi = document.createElement('li');
            newLi.textContent = title.textContent;
            $archiveArticle.appendChild(newLi)
            deleteArt(e)

         } else {

            let arr = [];
            arr.push(title.textContent)
            Array.from(allLi).forEach(eLi => {
               arr.push(eLi.textContent)
            })

            arr.sort((a, b) => a.localeCompare(b));
            $archiveArticle.textContent = ''

            arr.forEach((el) => {
               let createNewLi = document.createElement('li');
               createNewLi.textContent = el;

               $archiveArticle.appendChild(createNewLi)

            })

            deleteArt(e)



         }

      }


   }


   function deleteArt(e) {
      let child = e.target.parentNode.parentNode
      let parent = e.target.parentNode.parentNode.parentNode
      parent.removeChild(child)
   }




}