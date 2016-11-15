class ResourcesController < ApplicationController
  before_filter :authorize

  private

  def resource_params
    params.require(:resource).permit(:id, ::user_id, :boards => [])
  end
end
