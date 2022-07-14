const students = {
  "Hailey G": ["https://CYOA-p5.haileygrimes.repl.co"],
  "David B": [
    "https://replit.com/@buckldav/DinoGameP5Starter",
    "https://replit.com/@buckldav/PizzaStarter",
  ], 
  "Abby H": ["https://replit.com/@Abbers/CYOA-p5#script.js"],
  "Devin H, Ethan A": ["https://DinosaurDE.ethanapsley1.repl.co"],
};

const studentsSorted = Object.keys(students)
  .sort()
  .reduce((obj, key) => {
    obj[key] = students[key];
    return obj;
  }, {});

export default studentsSorted;
