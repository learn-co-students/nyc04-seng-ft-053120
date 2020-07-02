Game.destroy_all
Player.destroy_all
Review.destroy_all

Game.create([
    {
        title: "Sid's Civilization",
        genre: "Strategy",
        price: 60
    },
    {
        title: "Planet Zoo",
        genre: "Simulation",
        price: 50
    }
])

50.times do
    Game.create(
        title: Faker::Game.title,
        genre: Faker::Game.genre,
        price: rand(20..200)
    )
end

Player.create([
    {
        name: "Raffy",
        age: 9
    },
    {
        name: "Sedona",
        age: 13
    }
])

Review.create([
    {
        comment: "My favorite game!",
        rating: 10,
        player_id: Player.first.id,
        game_id: Game.first.id
    },
    {
        comment: "The zoo is wonderful",
        rating: 9,
        player_id: Player.second.id,
        game_id: Game.last.id
    }
])