
        let n1 = 10;
        let n2 = 20;

        function abrirAlert() {

            alert(n1 + n2);
            alert(n1 - n2);
            alert(n1 * n2);
            alert(n1 / n2);
        }


        function numeroDe1a100() {
            for (let valor = 1; valor <= 100; valor++) {
                console.log(valor)
            }
        }


        function multiplicacaoFixa() {
            var valor = 5;

            for (let numero = 0; numero <= 10; numero++) {
                let resultado = valor * numero;
                console.log(valor + " * " + numero + " = " + resultado)
            }
        }


        function multiplicacao() {
            var valor = prompt("Escolha um Numero:");

            for (let numero = 0; numero <= 10; numero++) {
                let resultado = valor * numero;
                console.log(valor + " * " + numero + " = " + resultado)
            }
        }



        function calculadora() {
            let valor1 = prompt("Escolha o primeiro numero:");

            let opcao = prompt("Escolha a operacao que deseja:");

            let valor2 = prompt("Escolha o segundo numero:");

            var resultado;

            if (opcao == "+") {
                resultado = parseFloat(valor1) + parseFloat(valor2);
                alert(resultado)
            } else if (opcao == "-") {
                resultado = valor1 - valor2;
                alert(resultado)
            } else if (opcao == "*") {
                resultado = valor1 * valor2;
                alert(resultado)
            } else if (opcao == "/") {
                resultado = valor1 / valor2;
                alert(resultado)
            } else if (opcao == "") {
                alert("Insira uma operacao valida!")
            }
        }


        function percorrerArray() {
            let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            function buscarNumerosPares(valorPares) {
                if (valorPares % 2 == 0)
                    return valorPares;
            }

            function buscarNumerosImpares(valorImpar) {
                if (valorImpar % 2 == 1)
                    return valorImpar;
            }

            var pares = numeros.filter(buscarNumerosPares);
            console.log(pares);

            var impares = numeros.filter(buscarNumerosImpares);
            console.log(impares);
        }



        function carro() {
            let custoFabrica = document.getElementById("custoFabrica").value;

            let percDistribuidor = document.getElementById("percDistribuidor").value;

            let percImpostos = document.getElementById("percImpostos").value;

            let custoFinal = parseFloat(custoFabrica) + (parseFloat(custoFabrica) * parseFloat(percDistribuidor)) + (parseFloat(custoFabrica) * parseFloat(percImpostos));

            alert(custoFinal)
        }