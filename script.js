function somar() {

    var snum1 = window.document.getElementById("string1")
    var snum2 = window.document.getElementById("string2")
    var total = window.document.getElementById("result")

    var num1 = Number(snum1.value)
    var num2 = Number(snum2.value)
    var soma = num1 + num2

    total.value = soma
}