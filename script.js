ymaps.ready(init);

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
let startY = null;

  const cards = document.querySelectorAll(".card");
  const text = document.querySelector(".text");

    cards.forEach(function (card)
    {
            card.addEventListener('touchstart',(event)=>{
        const firstTouch = event.touches[0].clientY;
        startY = firstTouch;
    });
          card.addEventListener('touchmove', (event) => {
        let MoveY = event.touches[0].clientY;
        if(startY>MoveY && text.style.height != `100%`)
            {
                if(startY-MoveY > 20)
                    {
                        card.style.height =`60vh`;
                        card.style.bottom =`0px`;
                        card.style.transform =`none`;
                        text.style.height=`100%`;
                    }
                 else
                 {
                    card.style.transform =`translate(0px, -${startY-MoveY}px)`;
                 }
            }
        if(text.style.height == `100%`)
            {
                if(startY-MoveY < 70)
                    {
                        card.style.height =`30vh`;
                        card.style.bottom =`0px`;
                        card.style.transform =`none`;
                        text.style.height=`70%`;
                    }
            }


});

    });




placemark.events.add('click', function () {

    if(document.getElementsByClassName("card")[1].style.display=='block' || document.getElementsByClassName("card")[2].style.display=='block')
        {
            document.getElementsByClassName("card")[1].style.display='none';
            document.getElementsByClassName("card")[2].style.display='none';
            document.getElementsByClassName("card")[0].style.display='block';
        }
        document.getElementsByClassName("card")[0].style.display='block';

});

    placemark1.events.add('click', function () {


       if(document.getElementsByClassName("card")[0].style.display=='block' || document.getElementsByClassName("card")[2].style.display=='block')
        {
            document.getElementsByClassName("card")[0].style.display='none';
            document.getElementsByClassName("card")[2].style.display='none';
            document.getElementsByClassName("card")[1].style.display='block';
        }
         document.getElementsByClassName("card")[1].style.display='block';
});
    placemark2.events.add('click', function () {
    if(document.getElementsByClassName("card")[0].style.display=='block' || document.getElementsByClassName("card")[1].style.display=='block')
        {
            document.getElementsByClassName("card")[0].style.display='none';
            document.getElementsByClassName("card")[1].style.display='none';
            document.getElementsByClassName("card")[2].style.display='block';
        }
         document.getElementsByClassName("card")[2].style.display='block';
});

}
var tg = window.Telegram.WebApp;
tg.expand();

