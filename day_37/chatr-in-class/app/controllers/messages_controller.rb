class MessagesController < ApplicationController

  def index
    # render xml: Message.all
    render json: Message.all
  end

  def create
    Message.create!(body: params[:body])
    head :created
  end

  def destroy
    Message.find(params[:id]).destroy!
    head :ok
  end

end
