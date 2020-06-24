require 'pry'
require_relative 'models/user.rb'
require_relative 'models/tweet.rb'

u1 = User.new("coffee dad", "coffee lover, dark like my soul")
t1 = Tweet.new("havin NOT tea", u1)

binding.pry