class Statement < ApplicationRecord
  belongs_to :politician
  belongs_to :user

  # Task 1: statement declaration should be unique for a politician
  validates :declaration, uniqueness: {
    scope: :politician_id,
    message: "already saved this declaration for this politician"
  }

  # Task 2: statement year must be a number
  validates :year, numericality: { 
    only_integer: true,
    message: "must be integer" 
  }

  # Task 3: write a custom validation - the year must be after the year 1975
  validate :year_must_be_post_seventy_five


  def year_must_be_post_seventy_five
    # byebug
    if self.year < 1975
      errors.add(:year, "must be after 1975")
    end
  end
end
