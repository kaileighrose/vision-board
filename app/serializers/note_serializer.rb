class NoteSerializer < ActiveModel::Serializer
  attributes :id, :content
  belongs_to :resource, through: ResourceNoteSerializer
end
