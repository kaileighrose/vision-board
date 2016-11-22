class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def new
    
  end

  def create
    @user = User.find_by(username: params[:username])
    return head(:forbidden) unless @user.authenticate(params[:password])
    session[:user_id] = @user.id
    current_user = @user
    render json: @user
  end

  def destroy
    session[:user_id] = nil
  end

end
