// What is the spread operator and why would I want to use it?
  // Copy an object into a new object
// Importance in Mod 4: 🔥🔥🔥🔥🔥

  const pandemicEric = {
    name: "Eric",
    djName: "Grandmaster Slamma Jamma",
    hydration: "station",
    showering: false,
    eating: ["junk", "garbage"]
  }

  const regularStandardsOfLiving = {
    showering: true,
    eating: ["healthy", "clean"],
  }

  const newEric = {
    ...pandemicEric,
    hydration: 'nation',
    ...regularStandardsOfLiving,
  }

  // const newerEric = {
  //   ...newEric
  // }

  console.log(newEric);





// Could I do it to an array?
// Importance in Mod 4: 🔥🔥🔥🔥

  const bodyParts = ["head", "shoulders", "knees", "toes"];

  const song = [...bodyParts, "knees", "toes", ...bodyParts, "knees", "toes" ]

  // APPLICATION: State change
  // Whenever you want to alter this.state, spread operator is just around the corner






  
// Could I do it to the parameters of a function?
// Importance in Mod 4: 🔥

  function canTakeFourArguments(arg1, arg2, arg3, arg4) {
    console.log(arg1, arg2, arg3, arg4)
  }

  canTakeFourArguments(...song)