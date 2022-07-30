const sizes = [{
        isChosen: false,
        text: 'маленькая',
        className: 'small-button',
        price: 13.90
    },
    {
        isChosen: false,
        text: 'средняя',
        className: 'mid-button',
        price: 19.90
    },
    {
        isChosen: false,
        text: 'большая',
        className: 'big-button',
        price: 23.90
    }
];



const chezzes = [{
        isChosen: false,
        text: 'моцарелла',
        className: 'mozarella-button',
        price: 2.45
    },
    {
        isChosen: false,
        text: 'фета',
        className: 'feta-button',
        price: 2.50
    },
    {
        isChosen: false,
        text: 'сливочный',
        className: 'slivochni-button',
        price: 2.40
    }
];


const meats = [{
        isChosen: false,
        text: 'ветчина',
        className: 'vetchina-button',
        price: 2.40
    },
    {
        isChosen: false,
        text: 'салями',
        className: 'salami-button',
        price: 1.80
    },
    {
        isChosen: false,
        text: 'помидоры',
        className: 'pomidor-button',
        price: 1.20
    }
]


const sauces = [{
        isChosen: false,
        text: 'сырный соус',
        className: 'cheze-button',
        price: 0.30
    },
    {
        isChosen: false,
        text: 'чесночный соус',
        className: 'chesnok-button',
        price: 0.30
    },
    {
        isChosen: false,
        text: 'кетчуп',
        className: 'ketchup-button',
        price: 0.30
    }
]




let meatArr = []
let chezeArr = []
//SIZE

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;


let obj = {
}



const pizzaConstructor = document.getElementsByClassName('constructor')[0];

pizzaConstructor.addEventListener('click', (event) => {
    sizes.forEach((size) => {
        if (size.className === event.target.className) {
            document.getElementById("order-size-p").textContent = size.text;
            a = size.price;
            size.isChosen = true;
            sizeObj = size.text
            a = size.price
            a.toFixed(2)
            console.log(sizes)
            obj.size = size.text
        } else {
            size.isChosen = false
        }
    });

    
    
    
    changePizzaImg()
    
});


//CHEZE

const chezzeConstructor = document.getElementsByClassName('constructor')[0];

chezzeConstructor.addEventListener('click', (event) => {
    chezzes.forEach((cheze) => {
        if (chezeArr.length < 2) {
        if (cheze.className === event.target.className) {
            if (document.getElementById("order-cheze-p").textContent === "Не выбрано" ) {
                document.getElementById("order-cheze-p").textContent = cheze.text;
                b = cheze.price;
                b.toFixed(2)
                cheze.isChosen = true;
                chezeArr.push(cheze.text);
                obj.cheze1 = cheze.text
            } else if (document.getElementById("order-cheze-p2").textContent === "Не выбрано") {
                document.getElementById("order-cheze-p2").textContent = cheze.text;
                chezeArr.push(cheze.text)
                c = cheze.price
                c.toFixed(2)
                obj.cheze2 = cheze.text
                cheze.isChosen = true;
            }
            else {cheze.isChosen = false;}
        }}
    });
    addPrice()
    removePrice()
    enableButton()
    
    
    
    changePizzaImg()
    
});





//Meat
const meatConstructor = document.getElementsByClassName('constructor')[0];

meatConstructor.addEventListener('click', (event) => {
    meats.forEach((meat) => {
        if (meatArr.length < 2) {
        if (meat.className === event.target.className) {
            if (document.getElementById("order-meat-p").textContent === "Не выбрано" ) {
                document.getElementById("order-meat-p").textContent = meat.text;
                d = meat.price;
                d.toFixed(2)
                meat.isChosen = true;
                meatArr.push(meat.text);
                obj.meat1 = meat.text
            } else if (document.getElementById("order-meat-p2").textContent === "Не выбрано") {
                document.getElementById("order-meat-p2").textContent = meat.text;
                meatArr.push(meat.text)

                e = meat.price
                e.toFixed(2)
                
                obj.meat2 = meat.text
            }
        }
        addPrice()
        removePrice()
        enableButton()
        
        
        
        changePizzaImg()
        }
    });
});

