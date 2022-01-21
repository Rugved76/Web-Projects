// Rps function

//                                    *** Function combining all the other functions ***


function rpsgame(yourchoice)
{
    console.log(yourchoice);
    var humanchoice;
    var botchoice;
    humanchoice=yourchoice.id
    botchoice=numtochoice(randtorpsint());
    console.log('computer choice : ',botchoice)
    results = decidewinner(humanchoice,botchoice);
    console.log(results);
    message = finalmessage(results);
    console.log(message);
    rpsfrontend(yourchoice.id,botchoice,message);
}

//                                    *** Function to chose random number ***

function randtorpsint()
{
    return Math.floor(Math.random()*3);
}

//                                     *** Function to convert number into choice


function numtochoice(number)
{
    return ['rock','paper','scissor'][number]
}

//                                      *** Function to decide winner


function decidewinner(yourchoice,computerchoice)
{
    var rpsdb={
        'rock':{'scissor':1 ,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,scissor:0},
        'scissor':{'paper':1, 'scissor':0.5,'rock':0}
    }
    var yourscore = rpsdb[yourchoice][computerchoice]
    var computerscore = rpsdb[computerchoice][yourchoice]
    
    return [yourscore,computerscore];
}

//                                            *** Final Message Function ***


function finalmessage([yourscore,computerscore])
{
    if (yourscore===0) 
    {
        return {'message':'You lost!','color':'red'};
    }
    else if(yourscore===0.5)
    {
        return {'message':'Match Tied','color':'yellow'};
    }
    else{
        return {'message':'You Won!!','color':'green'};
    }
}

//                                   *** FrontEnd Function ***


function rpsfrontend(humanimagechoice,botimagechoice,finalmessage)
{
    var imagedb = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }

    // Removes all the images

    document.getElementById('rock').remove();
    document.getElementById('scissor').remove();
    document.getElementById('paper').remove();

    var humandiv =document.createElement('div');
    var botdiv =document.createElement('div');
    var messagediv =document.createElement('div');

    humandiv.innerHTML = "<img src='" + imagedb[humanimagechoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messagediv.innerHTML= "<h1 style='color: "+ finalmessage['color']+"; font-size:60px; padding: 30px; '>"+finalmessage['message']+"</h1>"
    botdiv.innerHTML = "<img src='" + imagedb[botimagechoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"
    
    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    document.getElementById('flex-box-rps-div').appendChild(messagediv);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);
}