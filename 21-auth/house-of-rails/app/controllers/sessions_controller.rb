class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:new, :create]

    def new
        render :new
    end

    def create
        # byebug
        # find the user in the database by the username
        user = User.find_by(username: params[:session][:username])
        # compare their password to whatever password was passed in the form
        if user.authenticate(params[:session][:password])
        # if the password is correct, save the user_id to the session
            session[:user_id] = user.id 
            redirect_to politicians_path
        else
            flash[:errors] = user.errors.full_messages
            redirect_to login_path
        end
    end

    def destroy
        # byebug
        session.delete(:user_id)
        redirect_to login_path
    end

    def reset_view_tracker
        # reset the view tracker
        session[:view_tracker] = 3
        # redirect
        redirect_back(fallback_location: politicians_path )
        # redirect_back(followback_location: '/politicians' )
    end
end