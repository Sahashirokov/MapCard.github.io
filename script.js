ymaps.ready(init);

function openCard(event) {
const btn = event.target;
const currentItem = btn.closest('.Card').querySelector('.item3');


if (currentItem.style.height === '60vh') {
    currentItem.style.height = '14vh';
    btn.src = 'expand.svg';
} else {
    currentItem.style.height = '60vh';
    btn.src = 'reduce.svg';
}

}

function init() {
const myMap = new ymaps.Map("map", {
center: [54.73517666496014, 55.95874577453613],
zoom: 13,
controls: []
});
const placemarks = [
    new ymaps.Placemark([54.73517666496014, 55.95874577453613]),
    new ymaps.Placemark([54.73417666496014, 55.94874577453613]),
    new ymaps.Placemark([54.72517666496014, 55.95674577453613])
];

placemarks.forEach((placemark, index) => {
    myMap.geoObjects.add(placemark);
    placemark.events.add('click', () => handlePlacemarkClick(index));
});

}

function handlePlacemarkClick(index) {
const cards = document.getElementsByClassName("Card");
for (let i = 0; i < cards.length; i++) {
    if (i === index) {
        cardOpen(cards[i]);
        cards[i].style.display = 'grid';
    } else {
        cards[i].style.display = 'none';
    }
}


}

function cardOpen(card) {
const item = card.querySelector('.item3');
const btn = card.querySelector('img');

item.style.height = '14vh';
btn.src = 'expand.svg';

}
var tg = window.Telegram.WebApp;
tg.expand();

