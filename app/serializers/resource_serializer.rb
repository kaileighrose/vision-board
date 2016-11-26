class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :kind, :name, :item, :user_id
  ##has_many :boards, serializer: BoardResourcesSerializer
  ##has_one :user##, serializer: UserResourceSerializer
  ##has_many :notes, serializer: ResourceNoteSerializer
end