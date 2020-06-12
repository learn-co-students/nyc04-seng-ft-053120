require 'pry'

def join_string(str1, str2)
  binding.pry
  str1.join(str2)
end

join_string("hello", "world")