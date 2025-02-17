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

jeu_actif = true;
var tour = 1;
texte_info = document.getElementById('text_info')
texte_info.textContent = 'Au tour du joueur X de jouer'

// Fonction pour jouer
function Jouer(){
    tabE.forEach(element => {
        element.addEventListener('click', function(){
            if (tour == 1){
                if (this.textContent == '' && jeu_actif){
                    this.textContent = 'X';
                    tabV[parseInt(this.id)] = 'X';
                    texte_info.textContent = 'Au tour du joueur O de jouer'
                    tour = 2
                }
            }
            else{
                if (this.textContent == '' && jeu_actif){
                    this.textContent = 'O';
                    tabV[parseInt(this.id)] = 'O';
                    texte_info.textContent = 'Au tour du joueur X de jouer'
                    tour = 1 
                }              
            }
            // Fonction test victoire
            if(jeu_actif){
                Tester_victoire_X(tabV)
                Tester_victoire_O(tabV)
                Egalite(tabE)
            }
        });
    });
}








// Fonction pour tester la victoire de X
function Tester_victoire_X(tabV){
    if (tabV[0] == tabV[1] && tabV[1] == tabV[2] && tabV[2] == 'X'){
        cell1 = tabV[0];
        cell2 = tabV[1];
        cell3 = tabV[2];
        cell3 = tabV[6];
        var tab_vic = new Array(cell1, cell2, cell3);
        texte_info.textContent = 'Le joueur X à gagné';
        jeu_actif = false;
        return tab_vic;
    }
    if (tabV[3] == tabV[4] && tabV[4] == tabV[5] && tabV[5] == 'X'){
        cell1 = tabV[3];
        cell2 = tabV[4];
        cell3 = tabV[5];
        cell3 = tabV[6];
        var tab_vic = new Array(cell1, cell2, cell3);
        texte_info.textContent = 'Le joueur X à gagné';
        jeu_actif = false;
        return tab_vic;
    }
    if (tabV[6] == tabV[7] && tabV[7] == tabV[8] && tabV[8] == 'X'){
        cell1 = tabV[6];
        cell2 = tabV[7];
        cell3 = tabV[8];
        cell3 = tabV[6];
        var tab_vic = new Array(cell1, cell2, cell3);
        texte_info.textContent = 'Le joueur X à gagné';
        jeu_actif = false;
        return tab_vic;
    }
    if (tabV[0] == tabV[3] && tabV[3] == tabV[6] && tabV[6] == 'X'){
        cell1 = tabV[0];
        cell2 = tabV[3];
        cell3 = tabV[6];
        cell3 = tabV[6];
        var tab_vic = new Array(cell1, cell2, cell3);
        texte_info.textContent = 'Le joueur X à gagné';
        jeu_actif = false;
        return tab_vic;
    }
    if (tabV[1] == tabV[4] && tabV[4] == tabV[7] && tabV[7] == 'X'){
        cell1 = tabV[1];
        cell2 = tabV[4];
        cell3 = tabV[7];
        cell3 = tabV[6];
        var tab_vic = new Array(cell1, cell2, cell3);
        texte_info.textContent = 'Le joueur X à gagné';
        jeu_actif = false;
        return tab_vic;
    }
    if (tabV[2] == tabV[5] && tabV[5] == tabV[8] && tabV[8] == 'X'){
        cell1 = tabV[2];
        cell2 = tabV[5];
        cell3 = tabV[8];
        cell3 = tabV[6];
        var tab_vic = new Array(cell1, cell2, cell3);
        texte_info.textContent = 'Le joueur X à gagné';
        jeu_actif = false;
        return tab_vic;
    }
    if (tabV[0] == tabV[4] && tabV[4] == tabV[8] && tabV[8] == 'X'){
        cell1 = tabV[0];
        cell2 = tabV[4];
        cell3 = tabV[8];
        cell3 = tabV[6];
        var tab_vic = new Array(cell1, cell2, cell3);
        texte_info.textContent = 'Le joueur X à gagné';
        jeu_actif = false;
        return tab_vic;
    }
    if (tabV[2] == tabV[4] && tabV[4] == tabV[6] && tabV[6] == 'X'){
        cell1 = tabV[2];
        cell2 = tabV[4];
        cell3 = tabV[6];
        cell3 = tabV[6];
        var tab_vic = new Array(cell1, cell2, cell3);
        texte_info.textContent = 'Le joueur X à gagné';
        jeu_actif = false;
        return tab_vic;
    }
        
}


