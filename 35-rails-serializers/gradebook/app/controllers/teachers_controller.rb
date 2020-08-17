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

end
