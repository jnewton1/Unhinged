require 'sinatra'
require './lib/game.rb'

set :public_folder, "public"

get '/' do
  level= Game::castle
  erb :index, :locals => { :desc => level.description }
end
