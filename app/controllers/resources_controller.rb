class ResourcesController < ApplicationController
  before_filter :authorize
  

  def new
    @resource = Resource.new
    render json: @resource 
  end

  def index 
    @resources = Resource.all.where("user_id = ?", User.current_user.id)
    binding.pry
    render json: @resources 
  end

  def create
    @resource = Resource.create(resource_params)
    if @note.save
      render json: @resource 
    end
  end

  def edit
    @resource = Resource.find(params[:id])
    render json: @resource 
  end

  def update
    @resource = Resource.find(params[:id])
    @resource.update(resource_params)
    if @resource.save
      render json: @resource 
    end
  end

  def show
    @resource = Resource.find(params[:id])
    render json: @resource 
  end

  def destroy
    @resource = Resource.find(params[:id])
    @resource.destroy
  end

  private

  def resource_params
    params.require(:resource).permit(:id, :kind, :item, :name, :user_id, :boards => [])
  end
end
