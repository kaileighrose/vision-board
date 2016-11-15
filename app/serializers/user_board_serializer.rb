class UserBoardSerializer < ActiveModel::Serializer
  attributes :user_id, :username, :board_id
end
