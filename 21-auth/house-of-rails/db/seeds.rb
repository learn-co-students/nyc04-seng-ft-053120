# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Statement.destroy_all
Politician.destroy_all
User.destroy_all

puts "Creating users..."
User.create([
    {
        username: "raffy",
        password: "password1234"
    },
    {
        username: "michelle",
        password: "password1234"
    },
    {
        username: "nick",
        password: "password1234"
    },
    {
        username: "leslie",
        password: "password1234"
    }
])

puts "Finished creating users!"
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
puts "Creating statements!"

Statement.create([
    {
        declaration: "I am not lying",
        truth: true,
        year: 1998,
        politician_id: Politician.last.id,
        user_id: User.first.id
    },
    {
        declaration: "The capital of NY is NYC",
        truth: false,
        year: 2015,
        politician_id: Politician.last.id,
        user_id: User.second.id
    },
    {
        declaration: "I am not lying",
        truth: false,
        year: 2020,
        politician_id: Politician.last.id,
        user_id: User.last.id
    }
])
puts "Finished creating statements 🙈"