const students = {
  "Hailey G": ["https://CYOA-p5.haileygrimes.repl.co"],
  "David B": [
    "https://replit.com/@buckldav/DinoGameP5Starter",
    "https://replit.com/@buckldav/PizzaStarter",
  ],
};

const studentsSorted = Object.keys(students)
  .sort()
  .reduce((obj, key) => {
    obj[key] = students[key];
    return obj;
  }, {});

export default studentsSorted;
