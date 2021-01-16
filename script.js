
var scores, roundScore, activePlayer,dice1,dice2, gamePlaying,recentScore,temp;

init();

document.querySelector('.btn--roll').addEventListener('click',function(){

    if(gamePlaying){

     // random number
    dice1 = Math.floor(Math.random()*6+1);
    dice2 = Math.floor(Math.random()*6+1);
     // display the result
    var dice1DOM = document.querySelector('#dice-1');
    var dice2DOM = document.querySelector('#dice-2'); 
    dice1DOM.style.display = 'block';
    dice1DOM.src ='dice-'+dice1 + '.png';
    dice2DOM.style.display = 'block';
    dice2DOM.src ='dice-'+dice2 + '.png';
    // update the round score if the rolled number was not a 1
    
    //if player roll 2 6 the all score round up
    if(dice1 ===6 && dice2 ===6 ){
        scores[activePlayer] = 0;
        document.querySelector('#score--'+activePlayer).textContent = scores[activePlayer]
    }
    
    else if(dice1 !== 1 &&dice2 !== 1){
         // add score
         roundScore += dice1+dice2;
         document.querySelector('#current--' + activePlayer).textContent = roundScore;
     }
     else{
         // next player
         // change active player
         nextPlayer();   
     }
    }

});

document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer]+=roundScore;
        document.querySelector('#score--'+activePlayer).textContent = scores[activePlayer]
       
       var input = document.querySelector('.final-score').value;
       var winningScor
       if(input){
        winningScore =  input;
       }
       else{
        winningScore =  100;
       }
        // check if the player won
        if(scores[activePlayer]>=winningScore){
            gamePlaying = false;
            document.querySelector('#name--'+activePlayer).textContent = 'Winner';
            document.querySelector('.player--'+activePlayer).classList.add( 'player--winner');
            document.querySelector('.player--'+activePlayer).classList.remove( 'player--active');
            document.getElementById('current--'+activePlayer).textContent = '0'; 
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
        }
        else{
        // change active player
        nextPlayer();
        }
    }

});

// new game
document.querySelector('.btn--new').addEventListener('click',init);

function nextPlayer(){
    roundScore = 0;
    document.querySelector('.player--0').classList.toggle( 'player--active');
    document.querySelector('.player--1').classList.toggle( 'player--active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0'; 
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
}

function init() {
    scores = [0,0];
    recentScore = [0,0]
    activePlayer =0 ;
    roundScore =0 ;
    gamePlaying = true;
    // clear score
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.add( 'player--active');
    document.querySelector('.player--1').classList.remove( 'player--active');
    document.querySelector('.player--0').classList.remove( 'player--winner');
    document.querySelector('.player--1').classList.remove( 'player--winner');
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    document.querySelector('.final-score').value = null;
}



