let index = 0;
let valueProgress = document.getElementById('progressBar');
const questions = [
    "",
    "Las plaquetas son células ____ con forma discoide como ____ de aproximadamente 0,5 x 3.0 um, tienen su origen de los ____ a través de un proceso endomitótico",
    "Hormona que permite el adecuado desarrollo de las plaquetas que a diferencia de la eritropoyetina se sintetiza en el músculo liso y la médula ósea y no exclusivamente en el riñón o en el hígado y se elimina a través de las mismas plaquetas que forma, por tanto a mayor destrucción plaquetaria mayor concentración de trombopoyetina circulante",
    "Los principales órganos contenidos son ____, ____, ____, ____ (cuerpos) Alfa y ________. Estos dos ultimos son especialmente importantes porque tienen una gran cantidad de factores que influyen en la coagulación los factores de Von WilleBrand, trombospondina, fibronectina, fibrinógeno, B-tromboglubina, fator plaquetario IV y factor de crecimiento derivado de plaquetas (PDGF)",
    "Almacenan adenosin difosfato (ADP), calcio y serotonina",
    "Puede contener otras sustancias, como: serotonina, epinefrina, norepinefrina, óxido nítrico y citocinas",
    "Las plaquetas participan en la hemostasia y la trombosis esto lo consiguen adheriendose al ____. Las plaquetas interactúan con factores ambientales y con otras plaquetas creando procesos complejos que se originan en la superficie de la ______, esta membrana a su vez, proporciona una interfase reactiva entre las plaquetas y el exterior utilizando los receptores localizados en la superficie. Estos receptores son primordiales para la transducción de señales y estímulos externos hacia el interior de la misma",
    "Interacción que se origina entre los diferentes receptores de membrana y un gran número de moléculas pequeñas, enzimas y complejos proteicos macromoleculares que tienen la finalidad de contraer el citoesqueleto de la misma",
    "Fibrinógeno",
    "Protrombina",
    "Factor tisular",
    "Calcio",
    "Proacelerina",
    "Proconvertina",
    "Antihemofilico A",
    "Factor de Christmas",
    "Factor Stuart-Prower",
    "Antecedente tromboplastinico",
    "Factor de Hageman",
    "Estabilizador de Fibrina",
    "Facilitan la adhesión al endotelio y otras células así como la interacción con otras plaquetas y liberación del contenido de los granulos en su interior. (Cambian de forma transformándose de una célula discoide a una esfera con la finalidad de tener extensiones)",
    "Sistema fisiológico responsable de mantener la sangre en estado líquido y dentro del vaso sanguíneo. No es eficiente en venas y arterias",
    "Interacción de vaso sanguíneo y plaqueta. Formación de tapón plaquetario inestable. (Después de la formación de fibrina se forma el tapón hemostatico estable.)",
    "Sistema de coagulación. Formación de fibrina.",
    "Consecuencia de la deficiencia de algún factor.",
    "Proporcionan estructura (Ej. Fibrinogeno, y factor tisular)",
    "Proteínas que circulan en estado inerte; para activarse necesitan un cambio bioquímico en su estructura que lo lleve a conformar un centro activo donde pueda realizar catálisis. También denominadas Serinproteasas porque en su centro activo tienen serina. (Ej. Factor II, VII, IX, X, XI, XII y precalicreina",
    "Componente necesario para que una enzima pueda actuar sobre su sustrato. (Ej. Factor V, CAMP, (quininógeno de alto peso molecular, etc.)",
    "Las plaquetas provienen de la fragmentación del __, célula que se localiza en la __ ___ capaz de producir hasta 5mil plaquetas",
    "Trombopoyesis: ➡️__➡️___➡️___⤵️__",
    "Las plaquetas viven en promedio __ días.",
    "No tienen núcleo, tienen ___ y ___",
    "Las células endoteliales producen sustancias: ___ : Activan el proceso. __: Inhiben al Ca++",
    "Cuando la plaqueta se estimula sufre una despolimerización de la tubulina. Es cuando ____",
    "Factor que ayuda a las plaquetas a amontonarse (aglutinarse) y adherirse a la pared de los vasos sanguíneos, lo cual es necesario para la coagulación normal de la sangre",
    "Lo produce el endotelio vascular",
    "ADP, Serotonina, tromboxano A2, son?",
    "Factor inestable formado por fibrinogeno",
    "Formación de Fibrina, la cual da consistencia al tapón plaquetario (Mallita de fibrina a la agregación plaquetaria)",
    "Duración de la Hemostasia secundaria: ___min",
    "Liberan al calcio",
    "Las plaquetas activadas se unen entre sí mediante enlaces de fibrinógeno, formando un tapón plaquetario que cubre la herida y detiene la hemorragia de manera temporal",
    "Las plaquetas adheridas cambian de forma y liberan el contenido de sus gránulos, que atraen y activan más plaquetas al sitio de lesión",
    "Las plaquetas se unen al subendotelio expuesto",
    "Proteínas plasmáticas que actúan en una serie de reacciones en cascada para formar una red de fibrina que estabiliza el coágulo y detiene la hemorragia",
    "Inicio a la hemostasia: 1. ___",
    "Inicio a la hemostasia: 2. ___",
    "Inicio a la hemostasia: 3. ___",
    "Inicio a la hemostasia: 4. ___",
    "Inicio a la hemostasia: 5. ___",
];
const answers = [
    "las plaquetas", // No tiene una respuesta para el índice 0
    "anucleadas, hotcake, megacariocitos", // Respuesta correcta para la primera pregunta
    "trombopoyetina", // Respuesta correcta para la segunda pregunta
    "mitocondrias, lisosomas, peroxiomas, granulos y granulos densos",
    "granulos densos",
    "citoplasma",
    "endotelio vascular dañado, membrana plaquetaria",
    "activacion plaquetaria",
    "factor i",
    "factor ii",
    "factor iii",
    "factor iv",
    "factor v",
    "factor vii",
    "factor viii",
    "factor ix",
    "factor x",
    "factor xi",
    "factor xii",
    "factor xiii",
    "pseudopodos",
    "hemostasia",
    "hemostasia primaria",
    "hemostasia secundaria",
    "sangrados",
    "proteinas estructurales",
    "zimogenos",
    "cofactores",
    "megacariocito, medula osea",
    "megacarioblasto, promegacariocito, megacariocito grandular, megacariocito liberador de plaquetas, plaquetas",
    "9-12",
    "mitocondrias y granulos",
    "procoagulantes y anticoagulantes",
    "cambia de forma",
    "fvw",
    "fwv",
    "sustancias proagregantes que ayudan a que se peguen las plaquetas",
    "final de hemostasia primaria",
    "hemostasia secundaria",
    "5-10",
    "granulos densos",
    "agregacion plaquetaria",
    "activacion y secrecion",
    "adhesion plaqueteria",
    "factores de coagulacion",
    "activacion",
    "secrecion",
    "cambio de forma de la plaqueta",
    "agregacion plaquetaria",
    "formacion de tapon plaquetario inestable",
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
    valueProgress++;
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