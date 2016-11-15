class BoardsController < ApplicationController
  before_filter :authorize

  def new
    @board = Board.new
    render json: @board 
  end

  def create
    @board = Board.create(board_params)
    if @note.save
      render json: @board 
    end
  end

  def edit
    @board = Board.find(params[:id])
    render json: @board 
  end

  def update
    @board = Board.find(params[:id])
    @board.update(board_params)
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

private
  def board_params
    params.require(:board).permit(:id, :board, :user_id, :resources => [])
  end
end
