class TeachersController < ApplicationController
    
    def index
        @teachers = Teacher.all
        render json: @teachers
    end

    def show 
        @teacher = Teacher.find(params[:id])
        # render json: @instance triggers the InstanceSerializer
        render json: @teacher
    end

    def login
        @teacher = Teacher.find_by(name: params[:usernameFromFrontEnd])
        if @teacher
            render json: @teacher 
        else
            render json: {error: "No teacher with that name exists"}
        end
    end

end
