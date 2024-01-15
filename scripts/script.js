const grid = document.querySelector('#grid');

const characters = [
    'book',
    'coffin',
    'eye',
    'hat',
    'pumpklin',
    'scarecrow',
    'voodo',
    'witcher',
    'zombie'
];

const createElement = (tagName, className) => {

    const element = document.createElement(tagName);
    element.className = className;
    
    return element;
}

const checkCards = () => {

    const firstCharactere  = firstCard.getAttribute('data-character');
    const secondCharactere  = secondCard.getAttribute('data-character');

    if(firstCharactere === secondCharactere) {

        firstCard.classList.add('disabled-card');
        secondCard.classList.add('disabled-card');
    
        firstCard = '';
        secondCard = '';

    } else {
        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            
            firstCard = '';
            secondCard = '';
        }, 500)
    }
}

let firstCard = '';
let secondCard = '';

const revealCard = ({ target }) => {

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } 

    else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }

}

const createCard = (character) => {    

    const card = createElement('div', 'card');
    const backCard = createElement('div', 'face back');
    const frontCard = createElement('div', 'face front');

    backCard.appendChild(document.createTextNode(" ? "));

    frontCard.style.backgroundImage = `url(../style/images/${character}.png)`;

    card.appendChild(frontCard);
    card.appendChild(backCard);

    card.setAttribute('data-character', character);
    card.addEventListener('click', revealCard);

    return card;
}


const loadGame = () => {
    duplicateCharacter = [...characters, ...characters];

    shuffedCharacter = duplicateCharacter.sort(() => Math.random() - 0.5);

    shuffedCharacter.forEach(character => {
        const card = createCard(character);

        grid.appendChild(card);
    });
}

loadGame();