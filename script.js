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
		question: 'Ces derniers jours, avez-vous eu des douleurs musculaires et/ou des courbatures inhabituelles ?',
		choices: `<label for="oui">Oui</label>
                  <input type="radio" value="oui" id="oui" name="choice"><br>
                  <label for="non">Non</label>
                  <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 4,

    },
    {
		
		question:'Ces derniers jours, avez-vous eu un mal de gorge  ?',
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
		question: "Depuis 24 heures ou plus, êtes-vous dans l'impossibilité de vous alimenter ou de boire ?",
		choices: `<label for="oui">Oui</label>
                  <input type="radio" value="oui" id="oui" name="choice"><br>
                  <label for="non">Non</label>
                  <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 8,
	
	},
	{
		
		question:'Ces dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',
		choices: `<label for="oui">Oui</label>
                 <input type="radio" value="oui" id="oui" name="choice"><br>
                 <label for="non">Non</label>
                 <input type="radio" id="non" value="non" name="choice"><br>`,
        number: 9,
        
		
    },
    {
        question:'Comment vous sentez-vous ? ',
        choices: `<div class="fourchoices">
                    <div class="choices">
                    <label for="fatigue">Fatigué(e)</label>
                    <input type="radio" value="fatigué" id="fatigue" name="choice"><br>
                    </div>
                    <div class="choices">
                    <label for="bien">Bien</label>
                    <input type="radio" id="bien" value="bien" name="choice"><br>
                    </div>
                    </div>
                    <div class="fourchoices">
                    <div class="choices">
                    <label for="trop-fatigue">Trés fatigué(e)</label>
                    <input type="radio" value="trop-fatigué" id="trop-fatigue" name="choice"><br>
                    </div>
                    <div class="choices">
                    <label for="moyen">Assez bien</label>
                    <input type="radio" id="moyen" value="moyen" name="choice"><br>
                    </div>
                    </div>`,
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
		question: `Prenez-vous un traitement immunosuppresseur ? <br>
        C’est un traitement qui diminue vos défenses contre les infections.<br>
        Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine,<br> 
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

const stepper = document.getElementById("stepper");
const préambule = document.getElementById("préambule");
const progretion = document.getElementById("pro");
const questionnaire = document.getElementById("box");
const questionDiv = document.getElementById("questionnaire");
const anti=document.getElementById('Anti-inflammatoires')
const réponce = document.getElementById("réponce");
const ruseltas = document.getElementById("resultas");
const afficheResult = document.getElementsByClassName('"rusel')

const Demarer = document.getElementById("ts1");
const précédant = document.getElementById("pré");
const suivant = document.getElementById("sui");
const répandre = document.getElementById("répan");


const list = document.getElementsByClassName("list__item");
const count = document.getElementById("count");
// passer a l 'etape suivant
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
répandre.addEventListener('click',()=>{
    newArray =[];
    list[1].classList.add('list__item--active');
    list[2].classList.remove('list__item--active');
    questionnaire.style.display='block';
    ruseltas.style.display='none';
    progretion.style.display='block';
    window.location.reload();   
})
     // afficher la question
function showQuestion (questionIndex){
    let ques = quiz[questionIndex];
    questionDiv.textContent = ques.question;
    réponce.innerHTML=ques.choices    
}
     //afficher la question suivant
var cont = 0;
var newArray = [];
suivant.addEventListener('click',nextQuestion);
function nextQuestion(){

  const récup = document.getElementById("numerique"); //récuperation du valure
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

       }else if (cont === 12 && (récup.value<20 || récup.value>250)){
           alert("le poids doit etre entre 20 et 250");
           return;

       }else if (cont === 11 && (récup.value<80 || récup.value>250)){
           alert("le taille doit etre entre 80 et 250");
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
            newArray.push(select.value);
            console.log(newArray);

        }

    }   
    cont +=1;   
    if(cont > 0){
        pré.style.display="block"
        anti.style.display="none"  
   }
   if(cont===21){
       suivant.textContent="terminer";     
   } 
 
   if(cont===22){
    list[1].classList.remove('list__item--active');
    list[2].classList.add('list__item--active');
    questionnaire.style.display='none';
    ruseltas.style.display='block';
    progretion.style.display='none';
    getResult();
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

//********************************************************************************************************** *
const getR = document.getElementById('getR');


function getResult (){
        let facteurGmin ;
        let facteurGmaj;
        let facteurProno;

        // determiner les facteurs de gravités :
        // 1 : mineur
        if((newArray[0] === 'oui' && newArray[1] >= 39) || newArray[6] === 'oui' || (newArray[9] === 'Fatigué(e)' || newArray[9] === 'Très fatigué(e)')){ 

            facteurGmin = true; // au moins un seul facteur de gravité mineur est validé ou plus

        }else {
            facteurGmin = false; // aucun facteur de gravité mineur 
        }
        if (
            ((newArray[0] === 'oui' && newArray[1] >= 39) && newArray[6] === 'oui')||
            ((newArray[0] === 'oui' && newArray[1] >= 39) && (newArray[9] === 'Fatigué(e)' || newArray[9] === 'Très fatigué(e)'))||
            (newArray[6] === 'oui' && (newArray[9] === 'Fatigué(e)' || newArray[9] === 'Très fatigué(e)'))){
            
                facteurGmin = 2; // deux facteurs de gravité mineur sont validés
        }else if (
            ((newArray[0] === 'oui' && newArray[1] >= 39) && newArray[6] === 'non' && (newArray[9] === 'Bien' || newArray[9] === 'Assez bien'))||
            ((newArray[0] === 'non' && newArray[1] < 39) && newArray[6] === 'oui' && (newArray[9] === 'Bien' || newArray[9] === 'Assez bien'))||
            ((newArray[0] === 'non' && newArray[1] >= 39) && newArray[6] === 'non' && (newArray[9] === 'Fatigué(e)' || newArray[9] === 'Très fatigué(e)'))){

              facteurGmin = 1;  // un seul facteurs de gravité mineur est validé

        }

        // 2 : majeur
        if((newArray[0] === 'oui' && newArray[1] <= 35) || newArray[7] === 'oui' || newArray[8] === 'oui'){

            facteurGmaj = true; // au moins un facteur de gravité majeur est validé
        }else {

            facteurGmaj = false; // aucun facteur de gravité majeur
        }

        // determiner les facteurs pronostiques :
        if (newArray[10] >= 70 || newArray[13] === 'oui' || newArray[14] === 'oui' ||
        newArray[15] === 'oui' || newArray[16] === 'oui' || newArray[17] === 'oui' ||
        newArray[18] === 'oui' || newArray[19] === 'oui' || newArray[20] === 'oui' || newArray[21] === 'oui'){

                facteurProno = true; // au moins un facteur prono est validé
            }else{
                facteurProno = false; // aucun facteur prono
            }


        //  analyser les cas selon les symptomes:
        // cas 1 : Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée :

        if  (newArray[0] === 'oui'  || 
            (newArray[2] === 'oui' && newArray[3] === 'oui' )||
            (newArray[2] === 'oui' && newArray[4] === 'oui' )||
            (newArray[0] === 'oui' && newArray[5] === 'oui' )) {

            if(facteurProno == false && facteurGmaj == false && facteurGmin == false &&  newArray[10] < 50){
                getR.textContent = `Nous vous conseillons de rester à votre domicile et
                de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez
                aussi utiliser à nouveau l’application pour réévaluer vos symptômes.`;

            }else if (facteurProno == false && facteurGmaj == false &&  (newArray[10] > 50 || newArray[10] < 69 )){
                getR.textContent =`Téléconsultation ou médecin généraliste ou visite à domicile`;

            }else if (facteurProno == true && facteurGmaj == false && facteurGmin == false){
                getR.textContent =`Téléconsultation ou médecin généraliste ou visite à domicile`;

            }else if (facteurProno == true && facteurGmaj == false && facteurGmin === 1){
                getR.textContent =`Svp Appeler 141`;

            }else if (facteurProno == true && facteurGmaj == false && facteurGmin === 2){
                getR.textContent =`Svp Appeler 141`;

            }else if (facteurGmaj == true){
                getR.textContent =`Svp Appeler 141`;
            }
        } // cas 2 : Patient avec fièvre + toux  :

        else if (newArray[0] === 'oui' && newArray[2] === 'oui'){
            if(facteurProno == false && facteurGmaj == false && (facteurGmin == false || facteurGmin == true)){

                getR.textContent=`téléconsultation ou médecin généraliste ou visite à domicile`;

            }else if (facteurProno == true && facteurGmaj == false && (facteurGmin == false || facteurGmin === 1)){
                getR.textContent=`téléconsultation ou médecin généraliste ou visite à domicile`;

            }else if (facteurProno == true && facteurGmaj == false && facteurGmin === 2){
                getR.textContent =`Svp Appeler 141`;

            }else if (facteurGmaj == true){
                getR.textContent =`Svp Appeler 141`;
            }

        }// cas 3 : Patient avec un seul sympthome : fièvre ou toux ou mal de gorge ou courbatures  (note: il faut eliminer la fievre ici ,sinon le test va analyser le cas 1)

        else if ((newArray[0] === 'oui' &&  newArray[2] === 'non' && newArray[3] === 'non' &&  newArray[4] === 'non')||
                (newArray[0] === 'non' &&  newArray[2] === 'oui' && newArray[3] === 'non' &&  newArray[4] === 'non') ||
                (newArray[0] === 'non' &&  newArray[2] === 'non' && newArray[3] === 'oui' &&  newArray[4] === 'non')||
                (newArray[0] === 'non' &&  newArray[2] === 'non' && newArray[3] === 'non' &&  newArray[4] === 'oui')){
                    
            if ( facteurProno == false && facteurGmaj == false && facteurGmin == false){
                getR.textContent =`Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute`;

            }else if(facteurProno == true || facteurGmaj == true ||  facteurGmin == true ) {
                getR.textContent = 'Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141.';

            }

        }//cas 4 :Tout patient avec aucun symptôme :
        else if ((newArray[0] === 'non' &&  newArray[2] === 'non' && newArray[3] === 'non' && newArray[4] === 'non')){
            getR.textContent=`Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil.`;

        }else{
            getR.textContent= `ERROR`;
        }




}


