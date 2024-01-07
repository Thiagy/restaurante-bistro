//Função que redireciona para o contato de whatsapp.
document.addEventListener("DOMContentLoaded", function() {

  const whatsapp = document.getElementById('whatsappIcon');

  if (whatsapp) {

    whatsapp.addEventListener('click', function() {

      window.open('https://wa.me/5564996753372');

    });

  } else {

    console.log("Elemento whatsappIcon não encontrado.");

  }

});
