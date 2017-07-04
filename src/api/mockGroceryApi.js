import delay from './delay';

const tasks = [
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


class TaskApi {
  static getAllGroceryItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], tasks));
      }, delay);
    });
  }

  static saveGroceryItem(task) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
         // Do validation here
        const minimumTitleLength = 1;
        if (task.title.length < minimumTitleLength) {
          reject(`Title must be at least ${minimumTitleLength} characters.`);
        }

        tasks.push(task);

        setTimeout(() => {
            resolve(Object.assign([], tasks));
        }, delay);

       });
    });
  }
}

export default TaskApi;
