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
        render :new
    end

    def create
        # byebug
        Politician.create(politician_params)
        redirect_to politicians_path
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
