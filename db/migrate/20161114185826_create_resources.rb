class CreateResources < ActiveRecord::Migration
  def change
    create_table :resources do |t|
      t.text :type
      t.text :name
      t.text :item
      t.text :notes
      t.timestamps null: false
    end
  end
end
