
idCount =0;
count = 0;




function addPopup(){
    let head1 = document.querySelector('.head1');
    
    let popup = document.querySelector(".addTask");
    popup.style.display ="block"
    head1.classList.add('blur')
    
}
function addPopup2(){
   
    let head2 = document.querySelector('.head2');
    let popup = document.querySelector(".addTask");
    popup.style.display ="block"
   
    head2.classList.add('blur')
}

function closeTask(){
    let head1 = document.querySelector('.head1');
    let head2 = document.querySelector('.head2');
    let popup = document.querySelector(".addTask");
    popup.style.display ="none"
    head1.classList.remove('blur')
    head2.classList.remove('blur')
    
}
function addTask(){
    idCount++;
    count++;
    back()
    let cardTittle = document.querySelector(".cardText").value;
    if(count>0){
        let checkItems = document.querySelector(".checkItem");
        checkItems.style.display = "none"
    }
   
    if(cardTittle){
        
        createCard(idCount, cardTittle, count);
    }else{
        alert("Please Give Name to the Todo card")
    }
    closeTask();

}

function createCard( id ,cardTittle , count){
    let todo = document.querySelector('.todos')
    
    let todoDiv = document.createElement("div");
    todoDiv.setAttribute('id',`card${id}`)
    
    

    

    let heading = document.createElement("p")
    let button1 = document.createElement("button")
    let button2 = document.createElement("button")
    
    let mainDiv =document.createElement('div')
    mainDiv.setAttribute('id',`mainDiv${id}`);
    
    

    

    todo.appendChild(todoDiv);
    todoDiv.appendChild(heading)
    todoDiv.append(button1)
    todoDiv.append(button2)
    todoDiv.appendChild(mainDiv)

   
    heading.innerHTML = `${cardTittle}`
    button1.innerHTML = "x"
    button2.innerHTML = "+"
    mainDiv.classList.add("mainDiv")
    todoDiv.classList.add('todoscard')
    button1.classList.add('addCardBtn1')
    button2.classList.add('addCardBtn2')
    heading.classList.add('line') 


    

    heading.addEventListener("click",()=>{
        let head1 = document.querySelector(".head1")
        let head2 = document.querySelector(".head2")
        let head2Text = document.querySelector(".head2Text")
       
        head1.style.display ="none"
        head2.style.display = "block"
        head2Text.innerHTML = `${cardTittle}`

       
    })
    
    button1.addEventListener("click",()=>{
        count--;
        todoDiv.remove();
        if(count === 0){
            let checkItems = document.querySelector(".checkItem");
            checkItems.style.display = "block" 
        }
        
    })
let mainDivId = "";
    button2.addEventListener('click',()=>{
        let head1 = document.querySelector('.head1');
        let head2 = document.querySelector('.head2');
        
        let addItem = document.querySelector('.addItem')
        addItem.style.display="block"
        todo.style.filter = "blur(20px)"
        head1.classList.add('blur')
        head2.classList.add('blur')

     mainDivId = mainDiv.getAttribute("id");
        console.log(mainDivId);
        
        

      })
      
    //   getMainID(id){

    //   }


    //   closebn
    let closeBtn2 = document.querySelector('.closeBtn2');
    closeBtn2.addEventListener('click',()=>{
    let head1 = document.querySelector('.head1');
    let head2 = document.querySelector('.head2');
    let addItem = document.querySelector('.addItem')
    addItem.style.display="none"
    todo.style.filter = "blur(0px)"
    head1.classList.remove('blur')
    head2.classList.remove('blur')
  })

//   addbtn


let addBtn2 = document.querySelector('.addBtn2');
addBtn2.addEventListener('click',()=>{
    let head1 = document.querySelector('.head1');
    let head2 = document.querySelector('.head2');
    let addItem = document.querySelector('.addItem')
    addItem.style.display="none"
    todo.style.filter = "blur(0px)"
    head1.classList.remove('blur')
    head2.classList.remove('blur')
   
    
    let divToAdd = document.getElementById(`${mainDivId}`)
    console.log(divToAdd)
    

    let itemDiv =document.createElement('div')
    let itemText =document.createElement('div')
    let itemButton =document.createElement('button')


    divToAdd.appendChild(itemDiv);
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemButton);

    itemDiv.classList.add("itemDiv")
    itemText.classList.add("itemText")
    itemButton.classList.add("itemButton")

    let itemInput = document.querySelector(".cardItem").value;
    itemText.innerHTML = `${itemInput}`;
        itemButton.innerHTML = "Done" 


        itemButton.addEventListener("click", ()=>{
            itemText.style.textDecoration ="line-through"
            itemButton.style.display = "none";
            itemText.style.marginLeft = "55px"

            itemText.addEventListener("click",()=>{
                itemText.style.textDecoration ="none"
                itemButton.style.display = "block";
                itemText.style.marginLeft = "0px"
            })
        })
          
} )


}



function back(){
    let head1 = document.querySelector(".head1")
    let head2 = document.querySelector(".head2")
    head1.style.display ="block"
    head2.style.display = "none"
}




 



  
// function createItems(){
    
//     let child = document.getElementById("todos").children;
//     let c = child[0].children
//     console.log(c[3]);

//     let itemDiv =document.createElement('div')
//     let itemText =document.createElement('div')
//     let itemButton =document.createElement('button')

//     c[3].appendChild(itemDiv);
//     itemDiv.appendChild(itemText);
//     itemDiv.appendChild(itemButton);

//      itemDiv.classList.add("itemDiv")
//     itemText.classList.add("itemText")
//     itemButton.classList.add("itemButton")

//     let itemInput = document.querySelector(".cardItem").value;
//     itemText.innerHTML = `${itemInput}`;
//         itemButton.innerHTML = "Done";
    
// }

//     let head = document.querySelector('header');
//     let addItem = document.querySelector('.addItem')
//     addItem.style.display="none"
//     todo.style.filter = "blur(0px)"
//     head.classList.remove('blur')


//     let parentDiv = event.target.parentNode;
//     let parentId = parentDiv.id;
//     console.log(parentId)

    
    // let itemDiv =document.createElement('div')
    // let itemText =document.createElement('div')
    // let itemButton =document.createElement('button')

    // let mainDivClass = document.querySelector('.id')
    // mainDivClass.appendChild(itemDiv);
    // itemDiv.appendChild(itemText);
    // itemDiv.appendChild(itemButton);

    
    // itemDiv.classList.add("itemDiv")
    // itemText.classList.add("itemText")
    // itemButton.classList.add("itemButton")

    // let itemInput = document.querySelector(".cardItem").value;
    // itemText.innerHTML = `${itemInput}`;
    //     itemButton.innerHTML = "Done" 
//   })


// function addItems(mainDivId){
//     let mainDivElement = document.getElementById(`${mainDivId}`)
//     console.log(mainDivElement);
//     let itemDiv =document.createElement('div')
//     let itemText =document.createElement('div')
//     let itemButton =document.createElement('button')  
    
    
//     mainDivElement.appendChild(itemDiv);
//     itemDiv.appendChild(itemText);
//     itemDiv.appendChild(itemButton);

    
//     itemDiv.classList.add("itemDiv")
//     itemText.classList.add("itemText")
//     itemButton.classList.add("itemButton")

//     let itemInput = document.querySelector(".cardItem").value;
//     itemText.innerHTML = `${itemInput}`;
//         itemButton.innerHTML = "Done" 
// }




