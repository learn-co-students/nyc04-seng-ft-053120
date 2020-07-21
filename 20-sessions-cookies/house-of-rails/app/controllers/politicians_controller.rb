class PoliticiansController < ApplicationController
    def index
        @politicians  = Politician.all
        render :index
    end

    def show
        @politician = Politician.find(params[:id])
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
        @politician = Politician.find(params[:id])
        render :edit
    end

    def update
        # find the politician that we want to edit
        politician = Politician.find(params[:id])
        # actually edit the politician, use strong params
        politician.update(politician_params)
        # redirect 
        redirect_to politician_path(politician.id)
    end

    def destroy
        # find the politician to delete
        politician = Politician.find(params[:id])
        # politician.statements.destroy_all
        # delete them
        politician.destroy
        redirect_to politicians_path
    end

    private
    def politician_params
        params.require(:politician).permit(:name,:position,:party,:age,:approval_rating)
    end
end
