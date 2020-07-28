class StatementsController < ApplicationController
    before_action :set_statement, only: [:show, :edit, :update, :destroy]
    before_action :authorize_user, only: [:edit, :update, :destroy]
    
    def new
        if session[:user_id]
            @statement = Statement.new
            render :new
        else
            redirect_to login_path
        end
    end

    def create 
        merged_params = statement_params.merge(user_id: @current_user.id)
        statement = Statement.create(merged_params)
        redirect_to "/politicians/#{statement.politician.id}"
    end
    
    def show
        render :show
    end

    def index
        @statements = Statement.all
    end

    def edit
        if @current_user == @statement.user
            render :edit
        else
            redirect_to @statement
        end
    end

    def update
        @statement.update(statement_params)
        redirect_to statements_path
    end

    def destroy
        @statement.destroy
        redirect_to statements_path
    end

    private 

    def statement_params
        params.require(:statement).permit(:declaration, :truth, :year, :politician_id)
    end

    def authorize_user
        @statement = Statement.find(params[:id])
        redirect_to @statement unless @current_user == @statement.user
    end

    def set_statement
        @statement = Statement.find(params[:id])
    end
end