// SAUSES

const sauceConstructor = document.getElementsByClassName('constructor')[0];


sauceConstructor.addEventListener('click', (event) => {
    sauces.forEach((sauce) => {
        if (sauce.className === event.target.className) {
            document.getElementById("order-sauce-p").textContent = sauce.text;
            sauce.isChosen = true;
            sauceObj = sauce.text
        f = sauce.price
        f.toFixed(2)  
        obj.sauce = sauce.text
        } else {
            sauce.isChosen = false
        }
    });
    
    
    
    changePizzaImg()
    
    addPrice()
        removePrice()
        enableButton()
});




//SIZE
document.getElementById('order-size-p').addEventListener('click', () => {document.getElementById('order-size-p').textContent = 'Не выбрано';
a = 0
addPrice()
enableButton()



changePizzaImg()

if (sizes[0].isChosen === true) {sizes[0].isChosen = false}
 else if (sizes[1].isChosen === true) {sizes[1].isChosen = false}
 else if (sizes[2].isChosen === true) {sizes[2].isChosen = false}
})


//CHEZE
document.getElementById('order-cheze-p').addEventListener('click', () => {document.getElementById('order-cheze-p').textContent = 'Не выбрано';
 b = 0
 addPrice()
 enableButton()
 
 
 
 changePizzaImg()
 
 if (chezzes[0].isChosen === true) {chezzes[0].isChosen = false
    chezeArr.splice(chezeArr.indexOf('моцарелла'), 1)} 
  else if (chezzes[1].isChosen === true) {chezzes[1].isChosen = false
    chezeArr.splice(chezeArr.indexOf('фета'), 1)}
  else if (chezzes[2].isChosen === true) {chezzes[2].isChosen = false
    chezeArr.splice(chezeArr.indexOf('сливочный'), 1)}})

    document.getElementById('order-cheze-p2').addEventListener('click', () => {document.getElementById('order-cheze-p2').textContent = 'Не выбрано';
    c = 0
    addPrice()
    enableButton()
    
    
    
    changePizzaImg()
    
    if (chezzes[0].isChosen === true) {chezzes[0].isChosen = false
        chezeArr.splice(chezeArr.indexOf('моцарелла'), 1)}
     else if (chezzes[1].isChosen === true) {chezzes[1].isChosen = false
       chezeArr.splice(chezeArr.indexOf('фета'), 1)
   }
     else if (chezzes[2].isChosen === true) {chezzes[2].isChosen = false
        chezeArr.splice(chezeArr.indexOf('сливочный'), 1)}})


 //MEAT
 document.getElementById('order-meat-p').addEventListener('click', () => {document.getElementById('order-meat-p').textContent = 'Не выбрано';
 d = 0
 addPrice()
 enableButton()
 
 
 
 changePizzaImg()
 
 if (meats[0].isChosen === true) {meats[0].isChosen = false
    meatArr.splice(meatArr.indexOf('ветчина'), 1)} 
  else if (meats[1].isChosen === true) {meats[1].isChosen = false
    meatArr.splice(meatArr.indexOf('салями'), 1)}
  else if (meats[2].isChosen === true) {meats[2].isChosen = false
    meatArr.splice(meatArr.indexOf('помидоры'), 1)}})

  document.getElementById('order-meat-p2').addEventListener('click', () => {document.getElementById('order-meat-p2').textContent = 'Не выбрано';
 e = 0
 addPrice()
 enableButton()
 
 
 
 changePizzaImg()
 
 if (meats[0].isChosen === true) {meats[0].isChosen = false
    meatArr.splice(meatArr.indexOf('ветчина'), 1)}
  else if (meats[1].isChosen === true) {meats[1].isChosen = false
    meatArr.splice(meatArr.indexOf('салями'), 1)
}
  else if (meats[2].isChosen === true) {meats[2].isChosen = false
    meatArr.splice(meatArr.indexOf('помидоры'), 1)}})


