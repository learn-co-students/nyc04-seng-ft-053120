class PoliticiansController < ApplicationController
    before_action :set_view_tracker
    before_action :set_politician, only: [:show, :edit, :update, :destroy]
    
    def index
        # byebug
        @politicians  = Politician.all
        render :index
    end

    def show
        #if the view tracker has a integer value -> subtract 1 from it
        session[:view_tracker] = session[:view_tracker] - 1
        @statements = @politician.statements

        render :show
    end

    def new
        @politician = Politician.new
        @errors = flash[:errors]
        render :new
    end

    def create
        politician = Politician.create(politician_params)
        # check whether the politician is/is not valid
        # if politician is valid, then redirect to the politicians path
        if politician.valid?
            redirect_to politicians_path
        else
            # if politician is not valid, then we reload the form & display errors to the user
            # byebug
            flash[:errors] = politician.errors.full_messages
            redirect_to new_politician_path
        end
    end

    def edit
        render :edit
    end

    def update
        # edit the politician, use strong params
        @politician.update(politician_params)
        # redirect 
        redirect_to politician_path(@politician.id)
    end

    def destroy
        # find the politician to delete (before_action :set_politician)
        # destroy all the statements of this politician
        # delete the politician
        @politician.destroy
        redirect_to politicians_path
    end

    private
    def politician_params
        params.require(:politician).permit(:name,:position,:party,:age,:approval_rating)
    end

    def set_politician 
        @politician = Politician.find(params[:id])
    end
end
