class Startup

    attr_reader :name, :founder, :domain
    @@all = []

    def initialize (name, founder, domain)
        @name = name
        @founder = founder
        @domain = domain

        @@all << self
    end

    def sign_contract(vc_object, type, amount)
        # startup, venture_capitalist, type, investment
        FundingRound.new(self, vc_object, type, amount)
    end

    def num_funding_rounds
        self.funding_rounds.count
    end

    def total_funds
        total = 0
        self.funding_rounds.map do |fr|
            total += fr.investment
        end
        total
    end

    def funding_rounds
        FundingRound.all.select do |fr|
            fr.startup == self
        end
    end

    def investors
        self.funding_rounds.map do |fr|
            fr.venture_capitalist
        end.uniq
    end

    def big_investors
        self.investors.select do |i|
            i.total_worth > 1_000_000_000
        end
    end


    def pivot(domain, name)
        @domain = domain
        @name = name
    end

    def self.all
        @@all
    end

    def self.find_by_founder(name)
        self.all.find do |startup|
            startup.founder == name
        end
    end

    def self.domains
        self.all.map do |startup|
            startup.domain
        end
    end

end
