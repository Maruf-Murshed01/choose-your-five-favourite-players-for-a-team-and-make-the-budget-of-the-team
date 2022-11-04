document.getElementById('calculate-player-expenses').addEventListener('click', function(){
    const getPerPlayerExpenses = document.getElementById('one-player-expenses').value
    if(serial < 6){
        calculatePlayersExpenses = getPerPlayerExpenses * serial
    }
    else{
        calculatePlayersExpenses = getPerPlayerExpenses * 5
    }
    totalPlayersExpenses = document.getElementById('total-player-expenses')
    totalPlayersExpenses.innerText = calculatePlayersExpenses
})


document.getElementById('calculate-total-expenses').addEventListener('click', function(){
    const getManagerExpenses = parseInt(document.getElementById('manager-expenses').value)
    const getCoachExpenses = parseInt(document.getElementById('coach-expenses').value)
    const totalPlayersExpenses = parseInt(document.getElementById('total-player-expenses').innerText)
    totalExpenses = getManagerExpenses + getCoachExpenses + totalPlayersExpenses
    // console.log(totalExpenses)

    const setTotalExpenses = document.getElementById('total-expenses')
    setTotalExpenses.innerText = totalExpenses;
})