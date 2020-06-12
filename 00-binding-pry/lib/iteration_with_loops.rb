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

# do something with each element of the inner array
element_index += 1
end

row_index += 1

# return something
result
end