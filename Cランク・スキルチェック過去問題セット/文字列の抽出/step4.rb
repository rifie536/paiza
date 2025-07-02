tag_a, tag_b = gets.chomp.split
s = gets.chomp
a_index = s.index(tag_a)
b_index = s.index(tag_b)
puts [a_index + 1, b_index + 1].join(' ')