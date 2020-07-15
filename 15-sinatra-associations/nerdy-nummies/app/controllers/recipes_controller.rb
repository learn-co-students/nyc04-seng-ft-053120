class RecipesController < ApplicationController
    get '/recipes/new' do
        @users = User.all
        erb :'recipes/new'
    end

    post '/recipes' do
        # binding.pry
        recipe = Recipe.create(params[:recipe])
        redirect "/users/#{recipe.user_id}"
    end

end