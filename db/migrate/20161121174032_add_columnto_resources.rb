class AddColumntoResources < ActiveRecord::Migration
  def change
    add_column :resources, :kind, :string
  end
end
