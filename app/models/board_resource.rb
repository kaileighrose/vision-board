class BoardResource < ActiveRecord::Base
  belongs_to :resource
  belongs_to :board
end