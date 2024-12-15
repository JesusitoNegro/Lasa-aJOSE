const TIEMPO_ESTANDAR_COCCION = 40; // Tiempo estándar de cocción en minutos

function calcularTiempos() {
    const capas = parseInt(document.getElementById('capas').value);
    const tiempoEnHorno = parseInt(document.getElementById('tiempoEnHorno').value);

    if (isNaN(capas) || capas < 0 || isNaN(tiempoEnHorno) || tiempoEnHorno < 0) {
        alert('Por favor, ingrese valores válidos (números no negativos).');
        return;
    }

    const tiempoRestante = TIEMPO_ESTANDAR_COCCION - tiempoEnHorno;
    const tiempoPreparacion = capas * 2; // 2 minutos por capa
    const tiempoTotal = tiempoEnHorno + tiempoPreparacion;

    document.getElementById('tiempoRestante').textContent = `Tiempo restante en el horno: ${tiempoRestante} minutos.`;
    document.getElementById('tiempoPreparacion').textContent = `Tiempo total de preparación: ${tiempoPreparacion} minutos.`;
    document.getElementById('tiempoTotal').textContent = `Tiempo total de trabajo: ${tiempoTotal} minutos.`;

    document.getElementById('resultados').style.display = 'block';

    // Mensaje emergente
    setTimeout(() => {
        alert('¡Todo está listo! Disfruta de tu deliciosa lasaña.');
    }, 500);
}
