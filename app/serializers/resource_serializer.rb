class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :type, :item, :user_id
  has_many :boards, serializer: BoardResourceSerializer
  has_one :user, serializer: UserResourceSerializer
end