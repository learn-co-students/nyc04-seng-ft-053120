class ApplicationController < ActionController::Base
    private
    def set_view_tracker
        session[:view_tracker] ||= 3
    end
end
