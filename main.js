$(document).ready(function(){
    var first_card = null;
    var second_card = null;
    $(document).on('click','.card .card-face',function(){
        let matched = $(this).parent().hasClass('matched');
        let flipped_count = $('.card.flipped').length;
        if(matched) return false;
        let flipped = $(this).parent().hasClass('flipped');
        if(flipped){

        }else{
            $(this).parent().addClass('flipped');
            flipped_count = $('.card.flipped').length;
            if(flipped_count === 1){
                first_card = $(this);
            }else if(flipped_count == 3){
            }else if(flipped_count === 2){
                second_card = $(this);
                //console.log(first_card);
                let first_card_style = first_card.parent().children('.card-front').attr('style');
                let last_card_style = second_card.parent().children('.card-front').attr('style');
                
                if(first_card_style == last_card_style){
                    setTimeout(function(){
                        first_card.parent().removeClass('flipped').addClass('matched');
                        second_card.parent().removeClass('flipped').addClass('matched');
                    },1500);
                }else{
                    setTimeout(function(){
                        $('.flipped').removeClass('flipped');
                        //second_card.parent().removeClass('flipped');
                    },1500);
                }
            }else{

            }
        }
        //$(this).parent().toggleClass('flipped');
    });

    $(document).on('click','#start_game ',function(){
        $('.game-container').html('');
        let images2 = images;
        images2 = images2.concat(images);
        shuffle(images2);
        $.each(images2, function( index, image ) {
            //console.log(image);
          let current_image = ` <div class="card"><div class="card-back card-face">

                 </div>
                <div class="card-front card-face" style="background-image:url(./`+image.image+`);">
                
                </div>
            </div>`;
            $('.game-container').append(current_image);
        });
    });
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
}
//Math.floor(Math.random() * 10);

//if(.flipped == .card-front card-face)







































const images = [
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
            },
            {
                id:9,
                image:"fry.png"
            }
            ];
/*console.log(images);







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

cards.forEach(card => card.addEventListener('click', flipCard)) */