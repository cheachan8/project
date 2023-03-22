function calculateCost(){
    const budget = parseFloat(document.getElementById('budget').value)
    const cow = parseFloat(document.getElementById('cow').value)
    const buffalo = parseFloat(document.getElementById('buffalo').value)
  

    let cowCost = 500 * cow;
    let buffaloCost = 1000 * buffalo;

    const moneyLeft = budget - (cowCost + buffaloCost);
    let payAmount = budget - moneyLeft;

    //condition 
    if(isNaN(cow) || isNaN(buffalo) || isNaN(budget)){
        document.getElementById('output').innerHTML='please enter your number ! '
    }else if(budget < (cowCost + buffaloCost)){
        document.getElementById('output').innerHTML=`you don't have enough money!`
    }else{
        document.getElementById('output').innerHTML= `You need to pay $${payAmount}, you have $${moneyLeft} left.`
    }

}