//SAUCE
document.getElementById('order-sauce-p').addEventListener('click', () => {document.getElementById('order-sauce-p').textContent = 'Не выбрано';
f = 0
addPrice()
enableButton()



changePizzaImg()

if (sauces[0].isChosen === true) {sauces[0].isChosen = false;}
 else if (sauces[1].isChosen === true) {sauces[1].isChosen = false}
 else if (sauces[2].isChosen === true) {sauces[2].isChosen = false}})



let priceAll = 0;


function addPrice() {
    let num = (a + b + c + d + e + f);
    num.toFixed(2) 
priceAll = num.toFixed(2)
document.getElementById('price-p').innerHTML = priceAll;
}
// addPrice()
// removePrice()

function removePrice () {if (document.getElementById('order-size-p').textContent === 'Не выбрано') { 
    document.getElementById('price').textContent = (priceAll - a).toFixed(2)
    enableButton()
    
    
    
    changePizzaImg()
    
}
    else if (document.getElementById('order-cheze-p').textContent === 'Не выбрано') {
        document.getElementById('price-p').textContent = (priceAll - b).toFixed(2)
        enableButton()
        
        
        
        changePizzaImg()
        
    }
    else if (document.getElementById('order-cheze-p2').textContent === 'Не выбрано') {
        document.getElementById('price-p').textContent = (priceAll - c).toFixed(2)
        enableButton()
        
        
        
        changePizzaImg()
        
    }
    else if (document.getElementById('order-meat-p').textContent === 'Не выбрано') {
        document.getElementById('price-p').textContent = (priceAll - d).toFixed(2)
        enableButton()
        
        
        
        changePizzaImg()
        
    }
    else if (document.getElementById('order-meat-p2').textContent === 'Не выбрано') {
        document.getElementById('price-p').textContent = (priceAll - e).toFixed(2)
        enableButton()
        
        
        
        changePizzaImg()
        
    }
    else if (document.getElementById('order-sauce-p').textContent === 'Не выбрано') {
        document.getElementById('price-p').textContent = (priceAll - f).toFixed(2)
        enableButton()
        
        
        
        changePizzaImg()
        
    }}
    

  function enableButton() {if ((document.getElementById("order-size-p").textContent == "маленькая" || document.getElementById("order-size-p").textContent == "средняя" || document.getElementById("order-size-p").textContent == "большая") && (document.getElementById("order-cheze-p").textContent == "моцарелла" || document.getElementById("order-cheze-p").textContent == "фета" || document.getElementById("order-cheze-p").textContent == "сливочный" || document.getElementById("order-cheze-p2").textContent == "моцарелла" || document.getElementById("order-cheze-p2").textContent == "фета" || document.getElementById("order-cheze-p2").textContent == "сливочный") && (document.getElementById("order-meat-p").textContent == "салями" || document.getElementById("order-meat-p").textContent == "помидоры" || document.getElementById("order-meat-p").textContent == "ветчина" || document.getElementById("order-meat-p2").textContent == "салями" || document.getElementById("order-meat-p2").textContent == "помидоры" || document.getElementById("order-meat-p2").textContent == "ветчина") && (document.getElementById("order-sauce-p").textContent == "чесночный соус" || document.getElementById("order-sauce-p").textContent == "сырный соус" || document.getElementById("order-sauce-p").textContent == "кетчуп")) {document.getElementById('order-button').style.display = "inline-block"
  console.log(obj)
  }else {document.getElementById('order-button').style.display = "none"}}




