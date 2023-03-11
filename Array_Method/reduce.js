/**
 * ========================Javascrpit Array Reduce methode =======================
 *
 */
let array = [
  {
    id: 1,
    name: "lahiru",
  },
  {
    id: 2,
    name: "sadaruwan",
  },
  {
    id: 3,
    name: "kumara",
  },
  {
    id: 1,
    name: "lahiru",
  },
  {
    id: 2,
    name: "Sadaruwan",
  },
  {
    id: 3,
    name: "Kumara",
  },
];

console.log(array);

const filter = array.reduce((groupuser, user) => {
  groupuser[user.id]
    ? groupuser[user.id].push(user)
    : (groupuser[user.id] = [user]);
  return groupuser;
}, {});

// const filter = array.reduce((groupuser,user) =>{
//   (groupuser[user.id] = groupuser[user.id] || []).push(user);
//   return groupuser;
// },{})

console.log(filter);

//==================================================================================
