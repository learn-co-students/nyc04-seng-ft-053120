require 'pry'
require 'rest-client'
require 'json'


def welcome
    puts "Hello! Welcome to our book searching application! What sort of books would you like to search for?"
end

def user_input
    gets.chomp 
end

def get_books(query)
    response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{query}")
    JSON.parse(response)
end

def run
    welcome
    query = user_input
    get_books(query)["items"].map do |book|
        puts book["volumeInfo"]["title"]
    end
    # binding.pry
end

run
# make a "get" request to the google books api and get back a response
# response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=vampires")
# want to be able to convert the JSON into a Ruby data structure
# ruby_data = JSON.parse(response)