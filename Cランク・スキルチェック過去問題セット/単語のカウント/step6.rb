words = gets.chomp.split
already = []
words.each do |word|
    temp =  already.include?(word) ? 1 : word
    puts temp
    already << word
end