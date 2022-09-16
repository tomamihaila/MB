const wrapper = document.getElementById('burger-wrapper');
const dropList = document.getElementById('drop-list');

dropList.style.height = '0px';
dropList.style.opacity = '0';

wrapper.addEventListener('click', () => {

    wrapper.classList.toggle('open');

    if (dropList.style.height === '0px') {
        dropList.style.height = '170px';
        dropList.style.opacity = '1';
    } else {
        dropList.style.height = '0px';
        dropList.style.opacity = '0';
    }
});

dropList.addEventListener('click', () => {

    wrapper.classList.toggle('open');

    if (dropList.style.height === '0px') {
        dropList.style.height = '170px';
        dropList.style.opacity = '1';
    } else {
        dropList.style.height = '0px';
        dropList.style.opacity = '0';
    }
});

