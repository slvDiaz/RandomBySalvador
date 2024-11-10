let index = 0;
const questions = [
    "",
    "Las plaquetas son células ____ con forma discoide como ____ de aproximadamente 0,5 x 3.0 um, tienen su origen de los ____ a través de un proceso endomitótico",
    "Hormona que permite el adecuado desarrollo de las plaquetas que a diferencia de la eritropoyetina se sintetiza en el músculo liso y la médula ósea y no exclusivamente en el riñón o en el hígado y se elimina a través de las mismas plaquetas que forma, por tanto a mayor destrucción plaquetaria mayor concentración de trombopoyetina circulante",
    "Los principales órganos contenidos son ____, ____, ____, ____ (cuerpos) Alfa y ________. Estos dos ultimos son especialmente importantes porque tienen una gran cantidad de factores que influyen en la coagulación los factores de Von WilleBrand, trombospondina, fibronectina, fibrinógeno, B-tromboglubina, fator plaquetario IV y factor de crecimiento derivado de plaquetas (PDGF)"
];
const answers = [
    "las plaquetas", // No tiene una respuesta para el índice 0
    "anucleadas, hotcake, megacariocitos", // Respuesta correcta para la primera pregunta
    "trombopoyetina", // Respuesta correcta para la segunda pregunta
    "mitocondrias, lisosomas, peroxiomas, granulos y granulos densos"
];
function eraseAnswer() {
    document.getElementById('inputAnswer').value = "";
    alert("Respuesta incorrecta");
}
function updateQuestion() {
    const textQuestion = document.getElementById('textQuestion');
    const numQuestion = document.getElementById('numQuestion');
    textQuestion.textContent = questions[index];  // La primera pregunta está en el índice 1
    numQuestion.textContent = "Pregunta No " + (index + 1); // Actualiza el número de la pregunta
}

// Función que el usuario llama cuando envía una respuesta
function sendAnswer() {
    const answerUser = (document.getElementById('inputAnswer').value).toLowerCase().trim(); // Respuesta del usuario en minúsculas y sin espacios extra
    const textQuestion = document.getElementById('textQuestion').textContent;
    const numQuestion = document.getElementById('numQuestion').textContent;
    
    if(answerUser === answers[index].toLowerCase()){ // Compara la respuesta del usuario con la respuesta correcta
        alert("Respuesta correcta");
        document.getElementById('inputAnswer').value = "";
        index++; // Avanza al siguiente índice de la pregunta
        if (index < questions.length) { // Si hay más preguntas
            updateQuestion(); // Actualiza la pregunta y el número
        } else {
            alert("¡Has terminado el cuestionario!");
            // Aquí podrías añadir una opción para reiniciar el cuestionario si lo deseas
        }
    } else {
        eraseAnswer(); // Si la respuesta es incorrecta, borra el campo y muestra el mensaje
    }
}