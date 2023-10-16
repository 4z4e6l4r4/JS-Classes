class Ogrenci {
    constructor(Name, Surname, Age) {
        this.Name = Name;
        this.Surname = Surname;
        this.Age = Age;
    }
}

class Sinif {
    constructor(Name) {
        this.Name = Name;
        this.OgrenciListesi = [];
    }

    addStudent(Ogrenci) {
        if (Ogrenci.Name != "" && Ogrenci.Surname != "") {
            this.OgrenciListesi.push(Ogrenci);
            alert(Ogrenci.Name + " Adlı Öğrenci Başarılı Bir Şekilde Eklendi");
        }
        else {
            alert("Öğrenci Ekleme Başarısız. Tekrar Deneyiniz");
        }
    }
    deleteStudent(Ogrenci) {
        this.OgrenciListesi = this.OgrenciListesi.filter((ogr) => ogr != Ogrenci);
    }
}





let siniflar = [];




const tableOgrenciler = document.getElementById("ogrenciler");
const secilenSiniflar = document.getElementById("siniflar");



// Seçilen sınıfın öğrencilerini tabloya ekleyen fonksiyon. 
// Önyüzde sınıf seçildiğinde çalışıyor. Önce tabloyu boşaltıyoruz. 
// Ardından seçilen sınıfı buluyoruz. Sonrasında bu sınıfın öğrencilerini döngü ile dönüyoruz. 
// Döngü içerisinde tabloya öğrencileri ekliyoruz. Sonrasında tabloyu güncellemek için updateTable fonksiyonunu çalıştırıyoruz. 
// Önyüzde seçilen sınıfın öğrencilerini gösteriyor.

function updateTable(secilenSinif) {
    tableOgrenciler.innerHTML = "";
    var ss;
    if (secilenSinif != "") {
        ss = siniflar.find((item) => item.Name === secilenSinif);
    }
    else {
        ss = siniflar.find((item) => item.Name === secilenSiniflar.value);
    }

  
    ss.OgrenciListesi.forEach(function (ogr) {
        

        const tr = document.createElement("tr");

        const nameTd = document.createElement("td");
        nameTd.textContent = ogr.Name;
        const surnameTd = document.createElement("td");
        surnameTd.textContent = ogr.Surname;
        const ageTd = document.createElement("td");
        ageTd.textContent = ogr.Age;

        const deleteBtnTd = document.createElement("td");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "btn btn-danger btn-sm";

        deleteBtn.addEventListener("click", () => {
            deleteS(ss.Name, ogr);
        })

        deleteBtnTd.appendChild(deleteBtn)

        tr.appendChild(nameTd);
        tr.appendChild(surnameTd);
        tr.appendChild(ageTd);
        tr.appendChild(deleteBtnTd);

        tableOgrenciler.appendChild(tr);

    })
    //tableOgrenciler.innerHTML=tableData;
}

// Öğrenci ekle butonuna tıklandığında çalışacak fonksiyon. Önce öğrencinin adını, soyadını ve yaşını alıyoruz. 
// Ardından yeni bir öğrenci oluşturuyoruz. Sonrasında seçilen sınıfı buluyoruz. 
// Ardından bu sınıfın addStudent fonksiyonunu çalıştırıyoruz ve öğrenciyi ekliyoruz. 
// Sonrasında updateTable fonksiyonunu çalıştırıyoruz ve tabloyu güncelliyoruz. Önyüzde seçilen sınıfın öğrencilerini gösteriyor.

document.getElementById("addStudent").addEventListener("click", () => {
    const name = document.getElementById("Name").value;
    const surname = document.getElementById("Surname").value;
    const age = document.getElementById("Age").value;

    let newStudent = new Ogrenci(name, surname, age);
    var ss = siniflar.find((item) => item.Name === secilenSiniflar.value);

    ss.addStudent(newStudent);
    updateTable(secilenSiniflar.value);
})

// Seçilen sınıftan öğrenci silen fonksiyon. Önyüzde sil butonuna tıklandığında çalışıyor. 
// Önce seçilen sınıfı buluyoruz. Ardından bu sınıfın deleteStudent fonksiyonunu çalıştırıyoruz ve öğrenciyi siliyoruz. 
// Sonrasında updateTable fonksiyonunu çalıştırıyoruz ve tabloyu güncelliyoruz. Önyüzde seçilen sınıfın öğrencilerini gösteriyor.

function deleteS(ClassName, Ogrenci) {
    const selectClass = siniflar.find((sinifBul) => sinifBul.Name === ClassName);
    selectClass.deleteStudent(Ogrenci);
    updateTable(secilenSiniflar.value);
}


// Seçilen sınıflar değiştiğinde çalışacak fonksiyon, item.target.value ile seçilen sınıfın değerini alıyoruz. 
// Sonrasında updateTable fonksiyonuna bu değeri gönderiyoruz. Ardından updateTable fonksiyonu çalışıyor ve tabloyu güncelliyor. 
// Önyüzde seçilen sınıfın öğrencilerini gösteriyor.
// --- >
secilenSiniflar.addEventListener("change", (item) => {
    updateTable(item.target.value);
}) 
// < ---


// Seçilen sınıfları select içerisine ekleyen fonksiyon. Önyüzde sınıf ekle butonuna tıklandığında çalışıyor. 
function addClassToSelect() {
    secilenSiniflar.innerHTML = ''; 
    siniflar.forEach(sinif => {
        let option = document.createElement('option');
        option.value = sinif.Name;
        option.textContent = sinif.Name;
        secilenSiniflar.appendChild(option);
    });
}

// Sınıf ekle butonuna tıklandığında çalışacak fonksiyon. Önyüzde sınıf ekle butonuna tıklandığında çalışıyor. 
// Önce sınıf adını alıyoruz. Ardından sınıf adının boş olup olmadığını kontrol ediyoruz. 
// Boş değilse yeni bir sınıf oluşturuyoruz ve bu sınıfı siniflar dizisine ekliyoruz. 
// Sonrasında addClassToSelect fonksiyonunu çalıştırıyoruz. Ardından kullanıcıya sınıf eklendiğine dair bir alert gösteriyoruz.

document.getElementById("addClass").addEventListener("click", () => {
    const className = document.getElementById("className").value;
    if (className!= null) {
        let yeniSinif = new Sinif(className);
        siniflar.push(yeniSinif);
        addClassToSelect();
        alert(` ${className} adlı sınıf başarılı bir şekilde eklendi. `);
    } else {
        alert("Lütfen sınıf adı girin.");
    }
});