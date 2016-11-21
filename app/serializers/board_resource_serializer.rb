class BoardResourceSerializer < ActiveModel::Serializer
  attributes :id, :board_id, :resource_id, :type, :title, :item
  has_one :user, serializer: UserBoardSerializer
end
