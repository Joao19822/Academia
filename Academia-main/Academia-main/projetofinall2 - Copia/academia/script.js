var url_base = "https://academia-12627-default-rtdb.firebaseio.com/grafico.json";
var url = "";


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-dados');
    const planoInicialDiv = document.getElementById('plano-inicial');
    const treinoSemanalDiv = document.getElementById('treino-semanal');
    const ctx = document.getElementById('graficoIMC').getContext('2d');
    const btnReiniciar = document.getElementById('btn-reiniciar');

    let pesoInicial = localStorage.getItem('pesoInicial') ? parseFloat(localStorage.getItem('pesoInicial')) : null;

    if (pesoInicial !== null) {
        exibirGraficoEvolucao(pesoInicial, pesoInicial);
    }

    var btn_gerar = document.getElementById('btn_gerar');
    btn_gerar.addEventListener('click', (e) => {
        e.preventDefault();
        info();

        

    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const pesoAtual = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const imc = calcularIMC(pesoAtual, altura);

        const planoInicial = gerarPlanoInicial(imc, pesoAtual, altura);
        planoInicialDiv.innerHTML = `<p>Seu IMC é: ${imc.toFixed(2)}</p><p>Plano Inicial: ${planoInicial}</p>`;

        const objetivo = document.querySelector('input[name="objetivo"]:checked').value;


        if (pesoInicial === null) {
            pesoInicial = pesoAtual;
            localStorage.setItem('pesoInicial', pesoInicial);
        }


        exibirGraficoEvolucao(pesoInicial, pesoAtual);


        gerarPlanoSemanal(imc, objetivo);
    });



    function calcularIMC(peso, altura) {
        return peso / (altura * altura);
    }

    function gerarPlanoInicial(imc, peso, altura) {
        if (imc < 18.5) {
            return "Foco em ganho de massa muscular com treinos de força moderada e alimentação proteica.";
        } else if (imc >= 18.5 && imc < 24.9) {
            return "Treino balanceado com foco em tonificação e manutenção.";
        } else if (imc >= 25 && imc < 29.9) {
            return "Treino com foco em perda de gordura, exercícios aeróbicos e força.";
        } else {
            return "Treino intenso de perda de peso com alta intensidade e acompanhamento nutricional.";
        }
    }

    function gerarPlanoSemanal(imc, objetivo) {
        let planoTreino;

        if (objetivo === 'perder-gordura') {
            planoTreino = `
            <h3>Plano de Treino para Perda de Gordura:</h3>
                <ul>
                <li>Segunda-feira: 5x11 Flexão declinado <a href="https://www.youtube.com/watch?v=example" target="_blank">Aprenda a fazer</a>, pack-deck <a href="https://www.youtube.com/watch?v=example" target="_blank">Aprenda a fazer</a>, Voador <a href="https://www.youtube.com/watch?v=example" target="_blank">Aprenda a fazer</a>, Supino com halter <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Pullover <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Tríceps corda <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Testa <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Coice <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                <li>Terça-feira: 5x11 Desenvolvimento <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Elevação lateral <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Elevação frontal <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Encolhimento <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Rosca alternada <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Rosca <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                <li>Quarta-feira:5x11  Puxador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Cerrote <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Remada <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Cavalinho <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Remador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Barra <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdominal <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdominal culto <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdominal remador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Prancha <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                <li>Quinta-feira: 5x11 Flexão declinado <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Oack-deck <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Voador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Supino com halter <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Pullover <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Tríceps corda <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Testa <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Coice <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                <li>Sexta-feira: 5x11 Agachamento livre <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Sumo <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Extensora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdutora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Leg press <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Flexora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                <li>Sábado: Cardio: Caminhada ou corrida leve por 30-45 minutos <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                <li>Domingo:  atividade leve corrida por mais 40min mais abdominal até a falha <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                </ul>`;
        } else if (objetivo === 'aumentar-musculatura') {
            planoTreino = `
            <h3>Plano de Treino para Aumento de Musculatura:</h3>
                <ul>
                <li>Segunda-feira: 5x14 Flexão declinado <img src="negative-push-up.gif"> target="_blank">Aprenda a fazer</a>, pack-deck <a href="https://www.youtube.com/watch?v=example" target="_blank">Aprenda a fazer</a>, Voador <a href="https://www.youtube.com/watch?v=example" target="_blank">Aprenda a fazer</a>, Supino com halter <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Pullover <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Tríceps corda <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Testa <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Coice <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                <li>Terça-feira: 5x14 Desenvolvimento <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Elevação lateral <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Elevação frontal <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Encolhimento <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Rosca alternada <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Rosca <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                <li>Quarta-feira: 5x14 Puxador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Cerrote <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Remada <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Cavalinho <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Remador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Barra <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdominal <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdominal culto <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdominal remador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Prancha <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                <li>Quinta-feira: 5x14 Flexão declinado <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Oack-deck <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Voador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Supino com halter <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Pullover <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Tríceps corda <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Testa <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Coice <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                <li>Sexta-feira: 5x14 Agachamento livre <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Sumo <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Extensora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdutora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Leg press <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Flexora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                <li>Sábado: Cardio: Caminhada ou corrida longa por 1-2h minutos <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                <li>Domingo:  atividade leve como abdominal flexao corridas em geral até a falha <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                </ul>`;
        } else {
            if (imc < 18.5) {
                planoTreino = `
                    <h3>Seu Plano de Treino Semanal:</h3>
                    <ul>
                        <li>Segunda-feira: 4x12 Flexão declinado <img src="negative-push-up.gif">  target="_blank">Aprenda a fazer</a>, pack-deck <a href="https://www.youtube.com/watch?v=example" target="_blank">Aprenda a fazer</a>, Voador <a href="https://www.youtube.com/watch?v=example" target="_blank">Aprenda a fazer</a>, Supino com halter <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Pullover <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Tríceps corda <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Testa <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Coice <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                        <li>Terça-feira: 4x12 Desenvolvimento <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Elevação lateral <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Elevação frontal <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Encolhimento <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Rosca alternada <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Rosca <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                        <li>Quarta-feira: 4x12 Puxador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Cerrote <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Remada <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Cavalinho <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Remador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Barra <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdominal <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdominal culto <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdominal remador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Prancha <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                        <li>Quinta-feira: 4x12 Flexão declinado <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Oack-deck <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Voador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Supino com halter <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Pullover <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Tríceps corda <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Testa <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Coice <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                        <li>Sexta-feira: 4x12Agachamento livre <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Sumo <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Extensora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdutora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Leg press <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Flexora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                        <li>Sábado: Cardio:  Caminhada ou corrida leve por 30-45 minutos <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                        <li>Domingo: Descanso</li>
                </ul>
            `;
            } else if (imc >= 18.5 && imc < 24.9) {
                planoTreino = `
                    <h3>Seu Plano de Treino Semanal:</h3>
                    <ul>
                    <li>Segunda-feira: Flexão declinado <a href="https://www.youtube.com/watch?v=example" target="_blank">Aprenda a fazer</a>, pack-deck <a href="https://www.youtube.com/watch?v=example" target="_blank">Aprenda a fazer</a>, Voador <a href="https://www.youtube.com/watch?v=example" target="_blank">Aprenda a fazer</a>, Supino com halter <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Pullover <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Tríceps corda <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Testa <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Coice <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    <li>Terça-feira: Desenvolvimento <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Elevação lateral <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Elevação frontal <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Encolhimento <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Rosca alternada <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Rosca <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    <li>Quarta-feira: Puxador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Cerrote <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Remada <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Cavalinho <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Remador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Barra <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdominal <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdominal culto <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdominal remador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Prancha <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    <li>Quinta-feira: Flexão declinado <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Oack-deck <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Voador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Supino com halter <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Pullover <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Tríceps corda <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Testa <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Coice <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    <li>Sexta-feira: Agachamento livre <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Sumo <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Extensora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdutora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Leg press <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Flexora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    <li>Sábado: Cardio: Caminhada ou corrida leve por 30-45 minutos <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    <li>Domingo: Descanso</li>
                `;
            } else if (imc >= 25 && imc < 29.9) {
                planoTreino = `
                    <h3>Seu Plano de Treino Semanal:</h3>
                    <ul>
                    <li>Segunda-feira: 5x13 Flexão declinado     img src="negative-push-up.gif" target="_blank">Aprenda a fazer</a>, pack-deck <a href="https://www.youtube.com/watch?v=example" target="_blank">Aprenda a fazer</a>, Voador <a href="https://www.youtube.com/watch?v=example" target="_blank">Aprenda a fazer</a>, Supino com halter <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Pullover <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Tríceps corda <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Testa <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Coice <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    <li>Terça-feira: 5x13 Desenvolvimento <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Elevação lateral <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Elevação frontal <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Encolhimento <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Rosca alternada <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Rosca <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    <li>Quarta-feira: 5x13 Puxador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Cerrote <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Remada <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Cavalinho <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Remador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Barra <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdominal <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdominal culto <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdominal remador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Prancha <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    <li>Quinta-feira: 5x13 Flexão declinado <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Oack-deck <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Voador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Supino com halter <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Pullover <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Tríceps corda <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Testa <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Coice <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    <li>Sexta-feira: 5x13 Agachamento livre <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Sumo <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Extensora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdutora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Leg press <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Flexora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    <li>Sábado: Cardio: Caminhada ou corrida por 1 hora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    <li>Domingo: atividade leve abdominal ou flexao <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    </ul>
                `;
            } else {
                planoTreino = `
                    <h3>Seu Plano de Treino Semanal:</h3>
                    <ul>
                    <li>Segunda-feira: 5x15 Flexão declinado <a href="https://www.youtube.com/watch?v=example" target="_blank">Aprenda a fazer</a>, pack-deck <a href="https://www.youtube.com/watch?v=example" target="_blank">Aprenda a fazer</a>, Voador <a href="https://www.youtube.com/watch?v=example" target="_blank">Aprenda a fazer</a>, Supino com halter <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Pullover <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Tríceps corda <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Testa <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Coice <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    <li>Terça-feira: 5x15 Desenvolvimento <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Elevação lateral <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Elevação frontal <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Encolhimento <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Rosca alternada <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Rosca <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    <li>Quarta-feira: 5x15 Puxador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Cerrote <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Remada <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Cavalinho <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Remador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Barra <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdominal <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdominal culto <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdominal remador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Prancha <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    <li>Quinta-feira: 5x15 Flexão declinado <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Oack-deck <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Voador <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Supino com halter <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Pullover <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Tríceps corda <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Testa <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Coice <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    <li>Sexta-feira: 5x15 Agachamento livre <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Sumo <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Extensora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Abdutora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Leg press <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a>, Flexora <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    <li>Sábado: Cardio:  Caminhada ou corrida por 1 ou 2 horas <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    <li>Domingo: atividade leve, como basquete, abdominal, flexao, ou futebol <a href="https://www.youtube.com/watch?v=example" target="_blank">Vídeo</a></li>
                    </ul> `;
            }
        }
        treinoSemanalDiv.innerHTML = planoTreino;
    }

    function exibirGraficoEvolucao(pesoInicial, pesoAtual) {
        const data = {
            labels: ['Peso Inicial', 'Peso Atual'],
            datasets: [{
                label: 'Evolução do Peso',
                data: [pesoInicial, pesoAtual],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 5
            }]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };


        if (window.myChart) {
            window.myChart.destroy();
        }
        window.myChart = new Chart(ctx, config);
    }
});

