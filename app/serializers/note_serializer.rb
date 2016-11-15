class NoteSerializer < ActiveModel::Serializer
  attributes :id, :resource_id, :content
  belongs_to :resource, through: ResourceNoteSerializer
end
