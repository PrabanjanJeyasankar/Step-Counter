 let countEl=document.getElementById("count-el")
 console.log(countEl)

 let saveEl=document.getElementById("save-el")
 console.log(saveEl)
 let count=0
 function increment() {
     count+=1
    countEl.textContent   = count
}
function save(){
    let countstr=count +" - "
    saveEl.textContent += countstr
    console.log(count)
    countEl.textContent=0
    count=0
}

