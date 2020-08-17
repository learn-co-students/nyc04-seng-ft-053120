class TeacherSerializer < ActiveModel::Serializer
    # Any Ruby instance methods can be sent out to the JS frontend via attributes
        # attributes cannot call on other serializers
    attributes :id, :name, :professor_name
    
        # Using AR macros will allow you to call on other serializers (`has_many` && `belongs_to`)

    has_many :classrooms
end