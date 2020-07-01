class CreateBosses < ActiveRecord::Migration[6.0]
  def change
    create_table :bosses do |t|
      t.string :name
      t.string :title
      t.decimal :salary
      t.string :company
 
      t.timestamps
    end
  end
end
