require 'pry'

class Planet

    # getter
    attr_reader :dist_from_sun

    # getter & setter
    attr_accessor :name, :population, :color

    def initialize(name, color, dist_from_sun, population)
        # binding.pry
        @name = name
        @color = color
        @dist_from_sun = dist_from_sun
        @population = population
        # binding.pry
    end

    def greet_planet
        puts "Hello, #{@name}"
        binding.pry
    end


    def my_planet_friend(planet)
        binding.pry
        puts "Hi, my name is #{@name}" # @name => the @name instance variable of whichever instance called this method
        puts "My friend is #{planet.name}"
    end

end


# venus
venus = Planet.new("venus","pink","30min by train", 0)
# pluto
pluto = Planet.new("pluto", "clear", "too far", 2)
# mars
mars = Planet.new("mars", "red", "next door", 5)

# venus.greet_planet
venus.my_planet_friend(pluto)
mars.my_planet_friend(venus)






# class BankAccount

#     attr_accessor :name
#     # attr_reader :account_number, :customer_id
#     # attr_writer :pin_number
#     # attr_accessor :name

#     def initialize(account_number, customer_id, pin_number, name)
#         @account_number = account_number
#         @customer_id = customer_id
#         @pin_number = pin_number
#         @name = name
#     end
    
# end

# b1 = BankAccount.new(1234, 384938, 00000, "Elon Musk")

# binding.pry
