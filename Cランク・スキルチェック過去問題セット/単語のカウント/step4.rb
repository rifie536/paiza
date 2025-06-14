words = gets.chomp.split
already = []
words.each do |word|
    puts already.include?(word) ? "already_been" : word
    already << word
end