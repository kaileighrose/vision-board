class UserResourceSerializer < ActiveModel::Serializer
  attributes :id, :kind, :name, :item, :user_id
end
