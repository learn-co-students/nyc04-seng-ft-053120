class Player < ActiveRecord::Base
    has_many :reviews
    has_many :games, through: :reviews

    # def reviews
    #     Review.all.select do |review_instance|
    #         review_instance.player_id == self.id 
    #     end
    # end

    # def games
    #     self.reviews.map do |review_instance|
    #         review_instance.game
    #     end
    # end
end