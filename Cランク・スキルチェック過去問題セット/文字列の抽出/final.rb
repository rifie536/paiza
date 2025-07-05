tag_a, tag_b = gets.chomp.split
s = gets.chomp

position = 0
while position < s.length
    a_index = s.index(tag_a, position)
    break if a_index.nil?
    b_index = s.index(tag_b, position)
    start_pos = a_index + tag_a.length
    end_pos = b_index
    text = s[start_pos...end_pos]
    if text.empty?
        puts "<blank>"
    else
        puts text
    end
    position = b_index + tag_b.length
end