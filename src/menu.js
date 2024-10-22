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

    const entree = document.createElement('h2');
    entree.textContent = "Entrées:"
    entree.className = "menuTitle";
    const entreeItems = document.createElement("ul");
    entreeItems.className = "menuItems"
    entreeItems.innerHTML = `
          <li>Grilled Salmon and Bone Broth Rice - $27</li>
          <li>Filet Woofnon and Sweet Potatoes - $25</li>
          <li>Turkey and Biscuits with Gravy - $21</li>
          <li>Beefy Bone Stew - $18</li>
          <li>Lamb Lickin' Meatballs - $23</li>
          <li>Pup-eroni Pizza - $18</li>
      `;

      const appetizer = document.createElement('h2');
      appetizer.textContent = "Appetizers:"
      appetizer.className = "menuTitle";
      appetizer.id = "appetizer"
      const appetizerItems = document.createElement("ul");
      appetizerItems.className = "menuItems"
      appetizerItems.innerHTML = `
            <li>Gourment Milkbones - $11</li>
            <li>Cheesy Paws Bites - $14</li>
            <li>Mini Meat Muffins - $16</li>
        `;

        
      const dessert = document.createElement('h2');
      dessert.textContent = "Desserts:"
      dessert.className = "menuTitle";
      dessert.id = "dessert";
      const dessertItems = document.createElement("ul");
      dessertItems.className = "menuItems"
      dessertItems.innerHTML = `
            <li>Frozen Yogurt Bites - $11</li>
            <li>Frozen Banana & Peanut Butter Pops - $13</li>
            <li>Pumpkin & Peanut Butter FroYo Cups - $14</li>
            <li>Doggie Donuts - $11 </li>
            <li> Apple & Oatmeal Pupcakes - $9</li>
        `;

        const beverage = document.createElement('h2');
        beverage.textContent = "Beverages:"
        beverage.className = "menuTitle";
        beverage.id = "beverage";
        const beverageItems = document.createElement("ul");
        beverageItems.className = "menuItems"
        beverageItems.innerHTML = `
              <li>Chicken Broth Cooler - $4.50</li>
              <li>Pup-sicle Smoothie - $6.50</li>
              <li>Toliet Bowl Water - Free</li>
          `;
      




   subContainer.append(menu1, menu2);
   menu1.append(entree, entreeItems, appetizer, appetizerItems);
   menu2.append(dessert, dessertItems, beverage, beverageItems);
   container.append(title, subTitle, subContainer);
   content.appendChild(container);

}