class ResourceSerializer < ActiveModel::Serializer
  attributes :id
  has_many :boards, serializer: BoardResourceSerializer
end
