class Politician < ApplicationRecord
    has_many :statements, dependent: :destroy
end
