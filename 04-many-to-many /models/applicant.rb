class Applicant

    attr_reader :name, :location
    attr_accessor :skills
    @@all = []

    def initialize (name, location, skills)
        @name = name
        @location = location
        @skills = skills
        @@all << self
    end

    def self.all
        @@all
    end

    # Task 1: applicant should be able to get all their interviews
    # applicant#interviews
    def interviews
        Interview.all.select do |interview_instance|
            # binding.pry
            interview_instance.applicant == self
        end
    end

    # Task 2: applicant should be able to get all their interviewers
    # applicant#interviewers
    def interviewers
        # binding.pry
        self.interviews.map do |interview_instance|
            interview_instance.interviewer
        end
    end

end