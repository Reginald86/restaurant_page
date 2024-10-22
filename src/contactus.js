export function contact() {

    const content = document.querySelector('#content');
    content.textContent = "";

    const container = document.createElement('div');
    container.id = "container";

    const title = document.createElement("h1");
    title.id = "title";
    title.textContent = "Contact us"

    const infoContainer = document.createElement('div');
    infoContainer.id = "infoContainer";

    const address = document.createElement("p");
    address.innerHTML =
      "<strong>Address:</strong> 333 Paw Avenue, Chicago, IL, 60601";
  
    const phone = document.createElement("p");
    phone.innerHTML = "<strong>Phone:</strong> (123) 456-7890";
  
    const email = document.createElement("p");
    email.innerHTML = "<strong>Email:</strong> info@reginaldsdiner.com";

    const subContainer = document.createElement('div');
    subContainer.id = "subContainer";

    const image = document.createElement("img");
    image.src = "https://th.bing.com/th/id/OIP.l1bcYOZXEPs1hNCP99hoaQHaFj?w=1600&h=1200&rs=1&pid=ImgDetMain"
    image.alt = "A dog sitting down to eat";
    image.class = "contactSection"
    image.id = "contactImage"

    const contactContainer = document.createElement('div');
    contactContainer.id = "contactContainer";
    contactContainer.class = "contactSection";

    const contactForm = document.createElement("form");
    contactForm.id = "contactForm"
    contactForm.innerHTML = `
          <div class = inputSection>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
          </div>

          <div class = inputSection>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
          </div>

          <div class = inputSection>
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          </div>
  
          <button type="submit" id = "button">Send Message</button>
      `;

    
   container.append(title, infoContainer, subContainer);
   contactContainer.append(contactForm)
   subContainer.append(image, contactContainer)
   infoContainer.append(address, phone, email)
   content.appendChild(container);
}