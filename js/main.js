let dolar=prompt("Ingrese la cantidad de $ en dolares");
if(dolar=="SALIR"){
    alert("No ingresaste monto");
}else{
    while(dolar!="SALIR"){
        alert("Necesita $" + dolar*119.4);
    
    
        //condicion de salida
        dolar=prompt("Ingrese la cantidad de $ en dolares");
    }
    alert("Gracias por usar el conversor");
}

