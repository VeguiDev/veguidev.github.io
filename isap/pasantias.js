(function () {
  // Variables
  let count = 0;
  let observer = new IntersectionObserver(intersectionCallback, {
    threshold: 1,
  });

  // Funciones
  function intersectionCallback(entries, observer) {
    // Recorre cada elemento que entro o salio del viewport
    entries.forEach((entry) => {
      let element = entry.target;

      let isVisible = entry.intersectionRatio >= 0.2;

      if (!isVisible || element.classList.contains("show-observe")) return;

      // Aplica un timeout si se estan viendo muchos elementos simultaneos
      setTimeout(showElement, 200 * count, element);

      count++;
    });
  }

  // Muestra un elemento
  function showElement(element) {
    element.classList.add("show-observe");
    element.classList.remove("hide-observe");
    count--;
  }

  // Inicia a observar todos los elementos que tengan la clase 'observe'
  function startObserving() {
    let elements = document.getElementsByClassName("observe");

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];

      element.classList.add("hide-observe");

      observer.observe(element);
    }
  }

  startObserving();

  // Script by VeguiDev
})();
