function handleToggle(id, status) {
    document.getElementById(id).style.display = status
}

function changeButtonClass(id, clickId) {
    const btnDonation = document.getElementById(id)
    btnDonation.classList.remove('bg-lime-400');
    btnDonation.classList.add('btn-outline', 'hover:bg-lime-400', 'hover:border-none', 'hover:text-black', 'text-gray-500');

    const btnHistory = document.getElementById(clickId)
    btnHistory.classList.add('bg-lime-400');
    btnHistory.classList.remove('btn-outline', 'hover:bg-lime-400', 'hover:border-none', 'hover:text-black', 'text-gray-500');

}

function getInputValueById(id) {
    const value = document.getElementById(id).value
    const convertValue = parseFloat(value)
    return convertValue
}

function getInnerTextById(id) {
    const value = document.getElementById(id).innerText
    const convertValue = parseFloat(value)
    return convertValue
}

function setMainBalanceById(id, Balance, Amount) {
    const newBalance = Balance - Amount
    document.getElementById(id).innerText = newBalance
}

function setDonationBalanceById(id, Balance, Amount) {
    const newDonationBalance = Balance + Amount
    document.getElementById(id).innerText = newDonationBalance
}

function addToHistory(id, amount) {
    const place = document.getElementById(id).innerText
    const history = document.getElementById('history-container')
    const div = document.createElement('div')
    div.classList.add('border', 'p-8', 'rounded-xl')
    div.innerHTML = `
        <h2 class="text-xl font-bold">${amount} Taka is Donated ${place}</h2>
        <p class="text-gray-500">${new Date()}</p>
    
        `
    history.appendChild(div);
}