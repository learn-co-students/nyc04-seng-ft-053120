// What is destructuring and why would I want to do it?
  // Assigning variables from the keys of POJO

  // Object -> Variables

  // Importance in Mod 4: 🔥🔥🔥🔥

  const mod3 = {
    name: "Prynatas",
    population: 26,
    founded: 60120,
    languages_mastered: ["Ruby", "Rails", "Javascript"],
  }

  // const name = mod3.name;
  // const population = mod3.population;
  // const founded = mod3.founded;
  const {name, population, founded} = mod3

  // const languages = mod3.languages_mastered
  const {languages_mastered: languages} = mod3

  // console.log(mod3)


  // APPLICATION:
  // let {attr1, attr2} = this.props.object









// Could I do it to an array?

// Importance in Mod 4: 🔥

  const boroughNames = ["Brooklyn", "Manhattan", "Bronx", "Queens", "Staten Island"];

  // const brooklynVar = boroughNames[0]
  // const manhattanVar = boroughNames[1]

  const [brooklynVar, manhattanVar, theBronx , queensVar, statenIsland] = boroughNames


  console.log(brooklynVar);
  // console.log(manhattanVar);
  console.log(theBronx);

  // APPLICATION: React Hooks
  // let [name, setName] = useState("")











// Could I do it to the parameters of a function?
  // If a function takes in an object, you can destructure it in the params
// Importance in Mod 4: 🔥🔥

  function greet({name, djName}) {

    // const name = person.name;
    // const djName = person.djName;

    return `Hello, ${ name }! Your DJ name is ${ djName }.`
  }

  const me = {
    name: "Eric",
    djName: "Grandmaster Slamma Jamma",
    middleName: "Hank"
  }

  // console.log(greet(me));



  // APPLICATION: Functional components
  // let functionalComponent = ({attr1, attr2}) => {}
