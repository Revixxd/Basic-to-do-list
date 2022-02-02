const input = document.getElementById('input')
const list = document.getElementById('list')

input.addEventListener('keydown', ({key})=>{
    if(key === 'Enter'){
        if(list.getElementsByTagName('div').length == 8){
            alert('dupa')
            input.value = '';
        }else{
            if(input.value !== ''){
                let div = document.createElement('div')
                let paragraph = document.createElement('p')
    
                paragraph.innerText = input.value
    
                list.appendChild(div)
    
                div.appendChild(paragraph)
    
                input.value = '';
            }else{
                alert('pole jest puste!')
            }
        }
         
    }
    
})

