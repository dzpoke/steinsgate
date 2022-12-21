let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("global-slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}

/*Selecao de caracteristicas dos personagens*/

/*Capturando o perfil selecionado*/

// const btnProfile = [...document.querySelectorAll('.btn-personagens-descricao')]

// console.log(btnProfile)



// const slctPersona = document.querySelector('.btn-personagens-descricao')

const slctPersonagens = [...document.querySelectorAll('.btn-personagens-descricao')]

/*Capturando o personagem selecionado*/

function returnProfile() {

    slctPersonagens.map((el)=>{

        el.addEventListener('click',()=>{
            
            Profile = el.classList[1]

            switch (Profile){

                case 'Rintaro_Profile':
                    let desRitaro = document.querySelector('.description1').innerHTML = 'Rintaro Okabe (岡部 倫太郎, Okabe Rintarō ? ), frequentemente apelidado de Okarin (オカリン) ou Hououin Kyouma (鳳凰院凶真, Hououin Kyōma ), é um autoproclamado cientista louco e o principal protagonista da série Steins;Gate.'
                    let apprRitaro = document.querySelector('.description2 p').innerHTML= 'Okabe tem as características de um jovem esguio, com mandíbula quadrada e bochechas ossudas. Ele tem o cabelo preto curto penteado para trás e tem íris marrons, com uma pequena barba por fazer no queixo e nas bochechas. Rintaro também usa um jaleco que chega até as canelas, sobre uma camiseta branca lisa (cinza claro no anime) e calça cáqui.'
                    
                    console.log('Personagem selecionado ' + Profile)
                    
                    break
            
                case 'Kurisu_profile':
                    let bioKurisu = document.querySelector('.description1').innerHTML = 'Kurisu Makise (牧瀬紅莉栖Makise Kurisu ? ) é filha de Shouichi Makise , uma garota genial que se formou na universidade aos dezessete anos, e membro do Brain Science Institute da Viktor Chondria University e do Future Gadget Lab .'
                    let apprKurisu = document.querySelector('.description2 p').innerHTML= 'Kurisu é uma jovem esguia com cabelos castanhos na altura da cintura e olhos violeta opacos. Os cabelos, que ela prefere soltar, variam em tons de ruivo, do mogno ao ruivo. A cor de seu cabelo difere consideravelmente no anime (vermelho) do VN original (castanho), embora seja apenas na aparência artística.'
            
                    console.log('Personagem selecionado ' + Profile)
                    break
                case 'Daru_profile':
                    let bioDaru = document.querySelector('.description1').innerHTML = 'Itaru Hashida (橋田 至, Hashida Itaru ), também conhecido por seu apelido Daru , seu identificador online DaSH ("Daru the Super Hacker") e Barrel Titor , é um personagem principal em Steins;Gate e Steins;Gate 0 . Ele é um hacker experiente e um otaku hardcore, membro do Future Gadget Lab e amigo próximo de Rintaro Okabe , que eventualmente se torna marido de Yuki Amane e pai de Suzuha Amane.'
                    let apprDaru = document.querySelector('.description2 p').innerHTML= 'Daru é um cara baixo e gordo que precisa de óculos para enxergar. Ele sempre usa uma camiseta verde escuro/oliva e um par de jeans azul junto com seu boné amarelo característico. Em um dos episódios da adaptação do anime, Daru é visto vestindo uma camisa havaiana amarela.'
              
                    console.log('Personagem selecionado ' + Profile)
                    break
                default:
                    console.log('Nao Encontrado')
            }
        })
    })
}

returnProfile()