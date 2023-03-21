
//var globales
var x = 7;
var paraula = "";
var letras = "";

var parabla1 =["fetge", "forca", "jutges", "mengen", "penjat", "quinta", "setze","cordes"];
var pista =["Setze jutges d,un jutgat mengen fetge d'un penjat","A la quinta forca",
    "A ca un penjat, no hi anomenis cordes"];
var palabrapista = [0,1,0,0,0,1,0,3];

var taula =
    [{"parabla1": "fetge", "pista": "Setze jutges d,un jutgat mengen fetge d'un penjat"},
    {"parabla1": "forca", "pista":"A la quinta forca"},
    {"parabla1": "jutges", "pista":"Setze jutges d,un jutgat mengen fetge d'un penjat"},
    {"parabla1": "mengen", "pista":"Setze jutges d,un jutgat mengen fetge d'un penjat"},
    {"parabla1": "penjat", "pista":"Setze jutges d,un jutgat mengen fetge d'un penjat"},
    {"parabla1": "quinta", "pista":"A la quinta forca"},
    {"parabla1": "setze", "pista":"Setze jutges d,un jutgat mengen fetge d'un penjat"},
    {"paraula1": "setze", "pista":"A ca un penjat, no hi anomenis cordes"}
    ]
var aleatorio= Math.floor(Math.random() * parabla1.length);
var paraula = palabra1[aleatorio];
var pista = pista[palabrapista[aleatorio]];

var palabra1 = taula[aleatorio].parabla1;
var pista= taula[aleatorio].pista;