// Fonction pour tester la victoire de O
function Tester_victoire_O(tabV){
    if (tabV[0] == tabV[1] && tabV[1] == tabV[2] && tabV[2] == 'O'){
        cell1 = tabV[0];
        cell2 = tabV[1];
        cell3 = tabV[2];
        cell3 = tabV[6];
        var tab_vic = new Array(cell1, cell2, cell3);
        texte_info.textContent = 'Le joueur O à gagné';
        jeu_actif = false;
        return tab_vic;
    }
    if (tabV[3] == tabV[4] && tabV[4] == tabV[5] && tabV[5] == 'O'){
        cell1 = tabV[3];
        cell2 = tabV[4];
        cell3 = tabV[5];
        cell3 = tabV[6];
        var tab_vic = new Array(cell1, cell2, cell3);
        texte_info.textContent = 'Le joueur O à gagné';
        jeu_actif = false;
        return tab_vic;
    }
    if (tabV[6] == tabV[7] && tabV[7] == tabV[8] && tabV[8] == 'O'){
        cell1 = tabV[6];
        cell2 = tabV[7];
        cell3 = tabV[8];
        cell3 = tabV[6];
        var tab_vic = new Array(cell1, cell2, cell3);
        texte_info.textContent = 'Le joueur O à gagné';
        jeu_actif = false;
        return tab_vic;
    }
    if (tabV[0] == tabV[3] && tabV[3] == tabV[6] && tabV[6] == 'O'){
        cell1 = tabV[0];
        cell2 = tabV[3];
        cell3 = tabV[6];
        cell3 = tabV[6];
        var tab_vic = new Array(cell1, cell2, cell3);
        texte_info.textContent = 'Le joueur O à gagné';
        jeu_actif = false;
        return tab_vic;
    }
    if (tabV[1] == tabV[4] && tabV[4] == tabV[7] && tabV[7] == 'O'){
        cell1 = tabV[1];
        cell2 = tabV[4];
        cell3 = tabV[7];
        cell3 = tabV[6];
        var tab_vic = new Array(cell1, cell2, cell3);
        texte_info.textContent = 'Le joueur O à gagné';
        jeu_actif = false;
        return tab_vic;;
    }
    if (tabV[2] == tabV[5] && tabV[5] == tabV[8] && tabV[8] == 'O'){
        cell1 = tabV[2];
        cell2 = tabV[5];
        cell3 = tabV[8];
        cell3 = tabV[6];
        var tab_vic = new Array(cell1, cell2, cell3);
        texte_info.textContent = 'Le joueur O à gagné';
        jeu_actif = false;
        return tab_vic;
    }
    if (tabV[0] == tabV[4] && tabV[4] == tabV[8] && tabV[8] == 'O'){
        cell1 = tabV[0];
        cell2 = tabV[4];
        cell3 = tabV[8];
        cell3 = tabV[6];
        var tab_vic = new Array(cell1, cell2, cell3);
        texte_info.textContent = 'Le joueur O à gagné';
        jeu_actif = false;
        return tab_vic;
    }
    if (tabV[2] == tabV[4] && tabV[4] == tabV[6] && tabV[6] == 'O'){
        cell1 = tabV[2];
        cell2 = tabV[4];
        cell3 = tabV[6];
        var tab_vic = new Array(cell1, cell2, cell3);
        texte_info.textContent = 'Le joueur O à gagné';
        jeu_actif = false;
        return tab_vic;
        
}}

// Fonction en cas d'égalité
function Egalite(tabE){

    const allFilled = [...tabE].every(cell => cell.textContent !== '');
    if (allFilled) {
        texte_info.textContent = 'Egalité';
        jeu_actif = false;
    }
}




Jouer()