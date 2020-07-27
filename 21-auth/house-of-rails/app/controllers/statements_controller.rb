class StatementsController < ApplicationController
    def new
        @statement = Statement.new
    end

    def create 
        # byebug
        statement = Statement.create(statement_params)
        redirect_to "/politicians/#{statement.politician.id}"
    end

    private 
    def statement_params
        params.require(:statement).permit(:declaration, :truth, :year, :politician_id)
    end

end
