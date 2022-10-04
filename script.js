const menuToggler = document.querySelector(".hamburger");
const menu = document.querySelector("#menu");
const serviceArea = document.querySelector(".servicesArea");

//Arrays of Home page Services
 homeServices = [
     {
        bigImage: 'images/Hydro_System.png',
        circleImg: 'images/logo.jpg',
        title: 'Fresh Vegetables',
        shortDescription: `We produce healthy, fresh and organic vegatbles. we sell carrot, Cabbage,  
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
                           male and females at affordable prices. All our produce are free from virus`
     },
    {
        bigImage: 'images/broiler-chicken.jpg',
        circleImg: 'images/broiler.jpg',
        title: 'Commercial Broilers',
        shortDescription: ` Come for your Commercial broilers at affordable price`
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

    </div>
      `

      serContainer = document.createElement('div')
      serContainer.setAttribute('class','serContainer overflow-hidden rounded-md bg-darkGreen text-white font-bold relative mt-14')
      serContainer.innerHTML = serContent;
      serviceArea.appendChild(serContainer)



      });
      
})
