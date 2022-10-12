const menuToggler = document.querySelector(".hamburger");
const menu = document.querySelector("#menu");
const serviceArea = document.querySelector(".servicesArea");
const home_shop = document.querySelector(".hshopCont");
const form = document.querySelector('form');
const inputs = document.querySelectorAll(".input,textarea");
//Arrays of Home page Services
 const homeServices = [
     {
        bigImage: 'images/vegetables.webp',
        circleImg: 'images/logo.jpg',
        title: 'Fresh Vegetables',
        shortDescription: `We produce healthy and organic vegatbles -carrot, Cabbage,  
                            lettuce, tomatoes, onion and ginger `
     },
     {
        bigImage: 'images/turkey.jpg',
        circleImg: 'images/Turkeybird.webp',
        title: 'Turkeys',
        shortDescription: ` We sell all types Turkeys -You can get matured turkeys, poults
                           male and females at affordable prices. `
     },
     {
     bigImage: 'images/DomesticFowl.jpg',
        circleImg: 'images/Roosters-Hens-and-Chicks.jpg',
        title: 'Domestic Fowls',
        shortDescription: ` We sell all types Domestic Fowls  both
                           male and females at affordable prices.`
     },
    {
        bigImage: 'images/broiler-chicken.jpg',
        circleImg: 'images/broiler.jpg',
        title: 'Commercial Broilers',
        shortDescription: ` Come for your Commercial broilers at affordable price`
    },
    {
        bigImage: 'images/duck.jpg',
        circleImg: 'images/silverhillduck.jpg',
        title: 'Ducks',
        shortDescription: ` Come for your Commercial broilers at affordable price`
    },
    {
        bigImage: 'images/guinea.jpeg',
        circleImg: 'images/guineas.jpg',
        title: 'Guinea Fowls',
        shortDescription: ` Come for your Commercial broilers at affordable price`
    },
    {
        bigImage: 'images/eggs.jpg',
        circleImg: 'images/eggs.webp',
        title: 'Eggs',
        shortDescription: ` We sell both fertile and unfertile eggs at lower prices`
    },
    {
        bigImage: 'images/Herd-goats-field.webp',
        circleImg: 'images/pig.jpg',
        title: ' Other Animals',
        shortDescription: `We rear some animals such as pigs, goats, sheeps and grasscutter `
    }
 ]
 const homeShops = [
    {
       bigImage: 'images/guinea.jpeg',
       ProductName: 'Guinea fowl (Old)',
       currentProce: 25,
           },
    {
        bigImage: 'images/chick.jpeg',
        ProductName: 'Day old local chicks',
        currentProce: 5,
    },
    {
        bigImage: 'images/kuroiler3W.jpeg',
        ProductName: 'Kuroilers (3 Weeks Old)',
        currentProce: 13,

    }
  
]

menuToggler.addEventListener('click',()=>{
    menuToggler.classList.toggle("open")
    menu.classList.toggle("hidden")
})

window.addEventListener('load',()=>{
      
      homeServices.forEach(homeService => {
        let serContainer ;
        const serContent = `
      <div class="img-div relative w-full flex justify-center items-center" style="height:5cm;">
      <img src="${homeService.bigImage}" 
         alt="" 
         class="w-full h-full absolute">
    </div>
    <div class="serviceContent flex flex-col justify-center items-center">
         <div class="circle bg-white text-black rounded-full border-4 overflow-hidden
                    flex items-center justify-center" style="height:2.1cm;width:2.1cm;">
          <img src="${homeService.circleImg}" alt="${homeService.title} image" class="h-full w-full absolute">
        </div>
         <h2 class="-mt-5 text-2xl font-bold text-center">${homeService.title}</h2>
         <p class="mt-4 text-center p-2">${homeService.shortDescription}</p>
         <a href='#shop' class="bg-orange-400 p-2 mt-3 rounded-md text-dark font-bold "> Contact Us&#8594;</a>

    </div>
      `

      serContainer = document.createElement('div')
      serContainer.setAttribute('class','serContainer overflow-hidden rounded-md bg-darkGreen text-white font-bold relative mt-14')
      serContainer.innerHTML = serContent;
      serviceArea.appendChild(serContainer)
      });

      homeShops.forEach(homeShop => {
        let shopwrapper;
        const HsContent = `
        <img src="${homeShop.bigImage}" 
        alt="${homeShop.bigImage}"
        style="width:100%;height:50%;"
        class="rounded-xl">
    <h4 class="text-center mt-5 uppercase font-bold text-white">${homeShop.ProductName}</h4>
    <div class="flex flex-row justify-between space-x-2 items-center">
         <p class="p-3 text-white font-bold " >GHC ${homeShop.currentProce}.00</p>
         <p class="p-3 font-bold text-yellow-300">&#9733;&#9733;&#9733;&#9733;&#9733;</del></p>
    </div>
    <div class="p-3 bg-orange-400 font-bold text-center text-dark hover:bg-orange-200 m-3 cursor-pointer rounded-xl flex flex-row items-center justify-center" >
    <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF"/></svg>
    <span class= 'mx-3'>Buy Now</span>
    </div>
      `

      shopwrapper = document.createElement('div')
      shopwrapper.setAttribute('class','shopwrapper bg-darkGreen rounded-xl mt-10 ml-6')
      shopwrapper.innerHTML = HsContent;
      home_shop.appendChild(shopwrapper)

      });
      
})

function When_to_type(){
    let parent = this.parentNode;
    parent.classList.add("focus");
    }
 // when input loses its focus   
    function When_not_typing(){
    let parent = this.parentNode;
    if(this.value == ""){
    parent.classList.remove("focus");
    }
    }

    inputs.forEach(input => {
        input.addEventListener("focus", When_to_type);
        input.addEventListener("blur", When_not_typing);
        input.addEventListener("keyup", ()=>{
            if (inputs[0].validity.valid && inputs[1].value!='' && inputs[2].value!='') {
                submit.disabled=false;
            }else{
                submit.disabled=true;
            }
        })
        });
