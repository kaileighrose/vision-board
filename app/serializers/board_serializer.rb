class BoardSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id
  has_many :resources, serializer: BoardResourcesSerializer
  ##has_one :user, serializer: UserBoardSerializer
end
