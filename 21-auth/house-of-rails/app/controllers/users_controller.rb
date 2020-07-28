class UsersController < ApplicationController
    skip_before_action :authorized, only: [:new, :create]

    def new
        @errors = flash[:errors]
        @user = User.new
        render :new
    end

    def create
        user = User.create(user_params)
        
        if user.valid?
            session[:user_id] = user.id
            redirect_to politicians_path
        else
            flash[:errors] = user.errors.full_messages
            redirect_to signup_path
        end 
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
