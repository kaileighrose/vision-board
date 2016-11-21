class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :type, :title, :item, :user_id
  has_many :boards, serializer: BoardResourceSerializer
  has_one :user, serializer: UserResourceSerializer
  has_many :notes, serializer: ResourceNotesSerializer
end