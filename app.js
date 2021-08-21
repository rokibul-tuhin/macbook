//update price
function updatePrice(value, inputField) {
    const updatePrice = value;
    const inputPrice = document.getElementById(inputField);
    inputPrice.innerText = updatePrice;
    const cost = parseInt(inputPrice.innerText);

    //total amount 
    const total = totalAmount(cost);

    // update in html 
    document.getElementById('total-amount').innerText = total;
    document.getElementById('discount-total').innerText = total;

    // calling updateAmount 
    updateAmount();
}

//update amount
function updateAmount() {
    const promoInput = document.getElementById('promo-input'); //promo input
    const totalPrice = parseFloat(document.getElementById('total-amount').innerText);
    const finalTotal = document.getElementById('discount-total');
    if (promoInput.value == "stevekaku") {

        // discount 
        const newTotal = totalPrice - (totalPrice * .2);
        finalTotal.innerText = newTotal;
        // clearing input 
        promoInput.value = '';
    }
    else {
        finalTotal.innerText = totalPrice;
        // clearing input 
        promoInput.value = '';
    }
}

//total amount

function totalAmount() {
    const bestPriceText = document.getElementById('best-total').innerText;
    const ExtraMemoryText = document.getElementById('memory-price').innerText;
    const extraStorageText = document.getElementById('storage-price').innerText;
    const deliverChargeText = document.getElementById('delivery-charge').innerText;

    // parseFloating 

    const bestPrice = parseFloat(bestPriceText);
    const extraMemoryPrice = parseFloat(ExtraMemoryText);
    const extraStoragePrice = parseFloat(extraStorageText);
    const deliverCharge = parseFloat(deliverChargeText);

    // return total price 

    return bestPrice + extraMemoryPrice + extraStoragePrice + deliverCharge;

}




//extra memory cost for button 1
document.getElementById('button-1').addEventListener('click', function () {

    updatePrice(0, 'memory-price');


});

//extra memory cost for button 2
document.getElementById('button-2').addEventListener('click', function () {


    updatePrice(180, 'memory-price');



});
// extra Storage button 1 

document.getElementById('button-3').addEventListener('click', function () {


    updatePrice(0, 'storage-price');



});
// extra storage button 2 
document.getElementById('button-4').addEventListener('click', function () {


    updatePrice(100, 'storage-price');



});
// extra storage button 3 
document.getElementById('button-5').addEventListener('click', function () {


    updatePrice(180, 'storage-price');


});

// delivery charge button 1 
document.getElementById('button-6').addEventListener('click', function () {


    updatePrice(0, 'delivery-charge');



});

// delivery charge button 2 
document.getElementById('button-7').addEventListener('click', function () {


    updatePrice(20, 'delivery-charge');




});

// promo code button 
document.getElementById('promo-btn').addEventListener('click', function () {
    updateAmount();
})