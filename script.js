
// Timer
function timerStart() {
      
 var timerEl = document.querySelector("#timer");
 var timeLeft = 40;

  var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;
 
    if (timeLeft === 0) {
      timerEl.textContent = "Finish";
      clearInterval(timeInterval);
    }

  }, 1000);
  }



//Function Click for start the test and continue with questions
var estado = 0;
var button2El = document.querySelector("#button2");
var questionTest = ["1 ) How do you declare a variable"," 2 ) What is a class", " 3 ) What is a Id", " 4 ) How do you return a sum in a function", "5 ) How do you give color to the background"]
var question0 = ["var variable","var nameofVariable","variableName=8","var variableName=8" ];
var question1 = ["Class brown",".brown{}","#brown",".clase" ];
var question2 = [".IdofElement",".ElemenId","#nameId","var Id" ];
var question3 = ["return (a+b)","return the sum;","sum ()","All of them" ];
var question4 = ["color of bacground is blue","background-color: white;","background: this is white","none" ];
var getScorepQ = 0;
var pointGood = 0;


var answerEl = document.querySelector("#answer")
var questionEl = document.querySelector("#questions")
var i=0;
    
       
button2El.addEventListener("click", function(){
    if(estado == 0){
        alert("You are going to start you knowledge Test, Are you ready ?");
        estado++;
        timerStart();
        firstanswer();     
        
        i++;  
             }
        
    else {

        
        questionEl.textContent = questionTest[i];
        score();
        secondanswer();
        
        i++;

    if(i > questionTest.length){
         var initials = prompt("No more questions, type your Initials");
                    
        //    localStorage.getItem("initials");
            var mio = localStorage.getItem(pointGood) ;
                    alert ( initials + " ,  Your score is " + mio );
                    estado=0;
                    button2El.textContent = "Lets Do It !!";
                    questionEl.textContent = "Do you want to do the Knowledge Test";
                    i=0;
        
               }
        }
  })



    
// Questions and Answers

function firstanswer (){
    questionEl.textContent = questionTest[i];
    button2El.textContent ="Next question";
    
    for(var x=0; x < question0.length; x++){
        var question011 = document.createElement ("input");
        question011.setAttribute( "name", "pregunta" );    
        question011.setAttribute("type","radio");
        question011.setAttribute("value", question0[x]);    
        
        var lab001=document.createElement("span" );
        lab001.textContent = question0[x] + "";
        
        var newdiv = document.createElement("div");
        
        answerEl.appendChild(newdiv);
        answerEl.appendChild(question011);
        answerEl.appendChild(lab001);
    }

}

function secondanswer(){
    
    answerEl.textContent="";
    if (i == 1 ) {
    
    for(var x=0; x < question1.length; x++){
        var question011 = document.createElement ("input");
        
        question011.setAttribute( "name", "pregunta" );    
        question011.setAttribute("type","radio");
        question011.setAttribute("value", question1[x]);    
        
        var lab001=document.createElement("span" );
        lab001.textContent = question1[x] + "";
        var newdiv = document.createElement("div");
        
        answerEl.appendChild(newdiv);
        answerEl.appendChild(question011);
        answerEl.appendChild(lab001);
    }

    }


    if (i == 2 ) {
    
        for(var x=0; x < question2.length; x++){
            var question011 = document.createElement ("input");
            question011.setAttribute( "name", "pregunta" );    
            question011.setAttribute("type","radio");
            question011.setAttribute("value", question2[x]);    
            
            var lab001=document.createElement("span" );
            lab001.textContent = question2[x] + "";
            var newdiv = document.createElement("div");
        
            answerEl.appendChild(newdiv);
            
            answerEl.appendChild(question011);
            answerEl.appendChild(lab001);
        }
    
        }

        if (i == 3 ) {
    
            for(var x=0; x < question3.length; x++){
                var question011 = document.createElement ("input");
                question011.setAttribute( "name", "pregunta" );    
                question011.setAttribute("type","radio");
                question011.setAttribute("value", question3[x]);    
                
                var lab001=document.createElement("span" );
                lab001.textContent = question3[x];
                var newdiv = document.createElement("div");
        
               answerEl.appendChild(newdiv); 
               answerEl.appendChild(question011);
               answerEl.appendChild(lab001);
            }
        
            }


            if (i == 4 ) {
    
                for(var x=0; x < question4.length; x++){
                    var question011 = document.createElement ("input");
                    question011.setAttribute( "name", "pregunta" );    
                    question011.setAttribute("type","radio");
                    question011.setAttribute("value", question4[x]);    
                    
                    var lab001=document.createElement("span" );
                    lab001.textContent = question4[x];
            
                    var newdiv = document.createElement("div");
        
                    answerEl.appendChild(newdiv);
                    answerEl.appendChild(question011);
                    answerEl.appendChild(lab001);
                }
            
                }   
             
}



//Get Score if CORRECT or INCORRECT answer


function score(){

  var elementos = document.getElementsByName("pregunta");
  

  for(var y=0; y<elementos.length;y++){
     var elementoValue = elementos[y].value;
     var elementoSelecc = elementos[y].checked;
     if (elementoSelecc == true ){

        if ( getScorepQ == 0 && elementos[3].checked == true ) {
            pointGood++;
            var messpoint = " CORRECT answer !!!";
            getScorepQ++;
            
        }else if (getScorepQ == 1 && elementos[1].checked == true){
            pointGood++;
            var messpoint = " CORRECT answer !!!";
            getScorepQ++;

        }else if (getScorepQ == 2 && elementos[2].checked == true){
            pointGood++;
            var messpoint = " CORRECT answer !!!";
            getScorepQ++;
        }else if (getScorepQ == 3 && elementos[0].checked == true){
                pointGood++;
                var messpoint = " CORRECT answer !!!" ;
                getScorepQ++;
            } else if (getScorepQ == 4 && elementos[1].checked == true){
                pointGood++;
                var messpoint = " CORRECT answer !!!";
                getScorepQ++;
            }

        else{
            var messpoint = " INCORRECT answer."
            getScorepQ++;
        }



        alert( " Your answer is   :   " + elementos[y].value + "\n That is a  : " + messpoint );
     }
  
        

  }

  alert ("Your score is " + pointGood);

}

function stopQuestions (){




}



