const wrapper = document.getElementById('burger-wrapper');
const dropList = document.getElementById('drop-list');

const acasaLink = document.getElementById('acasa-link');
const despreLink = document.getElementById('despre-link');
const berileLink = document.getElementById('berile-link');
const contactLink = document.getElementById('contact-link');

const acasa = document.getElementById('acasa');
const despreBere = document.getElementById('despre-bere');
const berileNoastre = document.getElementById('berile-noastre');

dropList.style.height = '0px';
dropList.style.opacity = '0';

despreBere.style.display = 'none';
berileNoastre.style.display = 'none';

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

acasaLink.addEventListener('click', () => {
    wrapper.classList.toggle('open');

    acasa.style.display = 'block';
    despreBere.style.display = 'none';
    berileNoastre.style.display = 'none';

    ales.style.display = 'none';
    lagers.style.display = 'none';

    dropList.style.height = '0px';
    dropList.style.opacity = '0';

});

despreLink.addEventListener('click', () => {

    wrapper.classList.toggle('open');

    despreBere.style.display = 'block';
    acasa.style.display = 'none';
    berileNoastre.style.display = 'none';

    ales.style.display = 'none';
    lagers.style.display = 'none';

    dropList.style.height = '0px';
    dropList.style.opacity = '0';


});

berileLink.addEventListener('click', () => {
    wrapper.classList.toggle('open');

    berileNoastre.style.display = 'block';
    acasa.style.display = 'none';
    despreBere.style.display = 'none';

    ales.style.display = 'none';
    lagers.style.display = 'none';

    dropList.style.height = '0px';
    dropList.style.opacity = '0';

});

contactLink.addEventListener('click', () => {

    wrapper.classList.toggle('open');

    acasa.style.display = 'block';
    despreBere.style.display = 'none';
    berileNoastre.style.display = 'none';

    ales.style.display = 'none';
    lagers.style.display = 'none';

    dropList.style.height = '0px';
    dropList.style.opacity = '0';

});

const ales = document.getElementById('ales');
const lagers = document.getElementById('lagers');

ales.style.display = 'none';
lagers.style.display = 'none';

const openSubtypes = (beerType) => {

    despreBere.style.display = 'none';
    ales.style.display = 'none';
    lagers.style.display = 'none';

    if (beerType === 'ales') {
        ales.style.display = 'block';
    } else if (beerType === 'lagers') {
        lagers.style.display = 'block';
    }

}