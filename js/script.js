function sumaIproduct(arr) {
    let sum = 0;
    let product = 1;

    arr.forEach(function (element) {
        sum += element;
        product *= element;
    });


    console.log("Suma:", sum);
    console.log("Iloczyn:", product);
}

sumaIproduct([1, 2, 3, 4, 5, 6]);
