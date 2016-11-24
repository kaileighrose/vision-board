class Resource < ActiveRecord::Base
  has_many :boards
  has_many :notes
  belongs_to :user

  attr_reader :current_user
  
end
