import delay from './delay';

const tasks = [
  {
    title: 'Get milk'
  },
  {
    title: 'Get lunch'
  },
  {
    title: 'Train'
  }
];


class TaskApi {
  static getAllTasks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], tasks));
      }, delay);
    });
  }

  static saveTask(task) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Do validation here
        const minimumTitleLength = 1;
        if (task.title.length < minimumTitleLength) {
          reject(`Title must be at least ${minimumTitleLength} characters.`);
        }

        tasks.push(task);

        resolve(task);
      }, delay);
    });
  }
}

export default TaskApi;
