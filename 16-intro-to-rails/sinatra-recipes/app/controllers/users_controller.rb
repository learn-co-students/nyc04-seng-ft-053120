class UsersController < ApplicationController
    get '/users' do
        @users = User.all
        erb :index
    end

    # get '/new'
end