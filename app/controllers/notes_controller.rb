class NotesController < ApplicationController

  def new
    @note = Note.new
    render json: @note 
  end

  def create
    @note = Note.create(note_params)
    if @note.save
      render json: @note 
    end
  end

  def edit
    @note = Note.find(params[:id])
    render json: @note 
  end

  def update
    @note = Note.find(params[:id])
    @note.update(note_params)
    if @note.save
      render json: @note 
    end
  end

  def show
    @note = Note.find(params[:id])
    render json: @note 
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
  end

  private

  def note_params
    params.require(:note).permit(:id, :resource_id, :user_id, :content)
  end
end
