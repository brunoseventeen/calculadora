function calcret() {
    let baseret = document.getElementById ("baseret").value
    let alturaret = document.getElementById ("alturaret").value
    let tela = alturaret * baseret
    document.getElementById ("tela").innerText = "A área do Retângulo e igual á" + tela
}
function calctri() {
    let basetri = document.getElementById ("basetri").value
    let alturatri = document.getElementById ("alturatri").value
    const meio2 = 2
    let telo = (alturatri * basetri) /meio2
    document.getElementById ("tela").innerText = "A área do Triângulo e igual á" + telo
}
function calclos() {
    let Dmaior = document.getElementById ("Dmaior").value
    let Dmenor = document.getElementById ("Dmenor").value
    const meio2 = 2
    let tela = (Dmaior * Dmenor) /meio2
    document.getElementById ("tela").innerText = "A área do Losângo e igual á" + tela
}
function calctra() {
    let B = Number(document.getElementById ("Bmaior").value)
    let b = Number(document.getElementById ("Bmenor").value)
    let A = document.getElementById ("alttra").value
    const meio = 2
    let res = ((B+b)*A)/meio
    document.getElementById ("tela").innerText =  "A área do trapézio e igual á" + res
}
function calccubo() {
    let lado = document.getElementById("lado").value
    let res1 = lado**3
    document.getElementById ("tela").innerText =  "A área do cubo e igual á" + res1
}
function calcpara() {
    let pladoa = document.getElementById ("pladoa").value
    let pladob = document.getElementById ("pladob").value
    let pladoc = document.getElementById ("pladoc").value
    let tela = pladoa * pladob * pladoc
    document.getElementById ("tela").innerText = "A área do Retângulo e igual á" + tela
}
function calcesf() {
    let esf = document.getElementById ("esfera").value
    let vl1 = 3.14
    let vl2 = 1.33
    let result = esf**3 * vl1 * vl2
    document.getElementById ("tela").innerText =  "A área do esfera e igual á" + result
}
function calccil() {
    let cilr = document.getElementById ("cilraio").value
    let cila = document.getElementById ("cilal").value
    const vl4 = 3.14
    const vl3 = 1.333
    let rep =  cilr**2 *vl4 * cila
    document.getElementById ("tela").innerText =  "A área do cilindro e igual á" + rep
}
