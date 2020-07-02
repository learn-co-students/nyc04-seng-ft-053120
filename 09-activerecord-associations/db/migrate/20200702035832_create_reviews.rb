class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :comment
      t.integer :rating
      t.integer :player_id
      t.integer :game_id
 
      t.timestamps
    end
  end
end
