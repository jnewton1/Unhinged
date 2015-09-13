require 'sinatra'

get '/' do
  erb :index, :locals => { :game => "helen" }
end
