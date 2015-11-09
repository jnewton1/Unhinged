require 'sinatra'
require 'set'
require './lib/game.rb'

set :public_folder, "public"

get '/' do
  @@health = 100
  @@goldcount = 0
  @@inventory = { }
  @story="You are in a dark forest. It's cold and raining."
  @option1 = "To the north there is a cave"
  @option2 = "To the east there is a tree"
  #level= Game::castle
  erb :index
end

post '/console' do
  if params['command'] == '1'
    erb :cave
  else 
    @first = "yes"
    erb :tree
  end
end

post '/startfire' do
  erb :startfire
end


post '/processgold' do
  if params['goldcount'].to_i > 50
    @@goldcount = params['goldcount'].to_i
    erb :dragonattack
  else
    #store inventory
    @@goldcount = params['goldcount'].to_i
    @status = "continue"
    erb :cave
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
  @@goldcount = @@goldcount- 5
  @@health = @@health- 15
  #because of greed they face dragon again
  @greed = "yes"
  @doover= "yes" 
  erb :dragonattack
end

post '/throwtengold' do
  @greed = "no"
  @@goldcount = @@goldcount- 10
  @@health = @@health- 5
  @status = "continue"
  erb :cave
end

post '/throweithergold' do
  if params['command'] == "five"
    @@goldcount = @@goldcount - 5
    @@health = @@health- 15
    @greed = "yes"
  else
    @@goldcount = @@goldcount - 10
    @@health = @@health- 5
    @greed = "no"
  end
  erb :cave
end


post '/stokefire' do
  @status = "continue"
  @firelevel = "high"
end

#hack because I dont know how to pass two values
post '/updateinventory' do
  if params['command'] != 'no'
    if @@inventory.include?(params['command'])
      if params['command'] == "wood"
        @@inventory[params['command']] += 5
        erb :cave
      else
        @@inventory[params['command']] += 1
        erb :tree
        #return "Inventory #{@@inventory}"
      end
    else
      if params['command'] == "wood"
        @@inventory.store(params['command'], 5)
        erb :tree
      else
        @@inventory.store(params['command'], 1)
        erb :tree
      end
    end
  else
    erb :tree
  end
end