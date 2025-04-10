function fnCalculaSalario(){
    let valorHora = document.getElementById("valor-hora").value
    let horasTrabalhadas = document.getElementById("horas-trabalhadas").value

    let salario = valorHora * horasTrabalhadas

    if(horasTrabalhadas <= 44 ){
        document.getElementById("resultado").innerText = "R$ " + salario
    }
    else if (horasTrabalhadas > 44){
       let extra = valorHora*(horasTrabalhadas - 44)*1.5
       let total = valorHora*44 + extra

       document.getElementById("resultado").innerText = "R$ " + total
    }
}