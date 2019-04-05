var  todolodeusernfire;
var nodetodoadmin;
var todolodeadminfire;
var vinpnombre;
var  vpas
function inicia(){
var  vpass;/*
     // Initialize Firebase
     var config = {
      apiKey: "AIzaSyDhOtf_ssOp3KEOiu3nByOWcqJxXZEzVaA",
      authDomain: "concejalaginna.firebaseapp.com",
      databaseURL: "https://concejalaginna.firebaseio.com",
      projectId: "concejalaginna",
      storageBucket: "concejalaginna.appspot.com",
      messagingSenderId: "167282227815"
    };
    firebase.initializeApp(config);
*/
}















  // Initialize Firebase
  inicia();

  funatraefireadmi();
function funatraefireadmi(){
    firebase.database().ref().child("admin").once("value", function(snapshot) {
  
        todolodeadminfire=snapshot.val();
    


        firebase.database().ref().child("user").once("value", function(snapshot) {
  
          todolodeusernfire=snapshot.val();
      
      //    console.log("todolodeadminfire");
      //    console.log(todolodeadminfire);
          
  
      }, function (errorObject) {
      //  console.log("The read failed: " + errorObject.code);
      });

        
        

    }, function (errorObject) {
    //  console.log("The read failed: " + errorObject.code);
    });
  }

  funatraefireadmion();

  function funatraefireadmion(){
    firebase.database().ref().child("admin").on("value", function(snapshot) {
  
        todolodeadminfire=snapshot.val();
      
      }, function (errorObject) {
//console.log("The read failed: " + errorObject.code);
    });
  }


  firebase.database().ref().child("user").on("child_added", function(snapshot) {
  
    firebase.database().ref().child("admin").once("value", function(snapshot) {
  
      todolodeadminfire=snapshot.val();
  


      firebase.database().ref().child("user").once("value", function(snapshot) {

        todolodeusernfire=snapshot.val();
    
     //   console.log("todolodeadminfire");
      //  console.log(todolodeadminfire);
        

    }, function (errorObject) {
    //  console.log("The read failed: " + errorObject.code);
    });

      
      

  }, function (errorObject) {
  //  console.log("The read failed: " + errorObject.code);
  });


firebase.database().ref().child("user").child(snapshot.key).child("idfire").set(snapshot.key);
    

}, function (errorObject) {
 // console.log("The read failed: " + errorObject.code);
});





  var  soyadminabjto={objfire:0,estoylogeado:false};
  var  soyuserobj={objfire:0,estoylogeado:false};;

function fbtlogin(){

 vinpnombre=getv("idinpnombre");
 vpass=getv("inppass");
//console.log(vpass+"  aca");
//console.log(todolodeadminfire);
    for(var i in todolodeadminfire){
if(todolodeadminfire.nombre==vinpnombre&&todolodeadminfire.clave==vpass){
//window.location="index2.html";

soyadminabjto.estoylogeado=true;
}

    }


          
    for(var i in todolodeusernfire){
      if(todolodeusernfire[i].user==vinpnombre&&todolodeusernfire[i].pass==vpass){
    //  window.location="index2.html";
   
      soyuserobj.estoylogeado=true;
      }
      
          }
      
      if(soyadminabjto.estoylogeado||soyuserobj.estoylogeado){
		document.getElementById("idtodosolologin").style.display="none";
	  }


   
}

function getv(st){
   return document.getElementById(st).value;
}




//todo  usersubri nuevos  

var personausernuevbase;

var enontrouserregistrado=false;
var repitepassuser=false;
var repitepassuseuno=false;
		var vinputuserbasenuevonombre="";	
		var vinputuserbasenuevocedula="";
		var vinputuserbasenuevoemail="";
		var vinputuserbasenuevomobil="";	
		var vinputuserbasenuevouser="";
		var vinputuserbasenuevopass="";

		var bolvinputuserbasenuevonombre=false;	
		var bolvinputuserbasenuevocedula=false;
		var bolvinputuserbasenuevoemail=false;
		var bolvinputuserbasenuevomobil=false;	
		var bolvinputuserbasenuevouser=false;
		var bolvinputuserbasenuevopass=false;
		var bolvinputuserbasersitenemoseseuser=false;

			 bolvinputuserbasenuevonombre=false;	
		 bolvinputuserbasenuevocedula=false;
		 bolvinputuserbasenuevoemail=false;
		 bolvinputuserbasenuevomobil=false;	
		 bolvinputuserbasenuevouser=false;
		 bolvinputuserbasenuevopass=false;
		

