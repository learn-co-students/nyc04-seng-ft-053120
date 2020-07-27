class ApplicationController < ActionController::Base
    before_action :set_current_user

    def set_current_user
        @current_user = User.find_by(id: session[:user_id])
    end
    private
    def set_view_tracker
        session[:view_tracker] ||= 3
    end
end
