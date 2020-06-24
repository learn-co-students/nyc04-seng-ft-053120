class User

    attr_reader :username
    attr_accessor :bio, :tweets_arr, :likes
    @@likes = "ruby and javascript"

    def initialize (username, bio)
        @username = username
        @bio = bio
    end

    def self.likes
        @@likes
    end

    def self.likes=(new_likes)
        @@likes = new_likes
    end

    def post_tweet(message)
        Tweet.new(message, self)
    end

    def tweets
        Tweet.all.select do |tweet_instance|
            tweet_instance.user == self
        end
    end

    def self.print_tweets
        binding.pry
        Tweet.all.each do |tweet_instance|
            puts "😭🦜 #{tweet_instance.username}: "
            puts "#{tweet_instance.message}"
        end
    end
end