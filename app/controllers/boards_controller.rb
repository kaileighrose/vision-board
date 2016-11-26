class BoardsController < ApplicationController
  before_filter :authorize
  skip_before_action :verify_authenticity_token

  def new
    @board = Board.new
    render json: @board 
  end

  def index
    @boards = Board.all.where("user_id = ?", User.current_user.id)
    render json: @boards 
  end

  def create
    @board = Board.create(board_params)
    @board.user_id = User.current_user.id
    if @board.save
      render json: @board 
    end
  end

  def edit
    @board = Board.find(params[:id])
    render json: @board 
  end

  def update
    @board = Board.find(params[:id])
    @board.resources << Resource.find(params[:resource_id])
    if @board.save
      render json: @board 
    end
  end

  def show
    @board = Board.find(params[:id])
    render json: @board 
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy
  end

  def remove
    @board = Board.find(params[:id])
    @board.resources.delete(Resource.find(params[:resource_id]))
    if @board.save
      render json: @board 
    end
  end

private
  def board_params
    params.require(:board).permit(:id, :name, :user_id, :resource_id, :resources => [])
  end
end
