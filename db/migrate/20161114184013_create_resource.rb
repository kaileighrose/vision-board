class CreateResource < ActiveRecord::Migration
  def change
    create_table :resouces do |t|
      t.text :type
      t.text :name
      t.text :item
      t.text :notes
      t.timestamps null: false
    end
  end
end
