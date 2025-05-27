// Produtos
const products = [
  {
    id: 1,
    name: "Clássico com Gotas de Chocolate <br>(Esgotado)",
    description: "Nosso cookie exclusivo com generosos pedaços de chocolate premium e um centro macio que derrete na boca.",
    image: "midia/cookie1.jpg"
  },
  {
    id: 2,
    name: "Sanduíche de Cookie <br>(Mais vendido)",
    description: "Cookie de chocolate intenso, macio e com gotas de chocolate para a experiência de chocolate suprema.",
    image: "midia/cookie_2.png",
    bestseller: true
  },
  {
    id: 3,
    name: "Nozes e Açúcar Mascavo <br>(Esgotado)",
    description: "Cookie amanteigado de açúcar mascavo com nozes crocantes e um toque sutil de canela.",
    image: "midia/cookie3.jpeg"
  }
];



// Depoimentos
const testimonials = [
  {
    name: "João Paulo",
    location: "Itararé - SP",
    text: "Gostoso, muito crocante, comprarei de novo.",
    image: "midia/João.jpg"
  },
  {
    name: "Eduardo Bonfim",
    location: "São Paulo - São Paulo",
    text: "O cookie mais macio, quentinho e saboroso que eu já provei na vida.",
    image: "midia/Edu.jpg"
  },
  {
    name: "Hugo Vitor",
    location: "Itararé - São Paulo",
    text: "Foi um dos melhores Cookies que ja comi na vida. 🌚",
    image: "midia/vitu.jpg"
  }
];

// Header Scroll Effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.nav-list');

mobileMenuBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Render Products
const productsContainer = document.getElementById('products-container');

products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.className = 'product-card';
  productCard.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-info">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <a href="#contact" class="btn btn-primary">Peça já</a>
    </div>
  `;
  productsContainer.appendChild(productCard);
});

// Testimonials Slider
const testimonialsContainer = document.getElementById('testimonials-container');
let currentTestimonial = 0;

// Render Testimonials
testimonials.forEach((testimonial, index) => {
  const testimonialCard = document.createElement('div');
  testimonialCard.className = `testimonial-card ${index === 0 ? 'active' : ''}`;
  testimonialCard.innerHTML = `
    <img src="${testimonial.image}" alt="${testimonial.name}" style="width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 1rem;">
    <p class="testimonial-text">"${testimonial.text}"</p>
    <h4 class="testimonial-name">${testimonial.name}</h4>
    <p class="testimonial-location">${testimonial.location}</p>
  `;
  testimonialsContainer.appendChild(testimonialCard);
});

// Testimonial Navigation
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
const testimonialCards = document.querySelectorAll('.testimonial-card');

function showTestimonial(index) {
  testimonialCards.forEach(card => card.classList.remove('active'));
  testimonialCards[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});

nextBtn.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});

// WhatsApp Form Integration
const whatsappForm = document.getElementById('whatsapp-form');

whatsappForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  
  // Format the message for WhatsApp
  const whatsappMessage = `*Novo Pedido do Site*%0A%0A*Nome:* ${name}%0A*Telefone:* ${phone}%0A*Mensagem:* ${message}`;
  
  // Replace this with your actual WhatsApp business number
  const whatsappNumber = '15991560824';
  
  // Open WhatsApp with the pre-filled message
  window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
});