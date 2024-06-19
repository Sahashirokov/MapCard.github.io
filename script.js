ymaps.ready(init);

function openCard(event)
{
    const btn = event.target;
    const currentcard = btn.closest('.Card');
    const currentitem = currentcard.querySelector('.item3');
    currentitem.style.height=`35vh`;

}

function init() {
    var myMap = new ymaps.Map("map", {
            center: [54.73517666496014,55.95874577453613],
            zoom: 13,
            controls: []
        }, {

        })
    var placemark = new ymaps.Placemark([54.73517666496014,55.95874577453613],{},{});
    var placemark1 = new ymaps.Placemark([54.73417666496014,55.94874577453613],{},{});
    var placemark2 = new ymaps.Placemark([54.72517666496014,55.95674577453613],{},{});

let placemarks = [placemark,placemark1,placemark2];
for (let i = 0; i < 3; i++)
{
    myMap.geoObjects.add(placemarks[i]);
}


placemark.events.add('click', function () {

cardOpen();


    if(document.getElementsByClassName("Card")[1].style.display=='grid' || document.getElementsByClassName("Card")[2].style.display=='grid')
        {
            document.getElementsByClassName("Card")[1].style.display='none';
            document.getElementsByClassName("Card")[2].style.display='none';
            document.getElementsByClassName("Card")[0].style.display='grid';
        }
        document.getElementsByClassName("Card")[0].style.display='grid';

});

    placemark1.events.add('click', function () {

cardOpen();
       if(document.getElementsByClassName("Card")[0].style.display=='grid' || document.getElementsByClassName("Card")[2].style.display=='grid')
        {
            document.getElementsByClassName("Card")[0].style.display='none';
            document.getElementsByClassName("Card")[2].style.display='none';
            document.getElementsByClassName("Card")[1].style.display='grid';
        }
         document.getElementsByClassName("Card")[1].style.display='grid';
});
    placemark2.events.add('click', function () {
        cardOpen();
    if(document.getElementsByClassName("Card")[0].style.display=='grid' || document.getElementsByClassName("Card")[1].style.display=='grid')
        {
            document.getElementsByClassName("Card")[0].style.display='none';
            document.getElementsByClassName("Card")[1].style.display='none';
            document.getElementsByClassName("Card")[2].style.display='grid';
        }
         document.getElementsByClassName("Card")[2].style.display='grid';
});

}
function cardOpen()
{
    const Cards = document.querySelectorAll(".Card");
    Cards.forEach(function (card)
    {
         if(card.style.display=='none')
             {
                 let citem = card.querySelector('.item3');
                 citem.style.height=`15vh`;
             }
    });
}
var tg = window.Telegram.WebApp;
tg.expand();

