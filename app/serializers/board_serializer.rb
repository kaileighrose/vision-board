class BoardSerializer < ActiveModel::Serializer
  attributes :id, :board, :user_id
  has_many :resources, serializer: BoardResourceSerializer
  has_one :user, serializer: UserBoardSerializer
end
