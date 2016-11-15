class UserResourceSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :username, :resource_id
end
