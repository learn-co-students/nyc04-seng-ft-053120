class Game
  attr_accessor :id, :title, :genre, :price
  # @@all = []

  def initialize(title, genre, price)
    @title = title
    @genre = genre
    @price = price

    # Task 2: replace with database
    # @@all << self
  end

  def save
    # get the ruby instance & insert it into the database
    sql = "INSERT INTO games(title,genre,price) VALUES (?,?,?)"
      # '#{self.title}','#{self.genre}','#{self.price}')"
    DB[:conn].execute(sql, self.title, self.genre, self.price)
  end


  # Task 1: replace with database
  def self.all
    # @@all
    sql = "SELECT * FROM games;"
    results = DB[:conn].execute(sql)

    results.map do |row|
      Game.new(row["title"],row["genre"],row["price"])
    end
    # binding.pry
  end
end