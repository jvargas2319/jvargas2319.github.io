const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    //Button click active class
    for (let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click',  function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sections active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //remove slected from the other button
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })

}


function sendEmail() {
    Email.send({
    Host : "smtp.gmail.com",
    Username : "j.vargas2319@gmail.com",
    Password : "Twocaper33!",
    To : 'j.vargas2319@outlook.com',
    From : document.getElementById("email").value,
    Subject : document.getElementById("subject").value,
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email " + document.getElementById("email").value
            + "<br> Message: " + document.getElementById("message").value
        
}).then(
    message => alert(message),
    console.log(document.getElementById("email").value)
);
}

function submitForm() {
    document.getElementById("conForm").submit();
}

PageTransitions();

