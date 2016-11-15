class UsersController < ApplicationController
  before_filter :authorize

  def new
    @user = User.new
    render json: @user 
  end

  def create
    @user = User.create(user_params)
    if @note.save
      current_user = @user
      render json: @user 
    end
  end

  def edit
    @user = User.find(current_user.id)
    render json: @user 
  end

  def update
    @user = User.find(current_user.id)
    @user.update(user_params)
    if @user.save
      render json: @user 
    end
  end

  def show
    @user = User.find(current_user.id) if current_user != nil
    render json: @user 
  end

private
  def user_params
    params.require(:user).permit(:id, :username, :password, :boards => [], :resources => [])
  end
end
