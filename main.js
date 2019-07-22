
/*const images = [
            {
                id:1,
                image:"rob.png"
            },
            {
                id:2,
                image:"reeves.png"
            },
            {
                id:3,
                image:"willy.png"
            },

            {
                id:4,
                image:"confused.png"
            },

            {
                id:5,
                image:"grumpy.png"
            },

            {
                id:6,
                image:"king.png"
            },

            {
                id:7,
                image:"dwight.png"
            },

            {
                id:8,
                image:"kanye.png"
            }];
console.log(images);







const cards = document.querySelectorAll(".memorycard");

function flipCard() {
    this.classList.toggle('flip');

    if(!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
        else {
        //second click
        hasFlippedCard = false;
        secondCard = this;

        //do cards match?
        if(firstcard.dataset.framework ===
            secondCard.dataset.framework);
        }
    }
}

cards.forEach(card => card.addEventListener('click', flipCard)) 