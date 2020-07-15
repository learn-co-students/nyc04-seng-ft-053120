puts "Destroying all users...."
User.destroy_all
puts "Creating users... 😀"

User.create([
    {
        name: "Richard Ramirez",
        age: 30,
        fave_foods: "pizza",
        bio: "Pizza is life"
    },
    {
        name: "Johanna",
        age: 100,
        fave_foods: "ribs, dumplings, pudding",
        bio: "Old enough to eat what I want"
    },
    {
        name: "Mojojo",
        age: 25,
        fave_foods: "Chemical X, bananas",
        bio: "World domination & all the bananas"
    },
    {
        name: "Fran Remy Rats",
        age: 46,
        fave_foods: "ratatouille, oatmeal",
        bio: "I cry when I code"
    }
])

puts "Finished creating users 🙌"