require 'pry'
require_relative 'models/user.rb'
require_relative 'models/tweet.rb'

u1 = User.new("coffee dad", "coffee lover, dark like my soul")
u2 = User.new("coffee mom", "Coffee lovin' mom")
u3 = User.new("tea mom", "Tea please")
t1 = Tweet.new("havin NOT tea", u1)
t2 = Tweet.new("coffee#", u2)
t3 = Tweet.new("Tea is better than coffee", u3)
t4 = Tweet.new("Havin tea on my stoop", u3)

# User.print_tweets
binding.pry