export function home() {

   const content = document.querySelector('#content');
   content.textContent = "";

   const homeContainer = document.createElement('div');
   homeContainer.id = "container"
   
   const title = document.createElement('h1');
   title.id = "title";
   title.textContent = "Welcome to Reginald's Diner"

   const subTitle = document.createElement('h2');
   subTitle.id = "subTitle";
   subTitle.textContent = "The local eatery your dog loves"
        
   const image = document.createElement("img");
   image.src =
   "https://th.bing.com/th/id/R.2105fe7de975be39da0859847d1f78ed?rik=IkbKFdydmeT4Dw&riu=http%3a%2f%2fvetnutrition.tufts.edu%2fwp-content%2fuploads%2fhungry-dog.jpg&ehk=BFTQkpjLaflPhhmogcwOPvNts2rMXkem5evHLpb%2bRlw%3d&risl=&pid=ImgRaw&r=0"
   image.alt = "A dog sitting down to eat";
   image.id = "homeImage";

   const description = document.createElement('p');
   description.id = "homeDescription";
   description.innerHTML = "Reginald's Diner is a <em>one-of-a-kind</em> restaurant designed exclusively for dogs, offering a delicious and healthy dining experience tailored to our furry friends.&nbsp;&nbsp;At Reginald's, we believe every dog deserves a gourmet meal, so we provide a carefully curated menu featuring wholesome, vet-approved dishes made from the finest ingredients.&nbsp;&nbsp;From organic chicken and rice bowls to savory beef and sweet potato bites, each meal is designed to support your dog's <span id = blue><b>health</b></span> and <span id = blue><b>happiness</b></span>."
   
   homeContainer.append(title, subTitle, image, description)
   content.appendChild(homeContainer);
}