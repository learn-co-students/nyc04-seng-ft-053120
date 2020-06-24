class City
    attr_reader :name
    attr_accessor :weather, :population, :age

    # binding.pry

    def initialize(name, population, weather, year_founded)
        @name = name
        @population = population
        @weather = weather
        @age = Time.now.year - year_founded
    end

    def compare_weather(city)
        puts "#{@name} has #{@weather} weather and #{city.name} has #{city.weather} weather"
    end

    def increase_population(number_of_citizens)
        binding.pry
        @population += number_of_citizens
    end

    def self.output_a_greeting 
        binding.pry
        puts "hello"
    end
end