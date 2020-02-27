var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paletaGlobal=document.getElementById('paleta');
var grillaGlobal=document.getElementById('grilla-pixeles');

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    colorPincel.style.backgroundColor=colorActual;

  })
);


var colorPincel=document.getElementById('indicador-de-color');
//con target extraigo el elemento seleccionado
//cambio de color en el selector del pincel al seleccionar un color de la paleta
    paletaGlobal.addEventListener('click',function(evento){colorPincel.style.backgroundColor=evento.target.style.backgroundColor});

//accion para pintar un pixel
    grillaGlobal.addEventListener('click',function(evento){evento.target.style.backgroundColor=colorPincel.style.backgroundColor}); 

//accion para pintar mientras se mantiene presionado el click   
     grillaGlobal.addEventListener('mouseover',function(evento){ pintar(evento);} );

function pintar(evento){
  if(estadoClick){
    evento.target.style.backgroundColor=colorPincel.style.backgroundColor;
  }
};


var estadoClick=false;
grillaGlobal.onmousedown=function(){estadoClick=true;};
grillaGlobal.onmouseup=function(){estadoClick=false;};

//Borrado de grilla
var borrar=document.getElementById('borrar');
borrar.addEventListener('click',function(){borrarLienzo();});

function borrarLienzo(){
  $(".pixelGrilla").animate({"background-color":"#fff"},1000);
};

//Cargar superheroes en lienzo
$batman = $("#batman");
$wonder = $("#wonder");
$flash =  $("#flash");
$invisible = $("#invisible");
function cargarImagen(elemento, superheroe){
  elemento.click(function(){cargarSuperheroe(superheroe)})
}

cargarImagen($batman,batman);//CARGA A BATMAN
cargarImagen($wonder,wonder);//CARGA A WONDER
cargarImagen($flash,flash);  //CARGA A FLASH
cargarImagen($invisible,invisible);//CARGA A INVISIBLE

//guardar dibujo
var botonGuardar=document.getElementById('guardar');
botonGuardar.addEventListener('click',function(){guardarPixelArt();});


var generaPaleta=function(){
  for(i=0;i<nombreColores.length;i++){
   
    var div=document.createElement('div');
    div.className="color-paleta";
    div.style.backgroundColor=nombreColores[i];
    paletaGlobal.appendChild(div); //el elemento creado por la funcion será hijo del elemento paleta.
    //div.addEventListener("click", function(){colorElegido = this.style.backgroundColor})
   
  }
}

var generaGrilla=function(){
  for(i=0;i<1751 ;i++){
    var divGrilla=document.createElement('div');
    divGrilla.className='pixelGrilla';
    
    grillaGlobal.appendChild(divGrilla);
  }

}

window.onload = function() {
generaPaleta();
generaGrilla();
}