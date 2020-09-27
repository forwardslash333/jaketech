/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as they wish. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var GlobalScore, RoundScore, PlayerTurn, Dice;      //Here game variables needed are declared 
Initialize();

function Initialize(){
    GlobalScore = [0,0];                                //This array stores the Overall scores of both players
    RoundScore = 0 ;                                    //This variable stores the current round score of players
    PlayerTurn = 0;                                     //This variable stores the player turn, 0 for player 1 (same in array position) and 1 for Player 2.
//console.log(Dice);
    document.querySelector('#score-0').textContent = 0;                        //Selecting an id then changing its text content
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;

    document.querySelector('#name-0').textContent = 'PLAYER 1';
    document.querySelector('#name-1').textContent = 'PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';

//document.querySelector('#score-' + PlayerTurn).innerHTML = '<em>'+ Dice + '</em>' ;       //Making changes to innerHTML
//var x = document.querySelector('#score-1').textContent;             //reading and storing a value from an element
//console.log(x);                                                     
    document.querySelector('.dice').style.display = 'none';             //Changes the inline css dice
}

function PlayerChange(){
    RoundScore = 0;
    document.querySelector('#current-' + PlayerTurn).textContent = RoundScore;
    

    if (PlayerTurn == 0){
        PlayerTurn += 1;            
    }        else{
        PlayerTurn -= 1;
    }

    
}

document.querySelector('.btn-new').addEventListener('click', function (){
    Initialize();
    document.querySelector('.dice').style.display = 'none';

    document.querySelector('.player-0-panel').classList.add('active');          //Player 1 is default active 
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('#score-' + PlayerTurn).textContent = 00 ;
    document.querySelector('#current-' + PlayerTurn).textContent = 00 ;

    PlayerChange();

    document.querySelector('#score-' + PlayerTurn).textContent = 00 ;
    document.querySelector('#current-' + PlayerTurn).textContent = 00 ;

    PlayerTurn = 0;

});



document.querySelector('.btn-roll').addEventListener( 'click' , function () {
        
    Dice = Math.floor(Math.random() * 6) + 1;                            //Rolls dice and generates random value between 1 and 6

    document.querySelector('.dice').src = 'dice-'  + Dice + '.png';      //Changes the Dice number
    document.querySelector('.dice').style.display = 'block';             //Displays the Dice back
    console.log(Dice);                                                   //Displays dice value in console 
    
    
    if (Dice != 1) {                                                                    //If Dice is not one then score is added to roundscore
        RoundScore += Dice;
        document.querySelector('#current-' + PlayerTurn).textContent = RoundScore;
    }    else{                                                                          //When Dice gives 1 the roundscore is zero and player turn changes
        RoundScore = 0;
        document.querySelector('#current-' + PlayerTurn).textContent = RoundScore;
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        PlayerChange();
    }    
});

document.querySelector('.btn-hold').addEventListener('click', function (){
    GlobalScore[PlayerTurn] += RoundScore ;

    if (GlobalScore[PlayerTurn] >= 20) {
        
        
        document.querySelector('#name-' + PlayerTurn).textContent = 'WINNER!!!';
        document.querySelector('.player-' + PlayerTurn + '-panel').classList.add('winner');
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';

        document.querySelector('#score-' + PlayerTurn).textContent = GlobalScore[PlayerTurn];

        document.querySelector('.player-' + PlayerTurn + '-panel').classList.remove('active');
        


    } else{

    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('#score-' + PlayerTurn).textContent = GlobalScore[PlayerTurn];

    PlayerChange();
    }
});



