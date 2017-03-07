function changeMessage(choix) 
{ 
	if (choix == 1){	
		document.getElementById("tutoText").innerHTML ="Course1"; 
	} 
	if (choix == 2){
		document.getElementById("tutoText").innerHTML = "Objectif : Comprendre l’articulation de la blockchain <br>" +
"<a href="+"Tuto2/Tuto2Course1.html"+" >1_ La cryptographie asymétrique garante de la propriété des informations </a> <br>" +
"<a href="+"Tuto2/Tuto2Course2.html"+">2_ Un réseau P2P, les noeuds, Proof of work (PoW), les mineurs, les blocs </a> <br>" +
"<a href="+"Tuto2/Tuto2Course3.html"+"> 3_ Temps de latence et règles de décisions </a> <br>" +
"Durant ce cours, nous allons vous expliquer le principe de fonctionnement d’une blockchain en prenant comme exemple la bitcoin. Je vous rappelle qu’il s’agit de la première blockchain. "; 
	}
	if (choix == 3){
		document.getElementById("tutoText").innerHTML = "maracas";
	}
}