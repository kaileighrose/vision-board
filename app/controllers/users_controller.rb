class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
    @user = User.new
  end

  def create
    @user = User.create(username: params["username"], password: params["password"])
    if @user.save
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

  def index
    @user = User.find(current_user.id) if current_user != nil
    render json: @user 
  end

  def show
    @user = User.find(current_user.id) if current_user != nil
    render json: @user 
  end

  def destroy
    @user = User.find(current_user.id)
    @user.destroy
  end

private
  def user_params
    params.require(:user).permit(:id, :username, :password, :boards => [], :resources => [])
  end
end
