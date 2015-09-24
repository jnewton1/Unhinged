require 'sinatra'
require './lib/game.rb'

set :public_folder, "public"

get '/' do
  game= Game.new
  erb :index, :locals => { :game => game.main }
end
