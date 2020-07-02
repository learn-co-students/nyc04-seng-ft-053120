class Review < ActiveRecord::Base
    belongs_to :player
    belongs_to :game

    # def game
    #     Game.all.find do |game_instance|
    #         game_instance.id == self.game_id
    #     end
    # end

    # def player
    #     Player.all.find do |player_instance|
    #         player_instance.id == self.player_id
    #     end
    # end
end