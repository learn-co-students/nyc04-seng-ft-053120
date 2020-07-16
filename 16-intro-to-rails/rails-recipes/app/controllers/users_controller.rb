class UsersController < ApplicationController
    def index
        @users = User.all
    end

    def show
        # byebug
        @user = User.find(params[:id])
        render :show
    end
end