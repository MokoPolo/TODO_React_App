import delay from './delay';

const groceryItems = [
  {
    title: 'Milk',
    location: 'IGA'
  },
  {
    title: 'Juice',
    location: 'Costco'
  },
  {
    title: 'Chicken',
    location: ''
  }
];


class GroceryApi {
  static getAllGroceryItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], groceryItems));
      }, delay);
    });
  }

  static saveGroceryItem(groceryItem) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
         // Do validation here
        const minimumTitleLength = 1;
        if (groceryItem.title.length < minimumTitleLength) {
          reject(`Title must be at least ${minimumTitleLength} characters.`);
        }

        groceryItems.push(groceryItem);

        setTimeout(() => {
            resolve(Object.assign([], groceryItems));
        }, delay);

       });
    });
  }
}

export default GroceryApi;
