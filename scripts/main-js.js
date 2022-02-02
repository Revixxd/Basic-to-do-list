// const container = document.getElementById('container');
const input = document.getElementById('input')
const list = document.getElementById('list')
const buttonC = document.getElementById('clear-all')

const div = document.getElementsByClassName('paragraph-hover')

input.addEventListener('keydown', ({key})=>{
    
    if(key === 'Enter'){
        if(list.getElementsByTagName('div').length == 8){
            alert('limit listy został uzyskany')
            input.value = '';
        }else{
            if(input.value !== ''){
                let div = document.createElement('div')
                let paragraph = document.createElement('p')
    
                paragraph.innerText = input.value
    
                list.appendChild(div)
                div.appendChild(paragraph)
                
                div.classList.add('paragraph')
                input.value = '';

                div.addEventListener('click', ()=>{
                    list.removeChild(div)
                })

                buttonC.addEventListener('click', ()=>{
                    list.removeChild(div)
                })

            }else{
                alert('pole jest puste!')
            }
        } 
    }
    
    
})



