# Tweet.all returns all the Tweets created
# Tweet#username returns the username of the Tweet's user
class Tweet

    attr_reader :message, :user
    @@all = []

    def initialize (message, user)
        @message = message
        @user = user
        @@all << self
    end

    def self.all


    end
end