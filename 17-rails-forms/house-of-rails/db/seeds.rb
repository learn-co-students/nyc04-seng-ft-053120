# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Creating politicians..."

Politician.create([
    {
        name: "Donald Duck",
        age: 4,
        party: "Green House",
        approval_rating: 4,
        position: "Senator"

    },
    {
        name: "Jane",
        age: 25 ,
        party: "Jungle",
        approval_rating: 10,
        position: "Secretary of Jungle"

    },
    {
        name: "Mojojojo",
        age: 12,
        party: "Intergalactic Primates",
        approval_rating: 10,
        position: "President of The World"

    }
])
puts "Created politicians!"