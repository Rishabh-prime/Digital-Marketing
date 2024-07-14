$(document).ready(() => {
    initializeHeaderEventListeners();
    loadSections();
});

function initializeHeaderEventListeners() {
    const bar = $('#bar');
    const navbar = $('#navbar');
    const closebutton = $('#close');

    bar.on('click', () => {
        console.log('Bar clicked');
        navbar.toggleClass('active');
        closebutton.toggleClass('active');
        bar.toggleClass('active');
    });

    closebutton.on('click', () => {
        console.log('Close button clicked');
        navbar.toggleClass('active');
        closebutton.toggleClass('active');
        bar.toggleClass('active');
    });
}

function initializeHeroFormEventListener() {
    const contactUsButton = $('#contact-us-button');
    const formContainer = $('#contact-form-container');

    contactUsButton.on('click', (event) => {
        event.preventDefault();

        if (formContainer.css('display') === 'none' || !formContainer.css('display')) {
            const formHTML = `
                <form id="contact-form" action="https://getform.io/f/bzylydga" method="POST">
                <h1>Talk With Us</h1>
                    <button type="button" class="close-button" id="close-form">&times;</button>
                    <input type="text" id="name" name="name" placeholder="Your Name" required>
                    <input type="email" id="email" name="email" placeholder="Your Email" required>
                    <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
                    <div class="checkbox-container">
                        <input type="checkbox" id="subscribe" name="subscribe">
                        <label for="subscribe">I agree to Fyle's terms and conditions, and provide consent to send me communication.</label>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            `;
            formContainer.html(formHTML);
            formContainer.css('display', 'flex');

            $('#close-form').on('click', () => {
                formContainer.css('display', 'none');
            });

            $('#contact-form').on('submit', (event) => {
                const subscribeCheckbox = $('#subscribe');
                if (!subscribeCheckbox.prop('checked')) {
                    event.preventDefault();
                    alert('Please subscribe to our newsletter before submitting the form.');
                }
            });
        } else {
            formContainer.css('display', 'none');
        }
    });
}

function changeBackground() {
    const project1 = $('#content1');
    const project2 = $('#content2');
    const project3 = $('#content3');
    const projectImage = $('#project-image');

    project1.on('click', () => {
        projectImage.css('background-image', 'url("./Images/change-iamge1.jpg")');
        console.log("button1 clicked");
    });

    project2.on('click', () => {
        projectImage.css('background-image', 'url("./Images/change-iamge2.png")');
        console.log("button2 clicked");
    });

    project3.on('click', () => {
        projectImage.css('background-image', 'url("/Images/change-iamge3.jpg")');
        console.log("button3 clicked");
    });
}

function loadSection(sectionId, url, callback) {
    $.get(url, (data) => {
        $(sectionId).html(data);
        if (callback) callback();
    });
}

function loadSections() {
    loadSection('#hero-section', 'hero.html', initializeHeroFormEventListener);
    loadSection('#work-section', 'Work.html');
    loadSection('#slider-section', 'automatic-cards.html');
    loadSection('#quality-cards-section', 'Quality.html');
    loadSection('#project-section', 'Project.html', changeBackground);
    loadSection('#footer-section', 'Footer.html');
}
