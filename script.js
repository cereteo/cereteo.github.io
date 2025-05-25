document.addEventListener('DOMContentLoaded', () => {
    const waxSeal = document.getElementById('waxSeal');
    const letterFront = document.querySelector('.letter-front');
    const letterContent = document.getElementById('letterContent');
 
    waxSeal.addEventListener('click', () => {
        // Applica la classe 'opened' al fronte della lettera per farlo scomparire
        letterFront.classList.add('opened');
 
        // Rende il contenuto della lettera visibile dopo un breve ritardo per la transizione
        setTimeout(() => {
            letterContent.classList.add('visible');
        }, 500); // Questo ritardo dovrebbe corrispondere o essere leggermente inferiore alla durata della transizione di opacity del letter-front
    });
});