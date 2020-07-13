require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get "/pizza" do
    erb :pizza
  end

  # Task 1: Show a page with all the users
  get '/users' do
    @users = User.all
    erb :users
  end

end
