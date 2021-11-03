//alert("Ceas!");
const ecran=document.querySelector('#ecran-ceas');

function setCeasCalatorie(){
	let strTimp='';
	
	let data_curenta = new Date();
	let ora = String(data_curenta.getHours());
	let minut  = String(data_curenta.getMinutes());
	let secunda = String(data_curenta.getSeconds());
	strTimp = ora + ':' + minut +':' +secunda;
                // return strTimp;
	ecran.innerHTML=strTimp;
}


setInterval( function() {
		//ecran.innerHTML= setCeasCalatorie() ;  
		setCeasCalatorie(); 
 }  ,1000);


