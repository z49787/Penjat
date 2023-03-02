


            var x = 7;
            var paraula = "";
            var letras = "";
            var parabla1 =["fetge", "forca", "jutges", "mengen", "penjat", "quinta", "setze"];
    
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
