const msgRomantic = ["Tudo o que eu precisava encontrei em você.",
"Se você não existisse, eu te inventaria.",
"E tem como não sorrir quando me lembro de você?",
"Estranho seria se eu não me apaixonasse por você.",
"Sabe o que combina com você? Eu."]

const msgFunny = ["O álcool não resolve nenhum problema, mas o leite também não!",
"A vida é curta. Sorria enquanto você ainda tem dentes!" ,
"Se ferradura desse sorte, burro não puxava carroça!",
"Evite a ressaca, mantenha-se bêbado!",
"No fundo, no fundo, é bem fundo!"]

const msgMotivational = [ "A persistência é o caminho do êxito.",
"Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.",
"Faça da dificuldade a sua motivação. ",
"As críticas são a motivação para o sucesso.",
"O caminho pra perfeição é fazer da dificuldade uma motivação." ]

document.getElementsByClassName("generator-button")[0].addEventListener('click', teste = () => {

    const inputRadios = document.getElementsByName("typeOfMessage");
    let valueInput = ""
    const modal = document.getElementsByClassName('modal-area')[0]
    
    for ( i = 0; i < inputRadios.length; i++) {
        if (inputRadios[i].checked) {
            valueInput = inputRadios[i].value
            modal.style.display = "block"
        }
    }


    if( valueInput == ""){
        for( i = 0 ; i<=3; i++){
            document.querySelectorAll(".categories-button")[i].style.border = "2px solid red"
        }
    } else if (valueInput === "romantic") {
        document.getElementsByClassName("message")[0].innerHTML = ` " ${msgRomantic[Math.floor(Math.random()* msgFunny.length)]} "` 
        modal.style.background = "linear-gradient(90deg, var(--first-romantic-color), var(--second-romantic-color))"
       
    } else if (valueInput === "funny") {
        document.getElementsByClassName("message")[0].innerHTML = ` " ${msgFunny[Math.floor(Math.random()* msgFunny.length)]} "`
        modal.style.background = "linear-gradient(90deg, var(--first-funny-color), var(--second-funny-color))"
      
    } else {
        document.getElementsByClassName("message")[0].innerHTML = ` " ${msgMotivational[Math.floor(Math.random()* msgFunny.length)]} "`
        modal.style.background = "linear-gradient(90deg, var(--first-motivational-color), var(--second-motivational-color))"
      
    }

    document.getElementsByClassName("close-modal")[0].addEventListener('click', vai = () => {   
        modal.style.display = "none"
        for( i = 0 ; i<=3; i++){
            document.querySelectorAll(".categories-button")[i].style.border = "1px solid black"
        }
    })

})


window.addEventListener("load", function () {
    const loader = document.querySelector(".loadingPage");
    loader.className += " hidden"; 
});


