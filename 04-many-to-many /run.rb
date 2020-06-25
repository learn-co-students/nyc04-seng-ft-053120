require 'pry'
require_relative 'models/applicant.rb'
require_relative 'models/interviewer.rb'
require_relative 'models/interview.rb'

# applicant -< interview >- interviewers

# name, location, skills
a1 = Applicant.new("billy jack", "florida", "carpentry")
a2 = Applicant.new("monica", "hawaii", "ruby")
a3 = Applicant.new("jasmine", "nyc", "coffee & Java")

# name, position
i1 = Interviewer.new("Otha", "Genius")
i2 = Interviewer.new("Karen", "Manager")

# interviewer, applicant, room_number, company, date
m1 = Interview.new(i1, a1, 55, "Google", "3/7/2020")
m2 = Interview.new(i2, a1, 55, "Flatiron", "3/8/2020")
m3 = Interview.new(i1, a1, 55, "Etsy", "12/7/2020")
m4 = Interview.new(i1, a3, 55, "Pets.com", "10/9/2020")


binding.pry