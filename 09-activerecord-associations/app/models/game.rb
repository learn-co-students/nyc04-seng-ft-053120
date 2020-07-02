class Game < ActiveRecord::Base
    has_many :reviews
    has_many :players, through: :reviews

    # def reviews
    #     Review.all.select do |review_instance|
    #         review_instance.game_id == self.id 
    #     end
    # end

    # def players
    #     self.reviews.map do |review_instance|
    #         review_instance.player
    #     end
    # end
end