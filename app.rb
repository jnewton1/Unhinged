require 'sinatra'
require './lib/game.rb'

set :public_folder, "public"

get '/' do
  @story="You are in a dark forest. It's cold and raining."
  @followup = "To the north there is a cave (1) and to the east there is a tree (2), choose your destiny"
  #level= Game::castle
  erb :index
end

post '/console' do
  if params['command'] == '1'
    erb :cave
  else 
    erb :tree
  end
end

