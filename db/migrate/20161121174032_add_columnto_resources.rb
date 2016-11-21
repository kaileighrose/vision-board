class AddColumntoResources < ActiveRecord::Migration
  def change
    add_column :resources, :title, :string
  end
end
