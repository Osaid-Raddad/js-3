var submitForm = document.querySelector(" .submit-form ");
var productName = document.querySelector(" #product-name ");
var productDescription = document.querySelector(" #product-description ");
var productPrice = document.querySelector(" #product-price ");

var products = [];

submitForm.onsubmit = function (e) {

    e.preventDefault();

    var productContent = {
        name: productName.value,
        description: productDescription.value,
        price: productPrice.value
    };

    products.push(productContent);
    console.log(products);
    printTable();
}

function printTable() {
    var data = ``;
    for (var i = 0; i < products.length; i++) {
        data +=
        `
            <tr>
                <td>${products[i].name}</td>   
                <td>${products[i].description}</td> 
                <td>${products[i].price}</td>   
            </tr>
        `;
    }

    document.querySelector("tbody").innerHTML = data;

}