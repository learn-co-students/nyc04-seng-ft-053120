class CreateStatements < ActiveRecord::Migration[6.0]
  def change
    create_table :statements do |t|
      t.string :declaration
      t.boolean :truth
      t.integer :year
      t.belongs_to :politician, null: false, foreign_key: true

      t.timestamps
    end
  end
end
