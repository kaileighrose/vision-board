class NotesController < ApplicationController

  private

  def note_params
    params.require(:note).permit(:id, :resource_id, :user_id, :content)
  end
end
