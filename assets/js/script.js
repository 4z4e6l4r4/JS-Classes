class ogrenci{
    constructor(Name,Surname,Age,TcNo){
        this.Name=Name;
        this.Surname=Surname;
        this.Age=Age;
        this.TcNo=TcNo;
    }

    merhaba(){
        alert(`Merhaba Arkadaşlar Ben ${this.Name}`)
    }
}

var ismail=new ogrenci("İsmail","Güleç",25,"123123123123");

alert(`Name: ${ismail.Name}\n Surname: ${ismail.Surname}`)
ismail.merhaba()