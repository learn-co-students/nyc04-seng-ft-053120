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
puts "Creating recipes..."

Recipe.create([
    {
        name: "eggs benedict",
        ingredients: "egg salt butter pepper",
        preptime: "10 min",
        rating: 10,
        user_id: User.first.id
    },
    {
        name: "rice",
        ingredients: "rice. water",
        preptime: "30 min",
        rating: 10,
        user_id: User.first.id
    },
    {
        name: "pasta",
        ingredients: "pasta, water",
        preptime: "10 min",
        rating: 3,
        user_id: User.first.id
    },
    {
        name: "salmon roll",
        ingredients: "salmon, rice, vinegar",
        preptime: "40 min",
        rating: 8,
        user_id: User.first.id
    }
])

puts "Finished creating recipes! 🍕"