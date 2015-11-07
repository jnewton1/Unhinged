require 'sinatra'
require 'set'
require './lib/game.rb'

set :public_folder, "public"

get '/' do
  @goldcount = 0
  @inventory = Hash.new
  @story="You are in a dark forest. It's cold and raining."
  #@followup = "To the north there is a cave (1) and to the east there is a tree (2), choose your destiny"
  @option1 = "To the north there is a cave"
  @option2 = "To the east there is a tree"
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
  #@goldcount = @goldcount- 5
  #because of greed they face dragon again
  @greed = "yes"
  erb :dragonattack
end

post '/throwtengold' do
  @greed = "no"
  #@goldcount -= 10
  @status = "continue"
  erb :cave
end

post '/throwfifteengold' do
  #@goldcount -= 15
  @greed = "yes"
  erb :cave
end

post '/throwtwentygold' do
  @greed = "no"
  #@goldcount -= 20
  erb :cave
end

post '/stokefire' do
  @status = "continue"
  @firelevel = "high"
end

#hack because I dont know how to pass two values
post '/updateinventory' do
  if params['command'] != 'no'
    #@inventory.add("knife")
  #@inventory.add(params['command'])
  return @inventory
  else
    erb :tree
  end
=begin  
  if @inventory.include?(params['command'])
    @inventory["knife"] += 1
  else
    @inventory.add(params['command'])
  end
  #return @inventory
=end
end
=begin
def updateinventory (hashvalue, amount)
  if @inventory.include?(hashvalue)
    @inventory[hashvalue] += amount
  else
    @inventory.add(hashvalue)
  end
  return @inventory
end 
=end