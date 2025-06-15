words = gets.chomp.split
already = []
words.each do |word|
    puts word if !already.include?(word)
    already << word
end