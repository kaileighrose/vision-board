class Resource < ActiveRecord::Base
  has_many :boards
  belongs_to :user
end
