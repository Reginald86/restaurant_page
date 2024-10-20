export function menu() {

    const content = document.querySelector('#content');
    content.textContent = "";

    const container = document.createElement('div');
    container.id = "container";

    const title = document.createElement('h1');
    title.id = "title";
    title.textContent = "Menu"

   const subTitle = document.createElement('h2');
   subTitle.id = "subTitle";
   subTitle.innerHTML = "<span id = dogbone>Bone &#127830; Appetit</span>"

   const subContainer = document.createElement('div');
   subContainer.id = "subContainer";

    const menu1 = document.createElement('div');
    menu1.className = "menuSection";
    menu1.id = "menu1";

    
    const menu2 = document.createElement('div');
    menu2.className = "menuSection";
    menu2.id = "menu2";



   subContainer.append(menu1, menu2);
   container.append(title, subTitle, subContainer);
   content.appendChild(container);

}