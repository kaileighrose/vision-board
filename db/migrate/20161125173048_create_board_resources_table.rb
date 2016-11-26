class CreateBoardResourcesTable < ActiveRecord::Migration
  def change
    create_table :board_resources do |t|
      t.integer :board_id
      t.integer :resource_id
    end
  end
end
