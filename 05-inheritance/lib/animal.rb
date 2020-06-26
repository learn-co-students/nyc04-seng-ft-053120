class Animal
    attr_reader :name
    attr_accessor :mood
    @@all = []
  
    def initialize(name)
        puts "Animal init"
      @name = name
      @mood = "nervous"
      @@all << self
    end

    # def speak
    #     puts "I am an animal"
    # end

    def self.all
        @@all
    end
end