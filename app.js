
let dragItemContainer = document.querySelector(".dragItemContainer")
let dragItemPlace = document.querySelector(".downPlace")
let checkBTN = document.querySelector(".checkBTN")
let resetbtn =document.querySelector(".reset")
let generateBtn =document.querySelector(".reGenerate")
let undoBtn = document.querySelector(".undo")
// let btnsoundEffect = document.querySelector("audio")

let items =[]

generateNewItem()

dragItemPlace.addEventListener("drop",event=>{
    let ite=event.dataTransfer.getData("itemId")
    dragItemPlace.append(document.getElementById(ite))
})

dragItemPlace.addEventListener("dragover",event=>{
event.preventDefault()
})

function chekResualt(){
    if(dragItemPlace.children.length == 16){

    let userAnswer=[]
    for(let i=0;i<dragItemPlace.children.length;i++){
        userAnswer.push(Number(dragItemPlace.children[i].innerHTML))
    }
    console.log(userAnswer)
let answer = sortNumbers(...userAnswer)
console.log(answer)
let help =-1
let res = userAnswer.every(num=>{
    help++
    return num == answer[help]
})

if(res){
    alert("cool your solve puzzle")
}else alert("your wrong try again")
    }else alert("your not complete puzzle yet")
}

function sortNumbers(...numbers){

for(let j=0;j < numbers.length;j++){
for(let i=0;i < numbers.length-1;i++){
if(numbers[i]>numbers[i+1]){
    numbers.splice(i,2,numbers[i+1],numbers[i])
}
}
}
return numbers
}

checkBTN.addEventListener("click",chekResualt)

function reset(){
    // if(dragItemPlace.children.length == 4)
   dragItemPlace.innerHTML=""
   items.forEach(item=>{
       dragItemContainer.append(item)
   })
//  alert("your not have any move yet")
}

resetbtn.addEventListener("click",reset)


generateBtn.addEventListener("click",generateNewItem)



function generateNewItem(){
    reset()
    items=[]
    dragItemContainer.innerHTML=""
    for(let i =0;i<16;i++){
   let li = document.createElement("li")
   li.classList.add("drg")
   li.draggable="true"
   li.innerHTML= Math.floor(Math.random()*99)

    li.id= li.innerHTML
   li.addEventListener("dragstart",event=>{
       event.dataTransfer.setData("itemId",event.target.id)
   })
   items.push(li)
   dragItemContainer.append(li)

    }

}

undoBtn.addEventListener("click",undo)
function undo(){
    let idLach = dragItemPlace.lastChild.innerHTML
    console.log(idLach);
  
    dragItemContainer.append(document.getElementById(idLach))
}

