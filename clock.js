let hour = document.querySelector('#hour');
        let minute = document.querySelector('#minute');
        let second = document.querySelector('#second');

        //Je stock la class Date crée par JS dans ma variable 
        
        setInterval(() => {

            let day = new Date();
            let hh = day.getHours() * 30;
            let min = day.getMinutes() * 6;
            let sec = day.getSeconds() * 6;

            hour.style.transform = `rotateZ(${hh+(min/12)}deg)`;
            minute.style.transform = `rotateZ(${min}deg)`;
            second.style.transform = `rotateZ(${sec}deg)`;

            //Digital Clock
            let hours = document.getElementById('hours');
            let minutes = document.getElementById('minutes');
            let seconds = document.getElementById('seconds');
            let ampm = document.getElementById('ampm');

            let h = new Date().getHours();
            let m = new Date().getMinutes();
            let s = new Date().getSeconds();

            let am = h >= 12 ? "PM" : 'AM';

            //convert 24 hours to 12 hours
            if (h >12) {
                h = h -12;
            }

            //Ajout d'un zero avant un chiffre seul
            h = (h < 10 ) ? "0" + h : h;
            m = (m < 10 ) ? "0" + m : m;
            s = (s < 10 ) ? "0" + s : s;

            hours.innerHTML = h;
            minutes.innerHTML = m;
            seconds.innerHTML = s;
            ampm.innerHTML = am;
        })

       