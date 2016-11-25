class Resource < ActiveRecord::Base
  has_many :board_resources
  has_many :boards, through: :board_resources
  has_many :notes
  belongs_to :user

end
