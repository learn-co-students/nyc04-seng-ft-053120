require 'spec_helper'

mixed_data_1 = [
  ["The", 4, "quick"],
  [-1, "brown", "fox", 30],
  ["studied", 101, 233, "Ruby"]
]

mixed_data_2 = [
  ["Turning", "and", "turning", "in", "the", "widening", "gyre"],
  ["The", "falcon", "cannot", "hear", "the", "falconer;"],
  ["Things", "fall", "apart;", "the", "centre", "cannot", "hold"]
]

describe "Write a method called \"join_nested_strings\"" do
  describe "that takes in an Array of Arrays containing Integers and Strings" do
    it "returns a single combined string of all strings in the data structure" do
      expect(join_nested_strings(mixed_data_1)).to match(/The quick brown fox studied Ruby/)
      expect(join_nested_strings(mixed_data_2)).to match(/Turning and turning in the widening gyre The falcon cannot hear the falconer; Things fall apart; the centre cannot hold/)
    end
  end
end