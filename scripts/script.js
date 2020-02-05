let form = document.querySelector(".search__form");
form.addEventListener("submit", submitEvent => {
  submitEvent.preventDefault();
  axios
    .get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${submitEvent.target.search.value}`
    )

    .then(response => {
      getList(response.data.drinks);
    })

    .catch(reject => {
      let noResults = document.createElement("p");
      noResults.classList.add("list__item");
      listSection.appendChild(noResults);
      noResults.innerHTML =
        "Sorry! We don't have any drinks with that ingredient";
    });
});

let listSection = document.querySelector(".list");
function getList(list) {
  listSection.innerHTML = "";
  list.forEach(item => {
    let drink = document.createElement("p");
    drink.classList.add("list__item");
    listSection.appendChild(drink);
    drink.innerText = `${item["strDrink"]}`;
    form.reset();
  });
}
