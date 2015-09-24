require 'sinatra'

set :public_folder, "public"

get '/' do
  erb :index, :locals => { :game => "helen" }
end
