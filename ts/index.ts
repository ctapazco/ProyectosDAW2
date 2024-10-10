const boton : NodeListOf<HTMLElement> = document.querySelectorAll("Botton");


boton.forEach(boton => {
    boton.addEventListener('click', () => {
        const fondo: HTMLElement = document.querySelector("body")!;
      fondo.style.backgroundColor = 'blue';  
    });
  });