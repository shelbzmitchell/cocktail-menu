let form = document.querySelector(".search__form");
form.addEventListener("submit", submitEvent => {
  submitEvent.preventDefault();
  axios
    .get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${submitEvent.target.search.value}`
    )

    .then(response => {
      console.log(response);
    });
});
