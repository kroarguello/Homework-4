function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }

//Function Click for start the test and continue with questions
var estado = 0;
var button2El = document.querySelector("#button2");
var questionTest = ["Como se llama el gato","Como se llama el perro", "Que color es el gato", "Que partes tiene el gato", "Que color son los ojos"]
var question0 = ["Leopoldo","Vigotes","Mishi","Cowy" ];
var question1 = ["Lukas","Coffee","Spike","Blue" ];
var question2 = ["blanco","anaranjado","negro","gris" ];
var question3 = ["orejas","patas","cola","todas" ];
var question4 = ["rojos","amarillos","negro","Morados" ];


var answerEl = document.querySelector("#answer")
var questionEl = document.querySelector("#questions")
var i=0;
    
       
button2El.addEventListener("click", function(){
    if(estado == 0){
        alert("You are going to start you knowledge Test, Are you ready ?");
        estado++;
        firstanswer();     
        
        i++;  
             }
        
    else {

        
        questionEl.textContent = questionTest[i];
         
        secondanswer();
        i++;

                if(i > questionTest.length){
                    alert("se termino");
                    estado=0;
                    button2El.textContent = "Lets Do It !!";
                    questionEl.textContent = "Do you want to do the Knowledge Test";
                    i=0;
        
               }
        }
  })

    


function firstanswer (){
    questionEl.textContent = questionTest[i];
    button2El.textContent ="next";

    for(var x=0; x < question0.length; x++){
        var question011 = document.createElement ("input");
        question011.setAttribute( "name", "pregunta" );    
        question011.setAttribute("type","radio");
        question011.setAttribute("value", question0[x]);    
        
        var lab001=document.createElement("span" );
        lab001.textContent = question0[x] + "";
      

        answerEl.appendChild(question011);
        answerEl.appendChild(lab001);
    }

}

function secondanswer(){
    

    if (i == 1 ) {
    
    for(var x=0; x < question1.length; x++){
        var question011 = document.createElement ("input");
        question011.setAttribute( "name", "pregunta" );    
        question011.setAttribute("type","radio");
        question011.setAttribute("value", question1[x]);    
        
        var lab001=document.createElement("span" );
        lab001.textContent = question1[x] + "";

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
                lab001.textContent = question3[x] + "";
      
        
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
                    lab001.textContent = question4[x] + "";
            
                    answerEl.appendChild(question011);
                    answerEl.appendChild(lab001);
                }
            
                }   
             
      


}



