let row = document.getElementById('row');
let contianer = document.getElementById('contianer')

const response = fetch('https://dattebayo-api.onrender.com/characters');
response
.then((data)=> data.json())
.then((ele)=>{
    for (let i = 0; i < ele.characters.length; i++) {
        const col = document.createElement("div");
        col.classList = "col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-2 mb-2";
        col.innerHTML = `
            <div class="card text-center h-100">
              <div class= "card-body">
                <div class= "card-text ">
                  <div class="card-header"><h5 class= "text-center" id="cardTitle">${ele.characters[i].name}</h5></div>
                  <img src="${ele.characters[i].images[0]}" class="card-img-top" alt="img of a naruto char">
                  <p class = "mt-3 ">Debut : ${ele.characters[i].debut.anime}</p>
                  <p>Nature Type :${ele.characters[i].natureType[0]}</p>
                  <p>A Jutsu : ${ele.characters[i].jutsu[0]}</p>      
                </div>   
              </div>
            </div>
            `;
        console.log(ele.characters[i]);
        row.append(col);
    }
    
})

contianer.append(row);
document.body.append(contianer);