function info() {

    let peso = document.getElementById('peso')


    var conf = {
        method: 'POST',
        body: JSON.stringify({
            peso: peso.value
        })
    }

    if (aid.value == "") {
        url = url_base;
    } else {
        console.log('aid:', aid.value)
        //atualização
        url = `https://proj-mgl-default-rtdb.firebaseio.com/grafico/${aid.value}.json`;
        console.log(url)
        config.method = 'PUT'
    }


    fetch(url, conf)
        .catch(erro => console.log(erro))

    setTimeout(() => {
        listar();

    }, 500);

    document.getElementById('form-dados').reset()
}




var lista = document.getElementById('lista');
var listagem = "";

function listar() {
    listagem.innerHTML = "";

    fetch(url_base)
        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados)
            for (const key in dados) {

                listagem = dados;
                listagem.innerHTML += `
                <tr>
                        <th>${key}</th>
                        <td>${dados[key].peso}</td>
                        <td>${dados[key].pesoAtual}</td>
                        <td>
                         </tr>
                    `
            }
        })
        .catch(erro => console.log(erro))
}


function calculateIMC() {
    const height = parseFloat(document.getElementById('altura').value);
    const weight = parseFloat(document.getElementById('peso').value);

    if (isNaN(height) || isNaN(weight)) {
        alert("Por favor, insira valores válidos para alutra e peso.");
        return;
    }

    const imc = (weight / (height * height)).toFixed(2);
    document.getElementById('imc-result').innerText = `seu imc é: ${imc};`

    document.getElementById('view-diet-btn'), style.display = 'block';

    return imc;
}

function exibirGraficoEvolucao(pesoInicial, pesoAtual) {
    const data = {
        labels: ['Peso Inicial', 'Peso Atual'],
        datasets: [{
            label: 'Evolução do Peso',
            data: [pesoInicial, pesoAtual],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 5
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Limpa o gráfico antes de desenhar um novo
    if (window.myChart) {
        window.myChart.destroy();
    }
    window.myChart = new Chart(ctx, config);
}


function salvar() {



}


listar();