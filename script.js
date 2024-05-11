const traerEmpresas = async () => {
    const respuesta = await fetch("https://www.arbeitnow.com/api/job-board-api");
    const datos = await respuesta.json();
    return datos;
};

const inicio = document.getElementById("inicio");
const inicioDoble = document.getElementById("inicio-doble")

const buscarPorTitulo = async () => {
    const empresas = await traerEmpresas();
    const tituloABuscar = document.getElementById("tituloBusqueda").value.toLowerCase();
    const tablaBusqueda = document.getElementById("elementoBuscar");
    const letras = document.getElementById("letras");
    tablaBusqueda.innerHTML = ""; // Limpiar la tabla antes de agregar nuevos resultados
    inicio.innerHTML = "";
    inicioDoble.innerHTML = " ";

    const empresasFiltradas = empresas.data.filter((empresa) =>
        empresa.title.toLowerCase().includes(tituloABuscar)
    );

    // Mostrar los resultados filtrados
    empresasFiltradas.forEach((empresa, indice) => {
        const filaBusqueda = document.createElement("div");
        filaBusqueda.classList.add("div");
        filaBusqueda.innerHTML = `
          <div class="fondo">
            <div class="div-adentro">
                <h2 class="texto"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-5"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>${empresa.title}</h2>
            </div>
            <div class="empresa-div">
              <div class="div-empresa">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /></svg>
                <h2 class="empresa">EMPRESA: </h2>
                <h2 class="empresa-nombre"> ${empresa.company_name} </h2>
              </div>
              <div  class="div-cargo">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" /></svg>
                <h2 class="empresa">CARGO:</h2>
                <h2 class="cargo-nombre">${empresa.tags.join(",")}</h2>
              </div>
            </div>
            <div class="div-locacion">
              <div  class="location-div">
                <h2 class="location">${empresa.location}</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
              </div>
              <div  class="div-url">
                <h3 class="link"> mas información...</h3>
                <a class="" href="${empresa.url}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-5"><path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></a>
              </div>

            </div>

          </div>
      `;
        tablaBusqueda.appendChild(filaBusqueda);
    });
};

// Borrar resultados de búsqueda
const botonBorrar = document.getElementById("btnBuscar");
botonBorrar.addEventListener("dblclick", () => {
    document.getElementById("elementoBuscar").innerHTML = "";
    document.getElementById("tituloBusqueda").value = "";
    inicioDoble.innerHTML = ` 
    <div class="grid grid-cols-2 grid-rows-3 mx-10">

      <div class="row-start-2 col-start-1 content-center">
          <h3 class="text-3xl py-5 text-rose-500">¿Buscas trabajo?</h3>
          <h3 class="text-7xl font-bold">En esta pagina hay puestos de trabajo esperando por ti  </h3>
      </div>
      <div class="row-start-2 col-start-2">
          <img src="assets/image.png" alt="" class="rounded-xl ">
      </div>
    </div>
    `;

});


// Buscar al escribir
const inputTitulo = document.getElementById("tituloBusqueda");
inputTitulo.addEventListener("keyup", buscarPorTitulo);

// Mostrar los datos al cargar la página
/* document.addEventListener("DOMContentLoaded", mostrarDatos); */
