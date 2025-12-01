const toyArray = productArr.filter(
    prod => prod.category.toLowerCase() === "toys"
);

document.getElementById("q3").innerText =
    JSON.stringify(toyArray, null, 2);