function changePizzaImg() {if ((document.getElementById("order-size-p").textContent == "маленькая" || document.getElementById("order-size-p").textContent == "средняя" || document.getElementById("order-size-p").textContent == "большая") && (document.getElementById("order-cheze-p").textContent == "моцарелла" || document.getElementById("order-cheze-p").textContent == "фета" || document.getElementById("order-cheze-p").textContent == "сливочный" || document.getElementById("order-cheze-p2").textContent == "моцарелла" || document.getElementById("order-cheze-p2").textContent == "фета" || document.getElementById("order-cheze-p2").textContent == "сливочный") && (document.getElementById("order-meat-p").textContent == "салями" || document.getElementById("order-meat-p").textContent == "помидоры" || document.getElementById("order-meat-p").textContent == "ветчина" || document.getElementById("order-meat-p2").textContent == "салями" || document.getElementById("order-meat-p2").textContent == "помидоры" || document.getElementById("order-meat-p2").textContent == "ветчина") && (document.getElementById("order-sauce-p").textContent == "чесночный соус" || document.getElementById("order-sauce-p").textContent == "сырный соус" || document.getElementById("order-sauce-p").textContent == "кетчуп")) {document.getElementById('pizza-img5').style = "z-index: 5;"
document.getElementById('pizza-img5').style.display = "inline-block"
document.getElementById('pizza-img4').style.display = 'none'
document.getElementById('pizza-img3').style.display = 'none'
document.getElementById('pizza-img2').style.display = 'none'
document.getElementById('pizza-img1').style.display = 'none'}

                           
                           
else if ((document.getElementById("order-size-p").textContent == "маленькая" || document.getElementById("order-size-p").textContent == "средняя" || document.getElementById("order-size-p").textContent == "большая") && (document.getElementById("order-cheze-p").textContent == "моцарелла" || document.getElementById("order-cheze-p").textContent == "фета" || document.getElementById("order-cheze-p").textContent == "сливочный" || document.getElementById("order-cheze-p2").textContent == "моцарелла" || document.getElementById("order-cheze-p2").textContent == "фета" || document.getElementById("order-cheze-p2").textContent == "сливочный") && (document.getElementById("order-meat-p").textContent == "салями" || document.getElementById("order-meat-p").textContent == "помидоры" || document.getElementById("order-meat-p").textContent == "ветчина" || document.getElementById("order-meat-p2").textContent == "салями" || document.getElementById("order-meat-p2").textContent == "помидоры" || document.getElementById("order-meat-p2").textContent == "ветчина")) 
{document.getElementById('pizza-img4').style = "z-index: 4;"
document.getElementById('pizza-img4').style.display = "inline-block"
document.getElementById('pizza-img3').style.display = 'none'
document.getElementById('pizza-img2').style.display = 'none'
document.getElementById('pizza-img1').style.display = 'none'
document.getElementById('pizza-img5').style.display = 'none'}
                           
                           
                           
else if ((document.getElementById("order-size-p").textContent == "маленькая" || document.getElementById("order-size-p").textContent == "средняя" || document.getElementById("order-size-p").textContent == "большая") && (document.getElementById("order-cheze-p").textContent == "моцарелла" || document.getElementById("order-cheze-p").textContent == "фета" || document.getElementById("order-cheze-p").textContent == "сливочный" || document.getElementById("order-cheze-p2").textContent == "моцарелла" || document.getElementById("order-cheze-p2").textContent == "фета" || document.getElementById("order-cheze-p2").textContent == "сливочный")) 
{document.getElementById('pizza-img3').style = "z-index: 3;"
document.getElementById('pizza-img3').style.display = "inline-block"
document.getElementById('pizza-img2').style.display = 'none'
document.getElementById('pizza-img1').style.display = 'none'
document.getElementById('pizza-img4').style.display = 'none'}
                           
                           
                           
else if (document.getElementById("order-size-p").textContent == "маленькая" || document.getElementById("order-size-p").textContent == "средняя" || document.getElementById("order-size-p").textContent == "большая") 
{document.getElementById('pizza-img2').style = "z-index: 2;"
document.getElementById('pizza-img2').style.display = "inline-block"
document.getElementById('pizza-img1').style.display = 'none'
document.getElementById('pizza-img3').style.display = 'none'
document.getElementById('pizza-img4').style.display = 'none'
document.getElementById('pizza-img5').style.display = 'none'}
                           
                           
else {document.getElementById('pizza-img2').style.display = 'none'
document.getElementById('pizza-img1').style.display = 'inline-block'
document.getElementById('pizza-img3').style.display = 'none'
document.getElementById('pizza-img4').style.display = 'none'
document.getElementById('pizza-img5').style.display = 'none'}}




document.getElementById('order-button').addEventListener('click', () => {
    document.getElementById('order-is-processed').style.display = 'inline-block'
  })
