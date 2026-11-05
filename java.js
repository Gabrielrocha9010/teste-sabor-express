const dark = document.getElementById("troca");

dark.addEventListener("click", function(){
    document.body.classList.toggle("dark");
})


const p1 = document.getElementById("paragrafo1");
    const p2 = document.getElementById("paragrafo2");

    const texto1 = "O melhor sabor,";
    const texto2 = "no conforto da sua casa!";

    let index1 = 0;
    let index2 = 0;
    
    const velDigitar = 100; 
    const velApagar = 50;   
    const pausaExibicao = 2500; 
       
    function digitarP1() {
        if (index1 < texto1.length) {
            p1.textContent += texto1.charAt(index1);
            index1++;
            setTimeout(digitarP1, velDigitar);
        } else {
            setTimeout(digitarP2, 200); 
        }
    }   
    function digitarP2() {
        if (index2 < texto2.length) {
            p2.textContent += texto2.charAt(index2);
            index2++;
            setTimeout(digitarP2, velDigitar);
        } else {
           
            setTimeout(apagarP2, pausaExibicao);
        }
    }   
    function apagarP2() {
        if (index2 > 0) {
            p2.textContent = texto2.substring(0, index2 - 1);
            index2--;
            setTimeout(apagarP2, velApagar);
        } else {
            setTimeout(apagarP1, 100); 
        }
    }
    function apagarP1() {
        if (index1 > 0) {
            p1.textContent = texto1.substring(0, index1 - 1);
            index1--;
            setTimeout(apagarP1, velApagar);
        } else {  
            setTimeout(digitarP1, 500); 
        }
    }  
    p1.textContent = "";
    p2.textContent = "";
    window.onload = digitarP1;