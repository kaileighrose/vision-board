class ResourceNoteSerializer < ActiveModel::Serializer
  attributes :id, :note_id, :resource_id, :content
end
