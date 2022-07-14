const students = {
  "Hailey G": ["https://CYOA-p5.haileygrimes.repl.co"],
  "David B": [
    "https://replit.com/@buckldav/DinoGameP5Starter",
    "https://replit.com/@buckldav/PizzaStarter",
  ],
  "Ty N": ["https://2vs5qo.csb.app/"],
  "Atticus R": ["https://final-project-cs.mckellhardman.repl.co"],
  "Abby H": ["https://replit.com/@Abbers/CYOA-p5#script.js"],
  "Ayden W": ["https://Actual-Final-CS-Project-Attemt-4.awoof07.repl.co"],
  "Devin H, Ethan A": ["https://DinosaurDE.ethanapsley1.repl.co"],
   "Ben B" : ["https://replit.com/@BenBoucher/Circular-Jungle"],
};

const studentsSorted = Object.keys(students)
  .sort()
  .reduce((obj, key) => {
    obj[key] = students[key];
    return obj;
  }, {});

export default studentsSorted;