const idiomas = [{

"IdIdioma":	"ca",
"Titol":	"Versió amb Estructures de Dades Joc del Penjat",
"Versio":	"Versió β Joc del Penjat",
"Input":	"Escriu una lletra minúscula",
"Pregunta":	"Anam a la quinta forca?",
"Comprovar":	"Comprovar",
"Paraula":	"Paraula",
"Sopes":	"Demanes sopes?",
"Pista":	"Pista",
"Vides":	"Vides",
"Moix":         "Un moix en té set?",
"Lletres":	"Lletres",
"Ets":          "Ets de lletres?",
"URLpistes":	"URLpistes",
"Dita":         "Dita",
"Dita1":	"A la quinta forca,",
"Dita2":	"A ca un penjat, no hi anomenis cordes,", 
"Dita3":	"Setze jutges d'un jutjat mengen fetge d'un penjat, …",
"Credits":	"Crèdits",
"YouTube":	"Joc Penjat on Scratch",
"Wikis":	"Penjat",
"Idioma":	"en Català",
"Diccionari":	"Diccionari",
"Teclat":	"Mostra o Amaga",
"Incorrecte":	"Caràcter incorrecte!",
"Repetida":	"Lletra repetida!",
"Encertat":	"Has encertat!",
"Guanyat":	"i has guanyat!",
"Fallat":	"Has fallat!",
"Perdut":	"i has perdut!",
"Descansi":	"En pau descansi – RIP!",
"Puntuacio":	"Puntuació"
},
{
"IdIdioma":	"es",
"Titol":	"Versión con Estructuras de Datos Juego del Ahorcado",
"Versio":	"Versión β Juego del Ahorcado",
"Input":	"Escribe una letra minúscula",
"Pregunta":	"Vamos al quinto pino?",
"Comprovar":	"Comprobar",
"Paraula":	"Palabra",
"Sopes":	"Te rindes?",
"Pista":	"Pista",
"Vides":	"Vidas",
"Moix":         "Un gato tiene siete?",
"Lletres":	"Letras",
"Ets":          "Eres de letras?",
"URLpistes":	"URLpistas",
"Dita":         "Dicho",
"Dita1":	"Al quinto pino." ,
"Dita2":	"En casa un ahorcado, no hables de cuerdas,",
"Dita3":	"Dieciséis jueces de un juzgado comen hígado de un ahorcado, …",
"Credits":	"Crèditos",
"YouTube":	"Juego Ahorcado on Scratch",
"Wikis":	"Ahorcado",
"Idioma":	"en Español",
"Diccionari":	"Diccionario",
"Teclat":	"Muestra o Esconde",
"Incorrecte":	"Carácter incorrecto!",
"Repetida":	"Letra repetida!",
"Encertat":	"Has acertado!",
"Guanyat":	"y has ganado!",
"Fallat":	"Has fallado!",
"Perdut":	"y has perdido!",
"Descansi":	"En paz descanse - RIP!",
"Puntuacio":	"Puntuación"

},
{
"IdIdioma":	"en",
"Titol":         "Hangman Game Images and Sounds Version",
"Versio":	"Hangman Game β Versión",
"Input":         "Write a lowercase letter",
"Pregunta":	"Are we going to the boondocks?",
"Comprovar":	"Check it",
"Paraula":	"Word",
"Sopes" :        "You give up?",
"Pista":         "Clue",
"Vides":         "Lives",
"Moix" :         "A cat has seven?",
"Lletres":	"Letters",
"Ets" :          "Are you in liberal arts?",
"URLpistes":	"URLclues",
"Dita":          "Saying",
"Dita1" :        "To the boondocks,",
"Dita2" :        "In a hanged man's home, don't talk about ropes,",
"Dita3" :        "Sixteen judges of a court eat the liver of a hangman, …",
"Credits":	"Credits",
"YouTube":	"Hangman Game on Scratch",
"Wikis":         "Hangman",
"Idioma":	"in English",
"Diccionari":	"Dictionary",
"Teclat":	"Show or Hide",
"Incorrecte":	"Wrong character!",
"Repetida":	"Repeated letter!",
"Encertat":	"You're right!",
"Guanyat":	"and you have won!",
"Fallat":	"You have failed!",
"Perdut":	"and you have lost!",
"Descansi":	"Rest in peace - RIP!",
"Puntuacio":	"Score"

}
]

    var parabla1 = parabla1[Math.floor(Math.random() * parabla1.length)];
    
    

    var adivinadas = [];
        
            for (var i =0; i < parabla1.length; i++) { 
                adivinadas[i] = "_";      
            }
            
    function Validar(){

            var lletra = document.getElementById("lletra").value;
            document.getElementById("lletra").value = '';
            

                        lletra = lletra.toLowerCase();
        switch(lletra) {
    case "á":
    case "à":
        lletra = "a";
            break;
    case "í":

    case "ï":

        lletra ="i";
            break;
    case "ó":
    case "ò":
        lletra = "o";
            break;
    case "è":
    case "é":
        lletra = "e";
            break;
    case "ú":

    case "ü":

        lletra = "u";
            break;
    }

        //alert(lletra);           
        paraula= paraula + lletra +" "
        document.getElementById("paraula").innerHTML = paraula;

        var pos = parabla1.indexOf(lletra);

             if (pos > -1)
            {
                document.getElementById("resultat").innerHTML = "Has acertado";
                alert("si");
                adivinadas[pos] = "";
            }
             else if (pos == -1)
            {
                document.getElementById("resultat").innerHTML = "Has fallado";
                x --;
                document.getElementById("x").innerHTML = x;


           } else {
               alert("Caracter incorrecte");
           }
               
            if (x == 6){document.getElementById("ahorcado_0").hidden = false;
                document.getElementById('bell_toll').play()
            }
            if (x == 5){document.getElementById("ahorcado_1").hidden = false;
                           document.getElementById("ahorcado_0").hidden = true;
                document.getElementById('bell_toll').play()
            }
            if (x == 4){document.getElementById("ahorcado_2").hidden = false;
                          document.getElementById("ahorcado_1").hidden = true;
                document.getElementById('bell_toll').play()
            }
            if (x == 3){document.getElementById("ahorcado_3").hidden = false;
                            document.getElementById("ahorcado_2").hidden = true;
                document.getElementById('bell_toll_x3').play()
            }
            if (x == 2){document.getElementById("ahorcado_4").hidden = false;
                            document.getElementById("ahorcado_3").hidden = true;
                document.getElementById('bell_toll').play()
            }
            if (x == 1){document.getElementById("ahorcado_5").hidden = false;
                            document.getElementById("ahorcado_4").hidden = true;
                document.getElementById('bell_toll').play()
            }
            if (x == 0){document.getElementById("ahorcado_6").hidden = false;
                          document.getElementById("ahorcado_5").hidden = true;
                document.getElementById('cat-fight').play()
                document.body.style.backgroundImage = "url('img/Castle2.png')";
                        document.getElementById("1").disabled = true;
                        document.getElementById("lletra").disabled = true;
                
            }
                
    }
    
    /*function audio(){ 
        switch (x){
                case 6,4,5:
                    document.getElementById('bell_toll').play()
                break;
                case 3,2,1:
                    document.getElementById('bell_toll_x3').play()
                break;
      }
    }*/
            
        function cargar(){      
            document.getElementById("ahorcado_1").hidden = true;
            document.getElementById("ahorcado_2").hidden = true;
            document.getElementById("ahorcado_3").hidden = true;
            document.getElementById("ahorcado_4").hidden = true;
            document.getElementById("ahorcado_5").hidden = true;
            document.getElementById("ahorcado_6").hidden = true;
            document.getElementById("ahorcado_0").hidden = true;
            document.getElementById("castillo").hidden = true;
            document.getElementById("gameover").hidden = true;
            
            document.getElementById("letras").innerHTML = adivinadas;
        }
