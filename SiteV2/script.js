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



// const slctPersona =document.querySelector('.btn-personagens-descricao')
const slctPersonagens =[...document.querySelectorAll('.btn-personagens-descricao')]

function retornaProfile(slctPersonagens) {
  return slctPersonagens.classList[1]
}

const t1 = slctPersonagens.map(retornaProfile)
console.log(t1)


slctPersona.addEventListener('click',()=>{

    let btnProfile = slctPersona.classList[1]
    console.log(btnProfile)

    switch (btnProfile){
    case 'Rintaro_Profile':
        let desRitaro = document.querySelector('.description1').innerHTML = ''
        
        console.log('Personagem selecionado' + desRitaro)
        break

    case 'Kurisu_profile':
        let desKurisu = document.querySelector('.description2').innerHTML = 'Kurisu Makise (牧瀬紅莉栖Makise Kurisu ? ) é filha de Shouichi Makise , uma garota genial que se formou na universidade aos dezessete anos, e membro do Brain Science Institute da Viktor Chondria University e do Future Gadget Lab .'

        console.log('Personagem selecionado' + desKurisu)
        break
    default:
        console.log('Nao Encontrado')
}

})
