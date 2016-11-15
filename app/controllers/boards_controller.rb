class BoardsController < ApplicationController
  before_filter :authorize

private
  def board_params
    params.require(:board).permit(:id, :board, :user_id, :resources => [])
  end
end
