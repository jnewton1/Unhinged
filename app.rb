require 'sinatra'
require './lib/game.rb'

set :public_folder, "public"

get '/' do
  @goldcount = 0
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

post '/startfire' do
  erb :startfire
end


post '/processgold' do
  if params['goldcount'].to_i > 50
    erb :dragonattack
  else
    #store inventory
    @goldcount = params['goldcount'].to_i
    erb :tree
    #return "#{params['goldcount'].to_i} added to gold inventory"
 # return params['goldcount']
  end
end

post '/movement' do
  @status = "continue"
  if params['movement'].eql?"UP"
    return erb :cave
  else
  end
end

post '/throwfivegold' do
  @goldcount = 5
  erb :dragonattack
end

post '/throwtengold' do
  @goldcount = 10
  erb :cave
end