// Noakhali Donation



document.getElementById('donate-now').addEventListener('click',function(){
    const donateAmount = getInputValueById('noakhali-amount')
    const noakhaliBalance = getInnerTextById('noakhali-balance')
    const mainBalance = getInnerTextById('main-balance')
    if(donateAmount > mainBalance || donateAmount < 0 || !donateAmount){
        alert('Please Enter The Amount Correctly')
        return;
    }

    addToHistory('place-noakhali',donateAmount)
    setMainBalanceById('main-balance',mainBalance,donateAmount)
    setDonationBalanceById('noakhali-balance',noakhaliBalance,donateAmount)
})


// Feni Donation


document.getElementById('feni-donate-now').addEventListener('click',function(){
    const donateAmount = getInputValueById('feni-amount')
    const feniBalance = getInnerTextById('feni-balance')
    const mainBalance = getInnerTextById('main-balance')
    if(donateAmount > mainBalance || donateAmount < 0 || !donateAmount){
        alert('Please Enter The Amount Correctly')
        return;
    }

    addToHistory('place-feni',donateAmount)
    setMainBalanceById('main-balance',mainBalance,donateAmount)
    setDonationBalanceById('feni-balance',feniBalance,donateAmount)
})

// protest donation

document.getElementById('protest-now').addEventListener('click',function(){
    const donateAmount = getInputValueById('protest-amount')
    const protestBalance = getInnerTextById('protest-balance')
    const mainBalance = getInnerTextById('main-balance')
    if(donateAmount > mainBalance || donateAmount < 0 || !donateAmount){
        alert('Please Enter The Amount Correctly')
        return;
    }

    addToHistory('place-protest',donateAmount)
    setMainBalanceById('main-balance',mainBalance,donateAmount)
    setDonationBalanceById('protest-balance',protestBalance,donateAmount)
})
