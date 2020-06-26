class Cat < Animal
  # attr_reader :name
  # attr_accessor :mood

  def initialize(name)
    puts "Cat Init"
    super # Animal.initialize
    puts "Back in Cat Init"
    @number_of_lives = 9
  end

  def speak
    super
    puts "Meow"
  end
end
