class Game
  attr_accessor :id, :title, :genre, :price
  @@all = []

  def initialize(title, genre, price)
    @title = title
    @genre = genre
    @price = price

    # Task 2: replace with database
    @@all << self
  end


  # Task 1: replace with database
  def self.all
    @@all
  end
end