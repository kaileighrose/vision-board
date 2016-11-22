class BoardResourceSerializer < ActiveModel::Serializer
  attributes :id, :kind, :name, :item
  has_one :user, serializer: UserBoardSerializer
end
