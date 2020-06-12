# Using `binding.pry`

## When to pry

Until you are able to sight-read your code and explain to youself line-by-line what your code is doing and what data types you are using with 100% certainty, using debugging tools like `binding.pry` and print statements (`p` and `puts`) is a great way to understand what happens when your code runs.

**Important Note!** `pry` won't work if your code has any syntax errors, so make sure your code is properly structured (valid syntax, not missing `end`, etc) as a first step! Getting in the habit of indenting your code early on will help identify syntax errors and make your code more readable.

## How to pry

Using `binding.pry` always involves 3 steps:

1. At the top of the file, add a require statement: `require 'pry'`
2. Within the method/block of code you are trying to debug, add `binding.pry` on its own line
3. Run your code! This can mean running it by running the tests using `learn`, or running it manually from the terminal with `ruby my_file.rb`. **Important!** `pry` will only run in a method if something actually invokes that method, so if you're testing code without running `learn`, make sure to add a method invocation and some sample data, like this:

```rb
require 'pry'

def my_method(num)
  binding.pry
end

my_method(2) # without this line, pry will never run!
```

## Where to pry

`pry` is useful for many things, but here are some common scenarios where you can use `pry` to help debug. 

### Scenario 1: Runtime errors

If you run your code and you get an error message that isn't a syntax error, use `binding.pry` on **the line above the error** to understand what went wrong. For example, this code has an error:

```rb
require 'pry'

def join_string(str1, str2)
  str1.join(str2)
end

join_string("hello", "world")
```

When running this code, we'll see the following error message:

```
Traceback (most recent call last):
    1: from lib/example.rb:7:in `<main>'
lib/example.rb:4:in `join_string': undefined method `join' for "hello":String (NoMethodError)
```

Since the error comes on line 4, we can add a `binding.pry` on the line above to see what went wrong:

```rb
require 'pry'

def join_string(str1, str2)
  binding.pry
  str1.join(str2)
end

join_string("hello", "world")
```

Now when we run this code, we'll hit the `binding.pry` before the line that threw an error, and we can test out that offending line in the console to debug it, and try other solutions before updating our code:

```
# this is the line that broke, let's try to recreate the error
[1] pry(main)> str1.join(str2)        

# same error we saw before! so join doesn't work 
  NoMethodError: undefined method 'join' for "hello":String
  from (pry):1:in 'join_string'

# now we can try something new
[2] pry(main)> str1 + " " + str2

# it works!                  
=> "hello world"                                           
```

### Scenario 2: Checking variables/parameters

When you're running tests, it can be helpful to use `binding.pry` to look at what arguments the test is passing to your methods. For example:

```rb
require 'pry'

def my_method(src)
  binding.pry
end
```

When you run `learn` and the tests try to invoke your method, it will hit your `pry` and you can inspect the data:

```
[1] pry(main)> src
=> ["hello", "world"]
```

**Important note**: `pry` has the same rules about scope and variable access as Ruby, so if you have your `pry` above a variable declaration, you won't be able to access that variable within `pry`:

```rb
require 'pry'

def my_method(src)
  binding.pry
  a_variable = 1
end
```

```
[1] pry(main)> a_variable
=> nil
```

If you want to check what data is stored at a variable in your code, use `pry` on **any line below your variable**:

```rb
require 'pry'

def my_method(src)
  a_variable = 1
  binding.pry
end
```

```
[1] pry(main)> a_variable
=> 1
```

### Scenario 3: Debugging Loops

`pry` is an awesome tool for debugging loops because it will let you inspect variables multiple times as your code runs through the loop! For example, in this code, we can check if our loop is working and if we are able to access each element in a nested array:

```rb
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
```

The first time it hits our `binding.pry` we can look at the first element in the first nested array like this:

```
[1] pry(main)> row[element_index]
=> "pry"
```

To see what the next element is, we need to exit our current `binding.pry`:

```
[2] pry(main)> exit
```

This will continue executing our code, and since our code is running in a loop, we'll hit the same `binding.pry` **again**! Now we can check the next element:

```
[1] pry(main)> row[element_index]
=> "me"
```

If you're done inspecting but you're stuck in a loop, typing `!!!` in your `pry` terminal will exit without stepping through any additional code.