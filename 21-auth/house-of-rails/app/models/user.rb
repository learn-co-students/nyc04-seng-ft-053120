class User < ApplicationRecord
    has_many :statements
    has_secure_password

    validates :username, presence: true, uniqueness: true

    # def password=(plaintext_password)
    #     # run the plaintext password through a hashing algo
    #     encrypted_pw = BCrypt::Password.create(plaintext_password)
    #     # save the encrypted password to the database
    #     self.password_digest = encrypted_pw
    # end

    # def authenticate(plaintext_password)
    #     # pull out the password_digest string out of the database
    #     # and turn it into an instance Bcrypt::Password
    #     encrypted_pw = BCrypt::Password.new(self.password_digest)

    #     # compare the encrypted password to the plaintext_password
    #     encrypted_pw == plaintext_password
    # end
end
