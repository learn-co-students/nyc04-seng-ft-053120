class Interviewer

    attr_reader :name, :position

    @@all = []

    def initialize(name, position)
        @name = name
        @position = position
        @@all << self
    end

    def self.all
        @@all
    end

    # task 1: see all of their interviews
    # interview >- interviewer
    # interviewer#interviews
    def interviews
        Interview.all.select do |interview_instance|
            interview_instance.interviewer == self
        end
    end


    # task 2: should be able to see all of their applicants
    # interviewer#applicants
    def applicants
        self.interviews.map do |interview_instance|
            interview_instance.applicant
        end
    end


end