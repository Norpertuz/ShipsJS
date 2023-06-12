$( document ).ready(function() {
  $(".prostokat").css("background-color","white");
    $(".Pprostokat").css("background-color","white");
	alert("Sterowanie: \n LPM-Trafienie \n PPM-Pudło \n G-Wymazywanie \n S-Stawianie statków.\n Z-Kolor pomocniczy (zatopienie) \n Tylko dla wersji B.Dużej: \n L-Logi/Menu \n V-Przełącz widok \n")
    console.log( "ready!" );

document.oncontextmenu = function() {return false;};
var wybor;
var przycisk;
var ilosc_niebieskich=0;
var tak=1;
var tak1=1;
var tak2=0;
var ukrycie='0';
var pozostalo=56;
var b_duza=0;
var ukrycie_logi='0';




//LPM
$( ".prostokat" ).click(function( event ) {
wybor = event.target.id;
if(event.target.style.backgroundColor == "blue")
{
ilosc_niebieskich--;
 $( "#niebieskie" ).html( "Ilosc Niebieskich Kwadratow: " + ilosc_niebieskich );
}
  $( "#log" ).html( "Pudlo: " + wybor );
  $('#' + wybor).css("background-color","black");
});
//PPM
$( ".prostokat" ).contextmenu(function( event ) {
wybor = event.target.id;
if(event.target.style.backgroundColor == "blue")
{
ilosc_niebieskich--;
 $( "#niebieskie" ).html( "Ilosc Niebieskich Kwadratow: " + ilosc_niebieskich );
}
  $( "#log" ).html( "Trafiony: " + wybor );
  $('#' + wybor).css("background-color","red");
});


//stawianie statkow lub czegos innego (niebieski) // przycisk S
$(".prostokat").mouseover(function( event ){
wybor = event.target.id;
if(event.target.style.backgroundColor != "blue"){
tak=1;
}
if(event.target.style.backgroundColor != "white"){
tak1=1;
}
});

$(".prostokat").mouseleave(function() {
wybor = null;
   tak=0;
   tak1=0;
  });
  
 
  
  
  $(".Pprostokat").mouseover(function( event ){
wybor = event.target.id;
if(event.target.style.backgroundColor != "blue"){
tak=2;
}
if(event.target.style.backgroundColor == "red" || event.target.style.backgroundColor == "purple" ){
tak2=1;
}
if(event.target.style.backgroundColor != "white"){
tak1=1;
}
});

$(".Pprostokat").mouseleave(function() {
wybor = null;

   tak1=0;
   tak2=0;
  });

  
  $("body").keydown(function( event ){
  przycisk = event.which;
  
  
  
  
   if(przycisk == "71" && tak1==1){
 


if(tak2==1){
pozostalo++;
 $( "#zostalo" ).html( "Niebieskie kwadraty przeciwnika: " + pozostalo );
 tak2=0;
}
 
 if(tak==0){
ilosc_niebieskich--;
 $( "#niebieskie" ).html( "Ilosc Niebieskich Kwadratow: " + ilosc_niebieskich );
 tak=1;
}
 
 $('#' + wybor).css("background-color","white");
    $( "#log" ).html( "Wyczyszczono " + wybor );
tak1=0;

 }
  
  });
  

$("body").keydown(function( event ){
przycisk = event.which;
 if(przycisk == "83" && tak==1)
 {
  ilosc_niebieskich++;
    $('#' + wybor).css("background-color","blue");
    $( "#log" ).html( "Umieszczono (Niebieski): " + wybor );
  $( "#niebieskie" ).html( "Ilosc Niebieskich Kwadratow: " + ilosc_niebieskich );
tak=0;
 }
 

    });
	
	

	
	
	

//alert(event.target.style.backgroundColor); - sprawdzanie koloru tła


//LPM //strzelanie
$( ".Pprostokat" ).click(function( event ) {
wybor = event.target.id;

if(event.target.style.backgroundColor != "black")
{
  $( "#log" ).html( "Pudlo: " + wybor );
  if(event.target.style.backgroundColor == "red")
{
pozostalo++;
  $( "#zostalo" ).html( "Niebieskie kwadraty przeciwnika: " + pozostalo );
}
  $('#' + wybor).css("background-color","black");

}
});
//PPM //usuwanie
$( ".Pprostokat" ).contextmenu(function( event ) {
wybor = event.target.id;
if(event.target.style.backgroundColor != "red")
{
	if(event.target.style.backgroundColor != "purple")
  {
  pozostalo--;
   $( "#zostalo" ).html( "Niebieskie kwadraty przeciwnika: " + pozostalo );
  $( "#log" ).html( "Trafiony: " + wybor );
  }
  $('#' + wybor).css("background-color","red");

}
});

$("body").keydown(function( event ){
przycisk = event.which;
 if(przycisk == "90" && tak2==1)
 {
 
    $('#' + wybor).css("background-color","purple");
 tak2=0;
 }
 

    });


//zarowanie planszy
$( "#zeruj" ).click(function( event ) {
  $( "#log" ).html( "plansze zostały wyzerowane");
  $(".prostokat").css("background-color","white");
    $(".Pprostokat").css("background-color","white");
   ilosc_niebieskich=0;
   pozostalo=56;
     $( "#niebieskie" ).html( "Ilosc Niebieskich Kwadratow: " + ilosc_niebieskich );
});


//ukrywanie planszy
$("#p2").click(function(event){

switch(ukrycie)
{
case '1': {
ukrycie = '0'; $("#plansza").css("visibility","hidden");  
$("#plansza1").css("position","absolute");  
$("#plansza1").css("left","10px");  




} break;
case '0': {
ukrycie ='1'; $("#plansza").css("visibility","visible");  
$("#plansza1").css("position","static");  

} break;

}

});

//b. duzo plansza manualna------------------------------------


//rozpoczecie gry

$("#nowa").click(function(event){
b_duza=1;

 $( "#log" ).html( "plansze zostały wyzerowane");
 $(".prostokat").css("background-color","white");
 $(".Pprostokat").css("background-color","white");
 ilosc_niebieskich=0;
 pozostalo=104;
 ukrycie_logi='0';
 $( "#niebieskie" ).html( "Ilosc Niebieskich Kwadratow: " + ilosc_niebieskich );
   $( "#zostalo" ).html( "Niebieskie kwadraty przeciwnika: " + pozostalo );


$( "#ilosc_statki" ).html( "Ilość statków (max:104): 2x10 3x10 4x5 5x3 6x2 7x1");

//$("#logs").css("position","static");  
$("#logs").css("visibility","hidden");  

ukrycie ='1';
$("#plansza").css("visibility","visible");  
$("#plansza1").css("visibility","hidden");  
$("#plansza1").css("position","static");  
$("#plansza").css("position","absolute");  
$("#plansza").css("left","10px");  
});


//logi na litere m
$("body").keydown(function( event ){
przycisk = event.which;
 if(przycisk == "76" && b_duza==1)
 {

switch(ukrycie_logi)
{
	
case '1': {
ukrycie_logi = '0'; 
$("#logs").css("visibility","hidden");  
} break;
case '0': {
ukrycie_logi ='1';
$("#logs").css("visibility","visible");  
} break;

}

 }
 

});


//przelaczanie widoku


//-na litere v
$("body").keydown(function( event ){
przycisk = event.which;
 if(przycisk == "86" && b_duza==1)
 {

switch(ukrycie)
{
case '1': {
ukrycie = '0'; 
$("#plansza1").css("visibility","visible");  
$("#plansza").css("visibility","hidden");  
$("#plansza").css("position","static");  
$("#plansza1").css("position","absolute");  
$("#plansza1").css("left","10px");  





} break;
case '0': {
ukrycie ='1';
$("#plansza").css("visibility","visible");  
$("#plansza1").css("visibility","hidden");  
$("#plansza1").css("position","static");  
$("#plansza").css("position","absolute");  
$("#plansza").css("left","10px");  
} break;

}

 }
 

    });

//-na przycisk
$("#p3").click(function(event){

switch(ukrycie)
{
case '1': {
ukrycie = '0'; 
$("#plansza1").css("visibility","visible");  
$("#plansza").css("visibility","hidden");  
$("#plansza").css("position","static");  
$("#plansza1").css("position","absolute");  
$("#plansza1").css("left","10px");  





} break;
case '0': {
ukrycie ='1';
$("#plansza").css("visibility","visible");  
$("#plansza1").css("visibility","hidden");  
$("#plansza1").css("position","static");  
$("#plansza").css("position","absolute");  
$("#plansza").css("left","10px");  
} break;

}

});




});