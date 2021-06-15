class ContactForm {
    constructor(options) {
        let defaultOptions = {
            maxLength: 350,
            captcha: {
                code: '',
                isValid: false
            },
            msg: {
                limit: 'Vous avez atteint la limite du nombre de caractères',
                success: 'Votre demande a été envoyée avec succès !<br />Vous recevrez une réponse par mail sous peu.',
                error: 'Votre demande n\'a pas pu être envoyée !<br />Veuillez recommencer.',
                captcha: 'Captcha incorrect ! Veuillez recommencer.'
            },
            selector: '#contact-form'
        }
        this.options = Object.assign(defaultOptions, options);
        this.maxLength = options.maxLength;
        this.captcha = options.captcha;
        this.msg = options.msg;
        this.element = document.querySelector(options.selector);
    }
    init() {
        this.element.reset()
        this.createCaptcha();
        this.prepareEvent();
    }
    formatPhone(phoneNumber) {
        let digit = ('' + phoneNumber).replace(/\D/g, '')
        console.log(digit)
        let match = digit.match(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/)
        match.shift();
        return match.join('-')
    }
    displayCharsLength(event) {
        const currentLength = event.target.value.length;
        const chars = document.querySelector('span.comment-length');
        if(currentLength >= this.maxLength) {
            this.displayMsg(this.msg.limit);
            this.hideMsg();
        }
        chars.innerHTML = `${currentLength}/${this.maxLength}`
    }
    createCaptcha() {
        document.getElementById('captcha').innerHTML = '';
        const charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lengthOtp = 6;
        let captcha = [];
        for (var i = 0; i < lengthOtp; i++) {
          let index = Math.floor(Math.random() * charsArray.length + 1);
          if (captcha.indexOf(charsArray[index]) == -1)
            captcha.push(charsArray[index]);
          else i--;
        }
        let canv = document.createElement("canvas");
        canv.id = "captcha";
        canv.width = 120;
        canv.height = 50;
        let ctx = canv.getContext("2d");
        ctx.font = "25px Georgia";
        ctx.strokeText(captcha.join(""), 10, 40);
        this.captcha.code = captcha.join("");
        document.getElementById('captcha').appendChild(canv);
    }
    validateCaptcha() {
        const captchaBox = document.getElementById('cpatchaTextBox');
        if(captchaBox.value !== this.captcha.code) {
            this.createCaptcha();
            this.captcha.isValid = false;
        } else {
            this.captcha.isValid = true;
        }
    }
    sendData(mail) {
        fetch("https://ds-eportfolio.herokuapp.com/send", {
        method: "post",
        body: mail,})
        .then(() => {
            this.init();
            this.displayMsg(this.msg.success);
            this.hideMsg();   
        })
        .catch(() => {
            this.displayMsg(this.msg.error);
            this.hideMsg();
        })
    }
    displayMsg(msgText) {
        const message = document.querySelector('p.message');
        message.innerHTML = msgText;
    }
    hideMsg() {
        const message = document.querySelector('p.message');
        setTimeout(() => {
            message.innerHTML = '';
        }, 5000);
    }
    prepareEvent() {
        let thisContactForm = this;
        const phone = document.getElementById('phone');
        phone.addEventListener('focusout', () => {
            phone.value = thisContactForm.formatPhone(phone.value);
        })
        const textarea = document.querySelector("textarea");
        textarea.addEventListener('input', (event) => {
            thisContactForm.displayCharsLength(event);
        })
        const captchaBox = document.getElementById("cpatchaTextBox");
        captchaBox.addEventListener('focusout', () => {
            thisContactForm.validateCaptcha();
        })
        const generateBtn = document.querySelector("button.button-generate");
        generateBtn.addEventListener('click', () => {
            thisContactForm.createCaptcha();
        })
        const form = this.element;
        form.addEventListener("submit", (event) => {
            console.log(thisContactForm.captcha.isValid)
            event.preventDefault();
            let mail = new FormData(form);
            if(thisContactForm.captcha.isValid) {
                thisContactForm.sendData(mail);
            } else {
                thisContactForm.displayMsg(this.msg.captcha);
                thisContactForm.hideMsg();
            }
        })
    }
}

class Application {
    constructor() {
        this.ContactForm = null;
    }
    init() {
        this.ContactForm = new ContactForm({
            maxLength: 350,
            captcha: {
                code: '',
                isValid: false
            },
            msg: {
                limit: 'Vous avez atteint la limite du nombre de caractères',
                success: 'Votre demande a été envoyée avec succès !<br />Vous recevrez une réponse par mail sous peu.',
                error: 'Votre demande n\'a pas pu être envoyée !<br />Veuillez recommencer.',
                captcha: 'Captcha incorrect ! Veuillez recommencer.'
            },
            selector: '#contact-form'
        });
        this.ContactForm.init();
    }
}

let app = new Application();
app.init();