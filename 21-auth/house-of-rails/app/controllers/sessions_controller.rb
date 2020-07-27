class SessionsController < ApplicationController
    def reset_view_tracker
        # reset the view tracker
        session[:view_tracker] = 3
        # redirect
        redirect_back(fallback_location: politicians_path )
        # redirect_back(followback_location: '/politicians' )
    end
end