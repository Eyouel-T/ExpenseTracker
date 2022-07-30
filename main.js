var balance = 0;

document.querySelector("#add").onclick = function(){

    if(document.querySelector("#amount").value.length == 0){
        alert("You need to specify amount"); 
        return;
    }
    if( document.querySelector("#income").checked){
        addTransaction("income", document.querySelector("#amount").value);
    }
    if( document.querySelector("#expense").checked){
        addTransaction("expense", document.querySelector("#amount").value);
    }
    
    
}

function addTransaction(type, amount){
    if(type=="income"){
        document.querySelector("#report").innerHTML 
        += "<li class='incomeTransaction'>" + amount + "</li>";
        balance += Number(amount);
        document.querySelector("#balance").innerHTML = balance;
    }
    if(type=="expense"){
        document.querySelector("#report").innerHTML 
        += "<li class='expenseTransaction'>" + amount + "</li>";
        balance -= Number(amount);
        document.querySelector("#balance").innerHTML = balance;
    }
}