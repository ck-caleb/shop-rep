const customerReviewContentText = document.getElementById(
  "customer-review-text"
);
const customerReviewButton = document.getElementById("customer-review-button");
customerReviewButton.onclick = function () {
  if (customerReviewContentText.className == "open") {
    //shrink the text
    // customerReviewContentText.className = "";
    customerReviewContentText.className = "";

    customerReviewButton.innerHTML = "show more";
  } else {
    //expand the text
    customerReviewContentText.className = "open";
    customerReviewButton.innerHTML = "show less";
  }
};

