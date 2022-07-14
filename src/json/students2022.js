const students = {
  "Blake A": ["https://replit.com/@whassuppal/CYOA-FINAL?v=1"],
  "Ty N": ["https://2vs5qo.csb.app/"],
  "Atticus R": ["https://final-project-cs.mckellhardman.repl.co"],
  "Abby H": ["https://replit.com/@Abbers/CYOA-p5#script.js"],
  "Ayden W": ["https://Actual-Final-CS-Project-Attemt-4.awoof07.repl.co"],
  "Devin H, Ethan A": ["https://DinosaurDE.ethanapsley1.repl.co"],
  "Ben B": ["https://replit.com/@BenBoucher/Circular-Jungle"],
  "Shantel G": ["https://Jarorld-the-Block-Friend.hamyyystar.repl.co"],
  "McKell H": ["https://final-project-cs.mckellhardman.repl.co"],
  "Alan M": ["https://replit.com/@Jibusentanna/DinoGameP5Starter-3"],
  "Gibson T": ["https://replit.com/@Jibusentanna/DinoGameP5Starter-3"],
  "Neeve R": ["https://platform-jumping.zebra06.repl.co/"],
  "Veronica G": [https://final-project-cyoa.veronicagao.repl.co/]
};

const studentsSorted = Object.keys(students)
  .sort()
  .reduce((obj, key) => {
    obj[key] = students[key];
    return obj;
  }, {});

export default studentsSorted;
