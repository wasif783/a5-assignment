document.getElementById('donate-noakhali').addEventListener('click',function(event){
    event.preventDefault;
    const donateNoakhali = getNoakhaliInputValueId();
    const newDonateNoakhali = getTextFieldValueId();
    const newMainNoakhaliNumber = getMainBalanceId();
    
    if (isNaN(donateNoakhali)) {
        alert('Enter a Valid Number');
    } else if (donateNoakhali <= 0) {
        alert('Negative numbers Not Allowed');
    } else if (donateNoakhali > 999999) {
        alert('Insufficient balance');

    } else {
        const newNoakhaliBalance = donateNoakhali + newDonateNoakhali;
        document.getElementById('noakhali-balance').innerText = newNoakhaliBalance;
        
        const mainBalanceNoakhali = newMainNoakhaliNumber - donateNoakhali;
        document.getElementById('mainBalance').innerText = mainBalanceNoakhali;

    }
    

})

document.getElementById('feniButton').addEventListener('click',function(){
    const donateFeni = getFeniInputValueId();
    const newTextField = getTextFieldFeni();
    const mainBalanceFeni = getMainBalanceId();

    if (isNaN(donateFeni)) {
        alert('Enter a Valid Number');
    } else if (donateFeni <= 0) {
        alert('Negative numbers Not Allowed');
    } else if (donateFeni > 999999) {
        alert('Insufficient balance');

    } else {
        const newFeniBalance = donateFeni + newTextField;
        document.getElementById('feniBalance').innerText = newFeniBalance;
        
        const newMainFeniBalance = mainBalanceFeni - donateFeni;
        document.getElementById('mainBalance').innerText = newMainFeniBalance;

    }
})


document.getElementById('qoutaButton').addEventListener('click',function(){
    const donateQouta =  getQoutaInputValueId();
    const newTextFieldQouta = getTextFieldQouta();
    const mainBalanceQouta = getMainBalanceId();

    if (isNaN(donateQouta)) {
        alert('Enter a Valid Number');
    } else if (donateQouta <= 0) {
        alert('Negative numbers Not Allowed');
    } else if (donateQouta > 999999) {
        alert('Insufficient balance');

    } else {
        const newQoutaBalance = donateQouta + newTextFieldQouta;
        document.getElementById('qoutaBalance').innerText = newQoutaBalance;
        
        const newMainBalanceQouta = mainBalanceQouta - donateQouta;
        document.getElementById('mainBalance').innerText = newMainBalanceQouta;

    }
})


const onbtn = document.getElementById('onebtn');
onbtn.addEventListener('click',makeGreen);

function makeGreen(){
    document.body.style.backgroundColor = 'green'
}