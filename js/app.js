let serial = 0
function setName(name){
    const createTag = document.createElement('p')
    serial = serial + 1

    if(serial > 5){
        alert('you already have five favorites...')
    }
    else{
        createTag.innerText = serial+'. '+ name;
        const addTag = document.getElementById('fav-players')
        addTag.appendChild(createTag)
    }
}

function disable(e){
    if(serial < 5){
        e.disabled = true;
    }
    else{
        return;
    }
}


document.getElementById('alaba').addEventListener('click', function(){
    const name = document.getElementById('alaba-2').innerText;
    setName(name)
    document.getElementById('alaba').addEventListener('click', disabled)
})

document.getElementById('benzema').addEventListener('click', function(){
    const name = document.getElementById('benzema-2').innerText;
    setName(name)
})

document.getElementById('carvajal').addEventListener('click', function(){
    const name = document.getElementById('carvajal-2').innerText;
    setName(name)
})

document.getElementById('hazard').addEventListener('click', function(){
    const name = document.getElementById('hazard-2').innerText;
    setName(name)
})

document.getElementById('mariano').addEventListener('click', function(){
    const name = document.getElementById('mariano-2').innerText;
    setName(name)
})

document.getElementById('militao').addEventListener('click', function(){
    const name = document.getElementById('militao-2').innerText;
    setName(name)
})

document.getElementById('modric').addEventListener('click', function(){
    const name = document.getElementById('modric-2').innerText;
    setName(name)
})

document.getElementById('nacho').addEventListener('click', function(){
    const name = document.getElementById('nacho-2').innerText;
    setName(name)
})

document.getElementById('rodrygo').addEventListener('click', function(){
    const name = document.getElementById('rodrygo-2').innerText;
    setName(name)
})

document.getElementById('tcho').addEventListener('click', function(){
    const name = document.getElementById('tcho-2').innerText;
    setName(name)
})

document.getElementById('vallejo').addEventListener('click', function(){
    const name = document.getElementById('vallejo-2').innerText;
    setName(name)
})

document.getElementById('vini').addEventListener('click', function(){
    const name = document.getElementById('vini-2').innerText;
    setName(name)
})



