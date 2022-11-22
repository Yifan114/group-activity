//creation of data
let team1 = {
  team_name: "Real Madrid",
  city: "Madrid",
  country: "Spain",
  top_scorers: ["Ronaldo", "Benzema", "Hazard"],
  worldwide_fans: 798,
};

let team2 = {
  team_name: "Barcelona",
  city: "Barcelona",
  country: "Spain",
  top_scorers: ["Messi", "Suarez", "Puyol"],
  worldwide_fans: 738,
};

let team3 = {
  team_name: "Manchester United",
  city: "Manchester",
  country: "England",
  top_scorers: ["Cantona", "Rooney", "Ronaldo"],
  worldwide_fans: 755,
};

let team4 = {
  team_name: "Manchester City",
  city: "Manchester",
  country: "England",
  top_scorers: ["Sterling", "Aguero", "Haaland"],
  worldwide_fans: 537,
};

let team5 = {
  team_name: "Brazil National Team",
  city: "Not applicable",
  country: "Brazil",
  top_scorers: ["Ronaldinho", "Cafu", "Bebeto"],
  worldwide_fans: 950,
};

let team6 = {
  team_name: "Argentina national team",
  city: "Not applicable",
  country: "Brazil",
  top_scorers: ["Messi", "Batistuta", "Maradona"],
  worldwide_fans: 888,
};

let team7 = {
  team_name: "Atletico Madrid",
  city: "Madrid",
  country: "Spain",
  top_scorers: ["Aragonés", "Griezmann", "Torez"],
  worldwide_fans: 400,
};

// db.collection("teams").add(team1);
// db.collection('teams').add(team2)
// db.collection('teams').add(team3)
// db.collection('teams').add(team4)
// db.collection('teams').add(team5)
// db.collection('teams').add(team6)
// db.collection('teams').add(team7)

//Part 2
//Question 1
// db.collection("teams")
//   .where("country", "==", "Spain")
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((doc) => {
//       console.log(doc.data());
//     });
//   });

// Question 2
// db.collection("teams")
//   .where("city", "==", "Madrid")
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((doc) => {
//       console.log(doc.data());
//     });
//   });

//Question 3
//don't know !!!!!

//Question 4
// db.collection("teams")
//   .where("country", "!=", "Spain")
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((doc) => {
//       console.log(doc.data());
//     });
//   });

//Question 5
//HAVE TO CREATE COLLECTION INDEX FOR THIS TO WORK !!!!!!
// db.collection("teams")
//   .where("country", "!=", "Spain")
//   .where("country", "!=", "England")
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((doc) => {
//       console.log(doc.data());
//     });
//   });

//Question 6
//HAVE TO CREATE COLLECTION INDEX FOR THIS TO WORK !!!!!!
// db.collection("teams")
//   .where("country", "==", "Spain")
//   .where("fans", ">=", 700)
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((doc) => {
//       console.log(doc.data());
//     });
//   });

//Question 7
//HAVE TO CREATE COLLECTION INDEX FOR THIS TO WORK ??????
// db.collection("teams")
//   .where("fans", ">=", 500)
//   .where("fans", "<=", 600)
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((doc) => {
//       console.log(doc.data());
//     });
//   });

//Question 8
// is array called top_scorers?

// db.collection("teams")
//   .where("top_scorers", array - contains, "Ronaldo")
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((doc) => {
//       console.log(doc.data());
//     });
//   });

//Question 9
// is array called top_scorers?

// db.collection("teams")
//   .where("top_scorers", array - contains - any, [
//     "Ronaldo",
//     "Maradona",
//     "Messi",
//   ])
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((doc) => {
//       console.log(doc.data());
//     });
//   });

// Part 3 Question 1 Part 1
// db.collection("teams").doc("PNh1tla4YCMSlEVcpGum").update({
//   worldwide_fans: 811,
//   team_name: "Real Madrid FC",
// });

// // Part 3 Question 1 Part 2
// db.collection("teams").doc("eyTRcDZfSZJuxmxsoQWF").update({
//   worldwide_fans: 747,
//   team_name: "FC Barcelona",
// });

// Part 3 Question 2 Part 1
// db.collection("teams")
//   .doc("PNh1tla4YCMSlEVcpGum")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayRemove("Hazard"),
//   });

// db.collection("teams")
//   .doc("PNh1tla4YCMSlEVcpGum")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayUnion("Crispo"),
//   });

// // Part 3 Question 2 Part 2
// db.collection("teams")
//   .doc("eyTRcDZfSZJuxmxsoQWF")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayRemove("Puyol"),
//   });

// db.collection("teams")
//   .doc("eyTRcDZfSZJuxmxsoQWF")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayUnion("Deco"),
//   });

// Part 3b. Add color object
// let barca_jersey = {
//   color: {
//     home: "Red",
//     away: "Gold",
//   },
// };

// let madrid_jersey = {
//   color: {
//     home: "White",
//     away: "Black",
//   },
// };

// db.collection("teams").doc("eyTRcDZfSZJuxmxsoQWF").update(barca_jersey);
// db.collection("teams").doc("PNh1tla4YCMSlEVcpGum").update(madrid_jersey);

// Part 3c and 3d Updating Jersey Colors

// Barca Jersey Update

// db.collection("teams").doc("eyTRcDZfSZJuxmxsoQWF").update({
//   "color.away": "Pink",
// });

// Real Madrid Jersey

// db.collection("teams").doc("PNh1tla4YCMSlEVcpGum").update({
//   "color.away": "Purple",
// });
