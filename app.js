function checkForPalindrome(string){
    j = string.length-1;
    for(let i=0;i<string.length/2;i++){
        if(string[i]!=string[j]) return false;
        j--;
    }
    return true;
}

const inp = document.querySelector("#inp");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const message = document.querySelector(".message");

checkBtn.addEventListener("click",()=>{
    let string = inp.value; 
    if(string){

        if(checkForPalindrome(string))  {
            message.innerText = '\''+string+"\' is a palindrome !"
            message.style.color = "darkgreen"
        }
        else  {
            message.innerText = '\''+string+"\' is NOT a palindrome !"
            message.style.color = "crimson"
            
        }
    }
    
})
clearBtn.addEventListener("click",()=>{
    location.reload();
})