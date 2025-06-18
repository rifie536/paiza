words = gets.chomp.split
kinds = []
already = []
words.each do |word|
    if !already.include?(word)
        kinds << word
        already << word
    end
end

puts kinds
kinds.each do |word|
    puts words.count(word)
end