require 'pry'
require_relative 'city.rb'

c1 = City.new("New York City", 8_400_000, "cloudy with a chance of meatballs", 1624)
c2 = City.new("Rochester", 206_000, "freezing with a side of clouds", 1817)

# what will be the output of the following line?
c1.compare_weather(c2)

# what will be the output of the following line?
c2.find_age_difference(c1)