class CreatePoliticians < ActiveRecord::Migration[6.0]
  def change
    create_table :politicians do |t|
      t.string :name
      t.string :position
      t.integer :age
      t.string :party
      t.integer :approval_rating

      t.timestamps
    end
  end
end
