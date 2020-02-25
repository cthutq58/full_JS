window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a = 1) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent();

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        console.log(target.classList);
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer

    let deadline = '2020-03-21';
    
    // console.log(new Date(deadline));
    // console.log(new Date(deadline).valueOf());
    // console.log(Date.parse(deadline));
    // console.log(new Date(deadline).toString());
    // console.log(new Date(deadline).toISOString());
    console.log(Date());
    console.log(new Date());
    console.log(new Date().toDateString());
    console.log(Date().valueOf());
    console.log(new Date().valueOf());
    console.log(Date.parse(new Date()));
    console.log(new Date().toString());
    console.log(new Date().toISOString());
    console.log(new Date().toJSON());
    console.log(new Date().toTimeString());
    // console.log(new Date().toISOString().match(/\d{4}-\d{2}-\d{2}/g));
    console.log(new Date().toISOString().split('T'));
    console.log(new Date().toJSON().split('T'));
    // console.log(new Date().toISOString().match(/\d{2}:\d{2}:\d{2}/g));
    // console.log(new Date().toISOString().match(/\d{2}/g));
 

    function getTimeRemaining(endtime) {
        // let t = Date.parse(endtime) - Date.parse(new Date()),
        let t = Date.parse(endtime) - new Date().valueOf(),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
            
        function updateClock() {
            let t = getTimeRemaining(endtime);

            // function addZero(num){
            //             if(num <= 9) {
            //                 return '0' + num;
            //             } else return num;
            //         };

            // hours.textContent = addZero(t.hours);
            // minutes.textContent = addZero(t.minutes);
            // seconds.textContent = addZero(t.seconds);

            hours.textContent = ('0' + t.hours).slice(-2);
            minutes.textContent = ('0' + t.minutes).slice(-2);
            seconds.textContent = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);   
});
