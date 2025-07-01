tag_a, tag_b = gets.chomp.split
s = gets.chomp

position = 0
while position < s.length
    start_index = s.index(tag_a, position)
    break if start_index.nil?

    start_pos = start_index + tag_a.length
    end_pos = s.index(tag_b, start_pos)
    break if end_pos.nil?

    extracted = s[start_pos...end_pos]

    if extracted.empty?
        puts "<blank>"
    else
        puts extracted
    end

    position = end_pos + tag_b.length
end