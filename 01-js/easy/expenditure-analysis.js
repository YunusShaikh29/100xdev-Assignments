/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryObj = {};

  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    if (categoryObj.hasOwnProperty(category)) {
      categoryObj[category] += price;
    } else {
      categoryObj[category] = price;
    }
  });

  const result = Object.keys(categoryObj).map((category) => {
    return { category, totalSpent: categoryObj[category] };
  });
  return result;
}

module.exports = calculateTotalSpentByCategory;
