const datadoEvento = new Date("2027-01-30T23:59:59");
const timeStampdoevento = datadoEvento.getTime();

const contAshoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampdoevento - timeStampAtual;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24));
    const horasAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `${diasAteOEvento}d, ${horasAteOEvento}h, ${minutosAteOEvento}min e ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        document.getElementById("contador").innerHTML = "Evento encerrado";
    }
}, 1000);