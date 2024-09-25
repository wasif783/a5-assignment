function getNoakhaliInputValueId(){
    const getNoakhaliValue = document.getElementById('noakhali-input').value;
    const getNoakhaliValueNumber = parseFloat(getNoakhaliValue)
    return getNoakhaliValueNumber;
    
    
}



function getTextFieldValueId(){
    const textNoakhaliValue = document.getElementById('noakhali-balance').innerText;
    const textNoakhaliNumber = parseFloat(textNoakhaliValue);
    return textNoakhaliNumber;
}


function getMainBalanceId(){
    const mainNoakhaliValue = document.getElementById('mainBalance').innerText;
    const mainNoakhaliNumber = parseFloat(mainNoakhaliValue);
    return mainNoakhaliNumber; 
}


function getFeniInputValueId (){
    const getFeniInputValue = document.getElementById('feniInput').value;
    const getFeniInputNumber = parseFloat(getFeniInputValue);
    return getFeniInputNumber;
}

function getTextFieldFeni(){
    const textFeniValue = document.getElementById('feniBalance').innerText;
    const textFeniNumber = parseFloat(textFeniValue);
    return textFeniNumber;
}


function getQoutaInputValueId(){
    const getQoutaInputValue = document.getElementById('qoutaInput').value;
    const getQoutaInputNumber = parseFloat(getQoutaInputValue);
    return getQoutaInputNumber;
}


function getTextFieldQouta(){
    const textQoutaValue = document.getElementById('qoutaBalance').innerText;
    const textQoutaNumber = parseFloat (textQoutaValue);
    return textQoutaNumber;
}