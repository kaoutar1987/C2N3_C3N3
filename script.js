const quiz = [
    {
        question: 'Pensez-vous avoir ou avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?',
        choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 1,
        
    },
    {
		question: 'Ces dernières 48 heures, quelle a été votre température la plus élevée ?',
		choices: `<label for="numerique">degrée</label>
        <input  id="numerique" type="number" name="temperature" >`,
        number: 2,
        
	
    },
    {
		question: 'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 3,
    },
    {
		question: 'Ces derniers jours, avez-vous noté une forte diminution ou perte de votre goût ou de votre odorat ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 4,

    },
    {
		
		question:	'Ces derniers jours, avez-vous eu un mal de gorge et/ou des douleurs musculaires et/ou des courbatures inhabituelles ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 5,
		
    },
    {
		question: 'Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 6,

	},
	{
		question: 'Ces derniers jours, avez-vous une fatigue inhabituelle ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 7,
		
	},
	{
		question: 'Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 8,
		
	},
	{
		question: "Depuis 24 heures ou plus, êtes-vous dans l'impossibilité de vous alimenter ou de boire ?",
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 9,
	
	},
	{
		
		question:'Ces dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 10,
        
		
	},
	{
		question: `Quel est votre âge ? 
        Ceci, afin de calculer un facteur de risque spécifique.`,
		choices: `<label for="numerique">ans</label>
        <input type="number" id="numerique" name="age" >`,
		number: 11,
	},
	{
		question: `Quel est votre taille ? 
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
		choices: `<label for="numerique">cm</label>
        <input type="number" id="numerique" name="taille" >`,
		number: 12,
		
	},
	{
		question: `Quel est votre poids ?
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
		choices: `<label for="numerique">kg</label>
        <input type="number" id="numerique" name="poids" >`,
		number: 13,
	
	},
	{
		question: `Avez-vous de l’hypertension artérielle mal équilibrée ?
        Ou avez-vous une maladie cardiaque ou vasculaire ?
        Ou prenez vous un traitement à visée cardiologique ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Ne sait pas</label>
        <input type="radio" id="sspas" value="sspas" name="choice" >`,
		number: 14,
	},
	{
		question: `Êtes-vous diabétique ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 15,
	
    },
    
	{
		question: `Avez-vous ou avez-vous eu un cancer ces trois dernières années ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 16,
		
	},
	{
		question: `Avez-vous une maladie respiratoire ?
        Ou êtes-vous suivi par un pneumologue ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 17,
		
	},
	{
		question: `Avez-vous une insuffisance rénale chronique dialysée ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 18,
		
	},
	{
		question: `Avez-vous une maladie chronique du foie ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 19,
	
	},
	{
		question: `Êtes-vous enceinte ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Non applicable</label>
        <input type="radio" id="sspas" value="sspas" name="choice" >`,
		number: 20,
	
	},
	{
		question: `Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Ne sait pas</label>
        <input type="radio" id="sspas" value="sspas" name="choice" >`,
		number: 21,
		
	},
	{
		question: `Prenez-vous un traitement immunosuppresseur ?
        C’est un traitement qui diminue vos défenses contre les infections.
        Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, 
        tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Ne sait pas</label>
        <input type="radio" id="sspas" value="sspas" name="choice">`,
		number: 22,
    }
	
]

//
const stepper = document.getElementById("stepper");
const préambule = document.getElementById("préambule");
const progretion = document.getElementById("pro");
const questionnaire = document.getElementById("box");
const questionDiv = document.getElementById("questionnaire");
const anti=document.getElementById('Anti-inflammatoires')
const réponce = document.getElementById("réponce");
const ruseltas = document.getElementById("ruseltas");
const précédant = document.getElementById("pré");
const suivant = document.getElementById("sui");
const répan = document.getElementById("répan");
const Demarer = document.getElementById("ts1");
const list = document.getElementsByClassName("list__item");
const count = document.getElementById("count");





// passer a l 'etape suivant
 //progretion.firstElementChild.style.width =`${100/22*progres}%`;
    //progretion.firstElementChild.style.backgroundColor='#1078AD';
    
function bar(progres){
    progretion.style.width =`${(100/22)*(progres+1)}%`;
    progretion.style.backgroundColor='#1078AD';
    count.textContent= (cont +1) + '/' + quiz.length;
   
}

Demarer.addEventListener('click', nextStep);
 
function nextStep(){
    préambule.style.display='none';
    questionnaire.style.display='block';
    list[0].classList.remove('list__item--active');
    list[1].classList.add('list__item--active');
    showQuestion (cont)
    bar(cont)
   
}

// afficher la question
function showQuestion (questionIndex){
    let ques = quiz[questionIndex];
    questionDiv.textContent = ques.question;
    réponce.innerHTML=ques.choices;
    
    
}

var cont = 0;
var newArray = [];

suivant.addEventListener('click',nextQuestion);//afficher la question suivant

function nextQuestion(){

    
    
   //récuperation du valure
  
  const récup = document.getElementById("numerique");
  
   if(réponce.children[1].id === "numerique"){

    
        if(!récup.value){
           alert("enter une valeur");
           return;

       }else if (cont === 1 && (récup.value<34 || récup.value>42)){
            alert("la temperature doit etre entre 34 et 42");
            return;

       }else if (cont === 10 && (récup.value<15 || récup.value>110)){
           alert("l'age doit etre entre 15 et 110");
           return;

       }else if (cont === 11 && (récup.value<80 || récup.value>250)){
           alert("le taille doit etre entre 80 et 250");
           return;

       }else if (cont === 12 && (récup.value<20 || récup.value>250)){
           alert("le poids doit etre entre 20 et 250");
            return;

       }else{
           newArray.push(récup.value);
           console.log(newArray); }
      
    }else{
        let select = document.querySelector('input[name=choice]:checked');
        if(!select){
            alert('svp choisir une reponse');
            return;
        }else {
            newArray.push(select);
            console.log(newArray);

        }
    }
        
    cont +=1;   
    if(cont > 0){
        pré.style.display="block"
   }

   if(cont >0){
       anti.style.display="none"
   }
    showQuestion(cont);
    bar(cont)  ;
   
}showQuestion(cont);


précédant.addEventListener('click',lastQuestion);//afficher la question précedent
function lastQuestion(){
    cont -= 1
    showQuestion (cont)
    console.log(cont);
    if(cont = 0){
       pré.style.display="none"
    }
    if(cont <1){
        anti.style.display="block"
    }

    bar(cont)
}
