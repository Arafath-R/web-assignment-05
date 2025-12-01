// toggle html

document.getElementById('btn-blog').addEventListener('click',function(){
window.location.href = './blog.html'
})

// toggle sections
document.getElementById('btn-donation').addEventListener('click',function(){
 handleToggle('donation-container','block')
 handleToggle('history-container','none')
 changeButtonClass('btn-history','btn-donation')

})
document.getElementById('btn-history').addEventListener('click',function(){
 handleToggle('donation-container','none')
 handleToggle('history-container','block')
 changeButtonClass('btn-donation','btn-history')
})