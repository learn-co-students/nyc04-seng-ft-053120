class UsersController < ApplicationController

    def new
        @user = User.new
        render :new
    end

    def create
        # byebug
        user_params = params.require(:user).permit(:username, :password)
         user = User.create(user_params)
        session[:user_id] = user.id
        redirect_to politicians_path
    end
end
