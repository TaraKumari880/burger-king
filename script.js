function getRandomTime() {
    return Math.floor(Math.random() * 5000) + 2000;
}
function getRandomOrderId() {
    return Math.floor(Math.random() * 1000) + 100;
}
document.getElementById('orderButton').

    addEventListener('click', function () {
        const selecteditems = [];
        const checkBoxes = document.getElementsByName('foodItem');
        checkBoxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                selecteditems.push(checkbox.value);

            }
        });

        if (selecteditems.length === 0) {
            alert("Please select atleast one item");
            return;
        }
        const orderButton = document.getElementById('orderButton');
        orderButton.disabled = true;
        const foodImage = document.getElementById('foodImage');

        const orderIdElement = document.getElementById('orderId');

        const orderIdValueElement = document.getElementById('orderIdValue');
        orderIdElement.style.display = 'none';
        foodImage.style.display = 'none';
        const promise = new Promise(function (resolve, reject) {

            setTimeout(function () {
                resolve()
            }, getRandomTime())

        });

        promise.then(function () {

            const orderId = getRandomOrderId();

            orderIdValueElement.textContent = orderId;

            orderIdElement.style.display = 'block';

            const foodToShow = selecteditems[Math.floor(Math.random() * selecteditems.length)];

            switch (foodToShow) {

                case 'Burger':
                    foodImage.src = './bg1.jpg'
                    break;
                case 'Fries':
                    foodImage.src = './fries.jpg'
                 
                    break;
                    case 'Drink':
                        foodImage.src='./drink.jpg'
                        break;
                        default:
                            foodImage.src='./barger.jpg'


            }
            foodImage.style.display='block';
            orderButton.display=false;
        })
    })