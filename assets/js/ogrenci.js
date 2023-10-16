class ogrenci{
    constructor(Name,Surname,Age){
        this.Name=Name;
        this.Surname=Surname;
        this.Age=Age;
    }
}

var ogrenciler=[];

var ogr1=new ogrenci("Erhan","Kaya",33);
var ogr2=new ogrenci("Mehmet","Çetinarslan",23);
var ogr3=new ogrenci("Azra","Yüksel",22);
var ogr4=new ogrenci("Ali Rıza","Durak",24);

ogrenciler.push(ogr1);
ogrenciler.push(ogr2);
ogrenciler.push(ogr3);
ogrenciler.push(ogr4);

const ogrtable=document.getElementById("ogrenciler");

var tableData="";

// ogrenciler.forEach(function(ogr){
//     tableData+=`<tr><td>${ogr.Name}</td><td>${ogr.Surname}</td><td>${ogr.Age}</td></tr>`;
// })

for(let i=0;i<ogrenciler.length;i++){
    var ogr=ogrenciler[i];
    tableData+=`<tr><td>${ogr.Name}</td><td>${ogr.Surname}</td><td>${ogr.Age}</td></tr>`;
}

ogrtable.innerHTML=tableData;