var escribenuevouserbase="";
repitepassuser=false;

		function inioknuevouserbases(){
			vinputuserbasenuevonombre="";	
			vinputuserbasenuevocedula="";
			vinputuserbasenuevoemail="";
			vinputuserbasenuevomobil="";	
			vinputuserbasenuevouser="";
			vinputuserbasenuevopass="";
			repitepassuseuno=false;
			bolvinputuserbasenuevonombre=false;	
		 bolvinputuserbasenuevocedula=false;
		 bolvinputuserbasenuevoemail=false;
		 bolvinputuserbasenuevomobil=false;	
		 bolvinputuserbasenuevouser=false;
		 bolvinputuserbasenuevopass=false;
		 bolvinputuserbasersitenemoseseuser=false;
		 bolvinputuserbasersitenemoseseuser=false;
		 enontrouserregistrado=false;
		 escribenuevouserbase="";
		 repitepassuser=false;
		}
		function oknuevouserbase(){



			inioknuevouserbases();

		//	console.log("repitepassuser    "+repitepassuser);
			vinputuserbasenuevonombre=document.getElementById("inputuserbasenuevonombre").value;	
	 vinputuserbasenuevocedula=document.getElementById("inputuserbasenuevocedula").value;
	 vinputuserbasenuevoemail=document.getElementById("inputuserbasenuevoemail").value;
	 vinputuserbasenuevomobil=document.getElementById("inputuserbasenuevomobil").value;	
	 vinputuserbasenuevouser=document.getElementById("inputuserbasenuevouser").value;
	 vinputuserbasenuevopass=document.getElementById("inputuserbasenuevopass").value;
//	 console.log(todolodeusernfire);
	// console.log("repitepassuser    "+repitepassuser);
for(var i in todolodeusernfire){
	console.log("enontrouserregistrado  " +enontrouserregistrado);

	if(!enontrouserregistrado){
//"aca1");
//console.log("repitepassuser    "+repitepassuser);
		if( todolodeusernfire[i].cedula==vinputuserbasenuevocedula){
	//		console.log("enontrouserregistrado  " +enontrouserregistrado+" "+i);
			bolvinputuserbasersitenemoseseuser=true;
		enontrouserregistrado=true;	console.log("enontrouserregistrado  " +enontrouserregistrado+" "+i
		+" "+todolodeusernfire[i].cedula+"   "+vinputuserbasenuevocedula);
		escribenuevouserbase="no se  registro tenemos ese usuario";
	//	console.log("aca2");		escribuserbasenuevo(	escribenuevouserbase);
	}
	else{bolvinputuserbasersitenemoseseuser=false;
	
	//	console.log("aca3-1b");
		for(var i in todolodeusernfire){console.log("aca3-1");
if(!repitepassuseuno){
//	console.log("aca3");console.log("=   "+todolodeusernfire[i].pass+"    "+vinputuserbasenuevopass);
if(todolodeusernfire[i].pass==vinputuserbasenuevopass){
	
//	console.log("en este "+ i);
//	console.log("en este "+ i);
	repitepassuseuno=true;
///	console.log("repitepassuser    "+repitepassuser);
	repitepassuser=true;
	
//	console.log("repitepassuser    "+repitepassuser);

}



}




		}



	
	
	}






	}

}

if(repitepassuseuno){	escribenuevouserbase=" "+escribenuevouserbase+" "+ "pass repetido ";}
else{	escribenuevouserbase=" "+escribenuevouserbase;}




	
personausernuevbase={

nombre:vinputuserbasenuevonombre,
email:vinputuserbasenuevoemail,
user:vinputuserbasenuevouser,
pass:vinputuserbasenuevopass,
cedula:vinputuserbasenuevocedula,
mobil:vinputuserbasenuevomobil,
idfire:"sinid"

};

if(vinputuserbasenuevonombre==""){bolvinputuserbasenuevonombre=false; ;escribenuevouserbase= " "+escribenuevouserbase+" "+ "falta el nombre ";}
else{bolvinputuserbasenuevonombre=true;}
if(vinputuserbasenuevocedula==""){bolvinputuserbasenuevocedula=false; ;escribenuevouserbase= " "+escribenuevouserbase+" "+ "falta la cedula ";}
else{bolvinputuserbasenuevocedula=true;}
if(vinputuserbasenuevoemail==""){bolvinputuserbasenuevoemail=false; ;escribenuevouserbase= " "+escribenuevouserbase+" "+ "falta el email ";}
else{bolvinputuserbasenuevoemail=true;}

if(vinputuserbasenuevomobil==""){bolvinputuserbasenuevomobil=false; ;escribenuevouserbase= " "+escribenuevouserbase+" "+ "falta el mobil ";}
else{bolvinputuserbasenuevomobil=true;}
if(vinputuserbasenuevouser==""){bolvinputuserbasenuevouser=false; ;escribenuevouserbase= " "+escribenuevouserbase+" "+ "falta el user ";}
else{bolvinputuserbasenuevouser=true;}
if(vinputuserbasenuevouser==""){bolvinputuserbasenuevopass=false; ;escribenuevouserbase= " "+escribenuevouserbase+" "+ "falta el pass ";}
else{bolvinputuserbasenuevopass=true;}

if(!repitepassuser&&!bolvinputuserbasersitenemoseseuser){


	if(bolvinputuserbasenuevonombre&&bolvinputuserbasenuevocedula&&
bolvinputuserbasenuevouser&&bolvinputuserbasenuevopass){
escribuserbasenuevo(" creado  nuevo usuario ");
escribenuevouserbase="creado  nuevo usuario ";
//document.getElementById("idrh2nueuser").style.color = "#idrh2nueuser";
firebase.database().ref().child("user").push(personausernuevbase);
}
else{

escribuserbasenuevo(" no  se guardo "+escribenuevouserbase);
}

}



	
escribuserbasenuevo(escribenuevouserbase);

}

function escribuserbasenuevo(st){

document.getElementById("idrh2nueuser").innerHTML=st;
}
	

function fidbtcerrauserbasenuevo(){

	document.getElementById("idloginpanelmenubase").style.display="block";
	document.getElementById("idnuevouserbase").style.display="none";
}

function fcrearcuentuserbt(){
	document.getElementById("idloginpanelmenubase").style.display="none";
	document.getElementById("idnuevouserbase").style.display="block";
}




document.getElementById("idnuevouserbase").style.display="none";



// finf todo user  subir nuesvos










