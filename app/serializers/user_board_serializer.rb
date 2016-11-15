class UserBoardSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :username, :board_id
end
