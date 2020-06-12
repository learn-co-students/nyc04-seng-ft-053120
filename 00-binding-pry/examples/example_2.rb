require 'pry'

def my_method(src)
  binding.pry
  a_variable = 1
end

my_method("nice")