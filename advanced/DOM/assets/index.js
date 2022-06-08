"use strict"; // lève les alertes silencieuses

const titre = document.getElementById('titre')
const conteneur = document.getElementById('conteneur')


/* 

fonction flechee, fonction anonyme ne connaissent pas le this, 
ces fonctions n'ont pas de reference à l'objet, l'instance intégrée
*/