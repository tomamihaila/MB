const wrapper = document.getElementById('burger-wrapper');
const dropList = document.getElementById('drop-list');
const contactLink = document.getElementById('contact-link');

dropList.style.height = '0px';
dropList.style.opacity = '0';

wrapper.addEventListener('click', () => {

    wrapper.classList.toggle('open');

    if (dropList.style.height === '0px') {
        dropList.style.height = '170px';
        dropList.style.opacity = '1';
        contactLink.href = '#contact';
    } else {
        dropList.style.height = '0px';
        dropList.style.opacity = '0';
        contactLink.removeAttribute('href');
    }
});

dropList.addEventListener('click', () => {

    wrapper.classList.toggle('open');

    if (dropList.style.height === '0px') {
        dropList.style.height = '170px';
        dropList.style.opacity = '1';
        contactLink.href = '#contact';
    } else {
        dropList.style.height = '0px';
        dropList.style.opacity = '0';
        setTimeout(() => {
            contactLink.removeAttribute('href');
        }, 0);

    }
});

