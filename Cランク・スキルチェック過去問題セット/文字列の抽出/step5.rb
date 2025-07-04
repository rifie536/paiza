tag_a, tag_b = gets.chomp.split
s = gets.chomp
position = 0
while position < s.length
    a_index = s.index(tag_a, position)
    break if a_index.nil?
    b_index = s.index(tag_b, position)
    puts [a_index + 1, b_index + 1].join(' ')
    position = b_index + tag_b.length
end