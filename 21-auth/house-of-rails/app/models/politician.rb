class Politician < ApplicationRecord
    has_many :statements, dependent: :destroy

    # Task 1: politician name must exist & can only be letters
    validates :name, presence: true
    validates :name, format: { with: /\A[a-zA-Z]+\z/,
        message: "only allows letters!!!!" }

    # Task 2: rating has to be between 0 and 100
    # validates :approval_rating, numericality: {
    #     greater_than_or_equal_to: 0,
    #     less_than_or_equal_to: 100
    # }
    validates :approval_rating, inclusion: {
        in: 0..100,
        message: "must be between 0 and 100"
    }

    # Task 3: politician must be older than 18
    validates :age, numericality: {
        greater_than: 18
    }
end
