class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :boards, serializer: UserBoardSerializer
  has_many :resources, serializer: UserResourceSerializer
end
