class BoardResourceSerializer < ActiveModel::Serializer
  attributes :id, :kind, :name, :item
end
