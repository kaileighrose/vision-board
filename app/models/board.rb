class Board < ActiveRecord::Base
  belongs_to :user
  has_many :resources
  has_many :notes, through: :resources
end
