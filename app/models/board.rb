class Board < ActiveRecord::Base
  belongs_to :user
  has_many :board_resources
  has_many :resources, through: :board_resources
  has_many :notes, through: :resources
end
