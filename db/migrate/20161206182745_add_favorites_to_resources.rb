class AddFavoritesToResources < ActiveRecord::Migration
  def change
    add_column :resources, :favorites, :integer, :default => 0
  end
end
