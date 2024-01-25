  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

let over21 = people.filter(person => person.age < 21).map(p => p.name);
// console.log(over21);

const paul = people.filter(p => p.name === 'Paul')[0];
// console.log(paul);


// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// let interviewees = students.filter(s => (s.skills[0].yrsExperience >=5 || s.skills[1].yrsExperience >=5 || s.skills[2].yrsExperience >=5));
// console.log(interviewees);

// const candidates = students.filter(student => {
//   const listOfSkillsWithEnoughExperience = student.skills.filter(skill => skill.yrsExperience >= 5);
//   return (listOfSkillsWithEnoughExperience.length > 0);
// });
// console.log(candidates);

 const has5yrsExp = skill => skill.yrsExperience >= 5;
 const highSkills = student => student.skills.filter(has5yrsExp).length > 0;
 const candidates = students.filter(highSkills).map(s => s.name);
 console.log(candidates);


// let candidates = students.filter(s => {
//   let enoughX = s.skills.filter(x => x.yrsExperience >= 5);
//   return enoughX.length > 0;
// });
// console.log(candidates);

// const filterFunction = (student) => {
//   let listOfSkills = [...student.skills];

// }
// console.log()
// candidates = students.filter(s => filterFunction(s));
// console.log(candidates);
