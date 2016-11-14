class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.text :board
      t.text :items
      t.timestamps null: false
    end
  end
end
