tag_a, tag_b = gets.chomp.split
s = gets.chomp
a_index, b_index = gets.split.map(&:to_i)

if a_index + tag_a.length - 1 == b_index - 1
    puts "<blank>"
else
    puts s.slice(a_index + tag_a.length - 1...b_index - 1)
end