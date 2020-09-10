var ul = document.getElementById('list')    
var li;
var addClick = document.getElementById('add')  
addClick.addEventListener("click",addActivity)

function addActivity(){                         
    var input = document.getElementById('input')        
    var item = input.value;                 
    var textNode = document.createTextNode(item)  
    if (item == '') {       
        message= "Enter your Activity"
        alert(message)
        
    } else {                
        li = document.createElement('li')       
        let checkbox = document.createElement('input')         
        checkbox.type = 'checkbox'              
        checkbox.setAttribute('id','check')
        let label = document.createElement('label')
        ul.appendChild(label)                       
        li.appendChild(checkbox)
        label.appendChild(textNode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
        input.value = " "              
    }
}
   
var removeClick = document.getElementById('remove')        
removeClick.addEventListener("click",removeActivity)       

function removeActivity(){ 
li=ul.children
for (let i = 0; i < li.length; i++) {   
        const element = li[i];             
        while(li[i] && li[i].children[0].checked){      
            ul.removeChild(li[i])
        }    
   }
}