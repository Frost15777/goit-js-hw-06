const list = document.querySelector("#categories");
const listItems = list.querySelectorAll(".item");

console.log(`Number of categories: ${listItems.length}`);

listItems.forEach((category) => {
	const listName = category.querySelector("h2").textContent;
	const listNum = category.querySelectorAll("li");
	console.log(`Category: ${listName}`);
	console.log(`Elements: ${listNum.length}`);
});