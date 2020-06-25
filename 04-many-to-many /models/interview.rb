class Interview

    attr_reader :interviewer, :applicant, :company
    attr_accessor :room_number, :date

    @@all = []

    def initialize (interviewer, applicant, room_number, company, date)
        @interviewer = interviewer
        @applicant = applicant
        @room_number = room_number
        @company = company
        @date = date

        @@all << self
    end

    def self.all
        @@all
    end
end