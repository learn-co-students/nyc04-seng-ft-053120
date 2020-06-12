# Nested Data Structures: Reducing Data

For the final lab on traversing `Array` of `Array`s, we're going to apply the
double `while` loop to find a single value.

## Traverse `Array` of `Array`s to Produce a Single Value

Another variant on traversing nested Arrays is traversing the matrix and
accumulating all the values. Let's imagine that someone created a grid
representing a guessing game. In each cell of the grid, the games makers have put
some amount of cash. Let's sum up all the possible values to determine how much
money is in the grid.

```rb
guessing_game_grid = [
 [1, 2, 1, 7, 3],
 [2, 100, 15, 4, 18],
 [15, 16, 99, 1, 2, 11]
]

total = 0
row_index = 0
while row_index < guessing_game_grid.count do
  element_index = 0
  while element_index < guessing_game_grid[row_index].count do
    total += guessing_game_grid[row_index][element_index]
    element_index += 1
  end
  row_index += 1
end
total #=> 297
```

This pattern is known as reduction because you're going to reduce a nested data
structure to a single value. As you learn Ruby's Enumerable methods, remembering
this name will help a lot!

## Instructions

In this lab, you'll be working with a mix of data types - nested arrays with
strings and numbers. We need to extract out the strings from this data, ignoring
the numbers.

Write a method, `join_nested_strings`, that can take in an array of arrays of
integers _and_ strings. This method should iterate over each nested array,
combining all the strings into a single string value.

For example, given the code below:

```rb
mixed_data = [
  ["The", 4, "quick"],
  [-1, "brown", "fox", 30],
  ["studied", 101, 233, "Ruby"]
]

join_nested_strings(mixed_data)
```

We should expect the following returned:

```rb
"The quick brown fox studied Ruby"
```

**Note:** Don't worry if your resulting string has an extra space at the end -
the tests will ignore it.

## Conclusion

We've seen examples of methods like `.join` that combine arrays of strings, but
in this situation, we need something more customizable. We were able to take a
set of 'dirty' data and reduce it down to a single value, something that `.join`
would not be able to accomplish on its own.

You may have noticed that when we're discussing nested data structures - a lot of
the concepts we are introducing are things we've seen in regular arrays. At the
core of our implementations, we're performing operations that we're familiar
with - using conditional statements, combining values, pushing data into arrays,
etc... We're incorporating these basic tasks with loops to produce custom data
tools.
