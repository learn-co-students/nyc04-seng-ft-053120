require 'pry'

def join_nested_string(src)
  result = ""

  row_index = 0
  while row_index < src.length do
    element_index = 0
    row = src[row_index]
    while element_index < row.length do
      binding.pry
      element_index += 1
    end
    row_index += 1
  end

  result
end

array_of_arrays = [
  ["pry", "me"],
  ["a", "river"]
]

join_nested_string(array_of_arrays)