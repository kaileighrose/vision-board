class CreateResources < ActiveRecord::Migration
  def change
    create_table :resources do |t|
      t.string :type
      t.string :name
      t.text :item
      t.text :notes
      t.timestamps null: false
    end
  end
end
