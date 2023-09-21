/* 

order place Links:

WhatsApp:
https://wa.me/?text=[post-title]

*/

const whatsappBtn = document.querySelector(".whatsapp-bt");

function init() {
  const pinterestImg = document.querySelector(".pinterest-img");

  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI(document.title);
  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=Subject: Order Request - Product Name and Quantity

Dear Craftvilla Team,

I would like to place an order for the following item:

Product Name: ${postTitle}
Quantity: [Insert Quantity]

My Details:
Name: [Your Name]
Contact Number: [Your Contact Number]

Shipping Address:
[Your Shipping Address]

Payment Method:
[Specify Payment Method]

Thank you for your assistance. Looking forward to a seamless shopping experience.

Sincerely,
[Your Name]`
  );
}

init();
