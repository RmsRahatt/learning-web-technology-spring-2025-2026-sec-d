let quantity = document.getElementById("qty");
let total = document.getElementById("total");

let unitPrice = 1000;
let coupon = 0;

quantity.oninput = function () {
  let qty = quantity.value;

  if (qty < 0 || qty == "") {
    quantity.value = 0;
    qty = 0;
  }

  let totalPrice = unitPrice * qty;
  total.value = totalPrice;

  if (totalPrice > 1000 && coupon == 0) {
    setTimeout(function () {
      alert("Congratulations! You are eligible for a coupon.");
    }, 100);
    coupon = 1;
  } else if (totalPrice <= 1000) {
    coupon = 0;
  }
};

