let idade = Number(prompt("Qual a sua idade?"));

if (idade < 22){
    alert("Sinto muito, você não está apto para receber :(")
}

else if ( idade > 55) {
    alert("Sinto muito, você não está apto para receber :(")
}

else {
    let salario = Number(prompt("Quanto você ganha por mês?"))
    let emprestimo = Number(prompt("Quanto você quer de empréstimo?"))

    if (emprestimo < 1000) {
        alert("O valor mínimo de empréstimo é de R$ 1.000,00!")
    }
    else if (emprestimo > salario*15){
        alert("Você não pode pedir 15 vezes mais do que o seu salário!")
    }
    else {
        alert("ACEITO")
    }
}