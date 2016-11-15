class BoardResourceSerializer < ActiveModel::Serializer
  attributes :id, :board_id, :resource_id
  has_one :user, serializer: UserBoardSerializer
end
