
const ecran=document.querySelector('#ecran');
const btnunu=document.querySelector('#unu');
const btndoi=document.querySelector('#doi');
const btntrei=document.querySelector('#trei');
const btnpatru=document.querySelector('#patru');
const btncinci=document.querySelector('#cinci');
const btnsase=document.querySelector('#sase');
const btnsapte=document.querySelector('#sapte');
const btnopt=document.querySelector('#opt');
const btnnoua=document.querySelector('#noua');
const btnzero=document.querySelector('#zero');
const btnadunare=document.querySelector('#adunare');
const btnscadere=document.querySelector('#scadere');
const btninmultire=document.querySelector('#inmultire');
const btnimpartire=document.querySelector('#impartire');
const btnclear=document.querySelector('#clear');
const btnegal=document.querySelector('#egal');

let numar1=0;
let numar2=0;
let operator='';
let rezult=0;
let start=true;

function setNumar(caracter ,op){

	if (start)
	{
		ecran.innerHTML=caracter;
		start=false;
	}
	else
		ecran.innerHTML+=caracter;

	if (op=='')
		numar1 =   Number(ecran.innerHTML);
		
	else	
		numar2 =   Number(ecran.innerHTML);

			
}

btnunu.addEventListener('click', function() {
	setNumar('1' ,operator);		
});
btndoi.addEventListener('click', function() {
	setNumar('2' ,operator);
});
btntrei.addEventListener('click', function() {
	setNumar('3' ,operator);
});
btnpatru.addEventListener('click', function() {
	setNumar('4' ,operator);
});
btncinci.addEventListener('click', function() {
	setNumar('5' ,operator);
});
btnsase.addEventListener('click', function() {
	setNumar('6' ,operator);
});
btnsapte.addEventListener('click', function() {
	setNumar('7' ,operator);
});
btnopt.addEventListener('click', function() {
	setNumar('8' ,operator);
});
btnnoua.addEventListener('click', function() {
	setNumar('9' ,operator);
});
btnzero.addEventListener('click', function() {
	setNumar('0' ,operator);
});



btnadunare.addEventListener('click', function() {
	operator='plus';
	start=true;
	
});
btnscadere.addEventListener('click', function() {
	operator='minus';
	start=true;;
});
btninmultire.addEventListener('click', function() {
	operator='ori';
	start=true;
});
btnimpartire.addEventListener('click', function() {
	operator='imp';
	start=true;
});


btnclear.addEventListener('click', function() {
	ecran.innerHTML='0';
	start=true;
 	numar1=0;
	numar2=0;
	operator='';
	rezult=0;
});
btnegal.addEventListener('click', function() {
	
	switch (operator) {
	
		case 'plus': rezult=numar1+numar2;
		break;
		case 'minus': rezult=numar1-numar2;
		break;
		case 'ori': rezult=numar1*numar2;
		break;
		case 'imp': rezult=numar1/numar2;
		break;
		default: alert('Nu este selectat  operatorul!');
	}		
	
	ecran.innerHTML=rezult;
 	numar1=0;
	numar2=0;
	operator='';
	rezult=0;
	start=true;

});




