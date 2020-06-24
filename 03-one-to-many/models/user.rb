# User#post_tweet takes a message, creates a new tweet, and adds it to the user's tweet collection
# User#tweets returns an array of Tweet instances
# User.print_tweets prints all tweets to the screen in a nice format

class User
    
    attr_reader :username
    attr_accessor :bio

    def initialize (username, bio)
        @username = username
        @bio = bio
    end

end