// const container = document.getElementById('container');
const input = document.getElementById('input')
const list = document.getElementById('list')
const buttonC = document.getElementById('clear-all')

const div = document.getElementsByClassName('paragraph-hover')

input.addEventListener('keydown', ({key})=>{
    
    if(key === 'Enter'){
        // length == limit of the tasks
        if(list.getElementsByTagName('div').length == 8){
            alert('The list limit has been reached')
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
                alert('input field is empty!')
            }
        } 
    }
    
    // if(list.getElementsByTagName('div').length = 0 ){
    //     buttonC.style.display = 'none'
    // } else{
    //     buttonC.style.display = 'block'
    // }
    
})



