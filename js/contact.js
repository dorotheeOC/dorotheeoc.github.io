const form = document.getElementById("contact-form");
form.reset();

const phone = document.getElementById('phone');
let convertedPhone = '';

const textarea = document.querySelector("textarea");
let charsNumber = document.querySelector('span.comment-length')

phone.addEventListener('focusout', () => {
    if(phone.value) {
        formatPhone(phone.value);
        phone.value = convertedPhone;
    }
})

textarea.addEventListener("input", event => {
    
    const maxLength = event.target.getAttribute("maxlength");
    const currentLength = event.target.value.length;

    if (currentLength >= maxLength) {
        return console.log("You have reached the maximum number of characters.");
    }
    charsNumber.innerHTML = `${currentLength}/${maxLength}`
});

let p = document.querySelector('p.message');
p.classList.add('d-none');

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
})

const formatPhone = (phoneNumber) => {
  let digit = ('' + phoneNumber).replace(/\D/g, '')
  console.log(digit)
  let match = digit.match(/^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/)
  match.shift();
  convertedPhone = match.join('-')
}

const hideMsg = () => {
    setTimeout(() => {
        p.classList.add('d-none');
    }, 3000)
}

const sendMail = (mail) => {
    fetch("https://ds-eportfolio.herokuapp.com/send", {
      method: "post",
      body: mail,
    }).then(() => {
        p.setAttribute('class', 'uppercase message');
        p.innerHTML = 'Votre demande a été envoyée avec succès !<br />Vous recevrez une réponse par mail sous peu.'
        hideMsg();
        form.reset();
    }).catch(() => {
        p.setAttribute('class', 'uppercase message');
        p.innerHTML = 'Votre demande n\'a pas pu être envoyée !<br />Veuillez recommencer.'
        hideMsg();
    })
};