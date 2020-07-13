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
    erb :index
  end

  # Task: display a form where a new user can be created
  get '/users/new' do
    erb :new
  end

  # Task: handle a post request & create the new user
  # with the information from the form
  post '/users' do
    # "Hello World"
    # binding.pry
    user = User.create(params[:user])
    redirect "/users/#{user.id}"
  end


  get '/users/:id' do
    # "Hello World"
    # binding.pry
    @emoji = "😸"
    @user = User.find(params[:id])
    erb :show
  end
  
  # get '/users/2' do
  #   # "Hello World"
  #   @user = User.find(2)
  #   erb :show
  # end




end
