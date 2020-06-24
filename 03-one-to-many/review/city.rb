class City
    attr_reader :age, :name
    attr_accessor :weather, :population

    def initialize(name, population, weather, year_founded)
        @name = name
        @population = population
        @weather = weather
        @age = Time.now.year - year_founded
    end

    def compare_weather(city)
        puts "#{@name} has #{@weather} weather and #{city.name} has #{city.weather} weather"
    end

    def find_age_difference(city)
        age_difference = @age - city.age
        binding.pry

        if age_difference > 0
            puts "#{@name} was founded #{age_difference} year/s before #{city.name}"
            binding.pry
        else
            puts "#{city.name} was founded #{age_difference.abs} year/s before #{@name}"
        end
    end
end