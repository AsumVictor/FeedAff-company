const categoryCont = document.querySelector('.category')

const categories= [
     {
        name: 'Hen'
     },
     {
        name: 'Guinea fowls'
     },
     {
        name: 'Chicks'
     },
     {
        name: 'Ducks'
     },
     {
        name: 'Vegetables'
     },
     {
        name: 'Other Animals'
     }
     
]
window.addEventListener('load',()=>{
     categories.forEach(category => {
        let category_item;
        let category_text = `
        <p>${category.name}</p><i class="fa fa-caret-right"></i> </div>`
        category_item = document.createElement('div')
        category_item.setAttribute('class','flex flex-row items-center space-x-4 p-3 cursor-pointer hover:bg-darkGreen hover:text-white font-bold')
        category_item.innerHTML= category_text;
        categoryCont.appendChild(category_item)
     });
})