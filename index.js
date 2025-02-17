// Tableau réel
var tabR = document.getElementById('tab')

// Tableau virtuel
var tabV = new Array();
for(var i=0; i<3; i++)
    tabV[i] = new Array();

for(var i=0; i<3; i++)
    for(var j=0; j<3; j++)
        tabV[i][j] = '';

// Tableau contenant les differentes cases à cocher
const tabE = document.querySelectorAll('td')

// Fonction pour cliquer
function Joueur(){
    tabE.forEach(element => {
        element.addEventListener('click', function(){
            this.textContent = 'X'
        });
    });
}

Joueur()