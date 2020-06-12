require 'pry'

# def my_method(num)
#   binding.pry
# end
# my_method(1)

def join_nested_strings(src)
  # src will be an Array of Arrays of Strings and Integers
  # Combine all Strings present in the AoA into a single value and return it
  result = ""
  
  # loop over outer array
  row_index = 0
  while row_index < src.count do
    
    # loop over inner array
    element_index = 0
    while element_index < src[row_index].count do
      element = src[row_index][element_index]
      if element.is_a? String
        result += element + " "
      end
      
      # do something with each element of the inner array
      element_index += 1
    end

    row_index += 1
  end

  # return "The brown fox ... "
  result
end

# mixed_data_1 = [
#   ["The", 4, "quick"],
#   [-1, "brown", "fox", 30],
#   ["studied", 101, 233, "Ruby"]
# ]

# p join_nested_strings(mixed_data_1)

# puts "u ran me lol"