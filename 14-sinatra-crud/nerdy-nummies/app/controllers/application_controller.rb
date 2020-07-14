require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  get "/" do
    erb :welcome
  end

  get "/pizza" do
    erb :pizza
  end

  # Show a page with all the users
  get '/users' do
    @users = User.all
    erb :index
  end

  # Display a form where a new user can be created
  get '/users/new' do
    erb :new
  end

  # Handle a post request & create the new user
  # with the information from the form
  post '/users' do
    # binding.pry
    user = User.create(params[:user])
    redirect "/users/#{user.id}"
  end

  # Display a form to edit a user
  get '/users/:id/edit' do
    # "Hello World"
    @user = User.find(params[:id])
    erb :edit
  end

  # Handle request to update user with information from the form
  patch '/users/:id' do
    # binding.pry
    # find the user that we want to update
    user = User.find(params[:id])
    # update the user
    user.update(params[:user])
    # redirect to the user's show page
    redirect "/users/#{user.id}"
  end

  # Delete a specific user
  delete '/users/:id' do
    # binding.pry
    # find the user we want to delete
    user = User.find(params[:id])
    # delete them
    user.destroy
    # redirect users index page
    redirect '/users'
  end

  # Display a page with information about one specific user
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
