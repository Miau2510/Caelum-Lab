// Calcular Força Gravitacional
function calcularForcaGravitacional() {
    const G = 6.67430e-11; // Constante gravitacional
    let massa1 = parseFloat(document.getElementById('massa1').value);
    let massa2 = parseFloat(document.getElementById('massa2').value);
    let distancia = parseFloat(document.getElementById('distancia').value);

    let forca = G * (massa1 * massa2) / (distancia * distancia);
    document.getElementById("forca-gravitacional").textContent = "F = " + forca.toExponential(2) + " N";
}

function lerJoules(J) {
    if (J < 0) {
        return 0 + " J";
    }
    if (J >= 1e9) {
        return (J / 1e9).toFixed(2) + " GJ";
    } else if (J >= 1e6) {
        return (J / 1e6).toFixed(2) + " MJ";
    } else if (J >= 1e3) {
        return (J / 1e3).toFixed(2) + " kJ";
    } else {
        return J.toFixed(2) + " J";
    }
}

// Calcular Velocidade Orbital
function calcularVelocidadeOrbital() {
    const G = 6.67430e-11; // Constante gravitacional
    let massaCentral = parseFloat(document.getElementById('massaCentral').value);
    let raioOrbital = parseFloat(document.getElementById('raioOrbital').value);

    let velocidade = Math.sqrt((G * massaCentral) / raioOrbital);
    document.getElementById("velocidade-orbital").textContent = "V = " + velocidade.toExponential(2) + " m/s";
}
// Calcular Delta-v
function calcularDeltaV() {
    const g0 = 9.80665; // Aceleração gravitacional padrão
    let isp = parseFloat(document.getElementById('isp').value);
    let massaInicial = parseFloat(document.getElementById('massaInicial').value);
    let massaFinal = parseFloat(document.getElementById('massaFinal').value);
    let deltav = isp * g0 * Math.log(massaInicial / massaFinal);
    document.getElementById("delta-v").textContent = "∆v= " + deltav.toExponential(2) + " m/s";
}

// Calcular equivalencia de massa e energia
function calcularEquivalenciaMassaEnergia() {
    const c = 299792458; // Velocidade da luz em m/s
    let massa = parseFloat(document.getElementById('massa').value);
    let energia = massa * c * c;
    document.getElementById("equivalencia-massa-energia").textContent = `E = ${lerJoules(energia)}`;
}

// Calcular dilatação temporal
function calcularDilacaoTemporal() {
    const c = 299792458; // Velocidade da luz em m/s
    let tempoProprio = parseFloat(document.getElementById('tempoProprio').value);
    let velocidadeRelativa = parseFloat(document.getElementById('velocidadeRelativa').value);
    let fatorDilacao = 1 / Math.sqrt(1 - (velocidadeRelativa * velocidadeRelativa) / (c * c));
    let tempoDilatado = tempoProprio * fatorDilacao;
    document.getElementById("dilacao-temporal").textContent = "t = " + tempoDilatado.toExponential(2) + " s";
}