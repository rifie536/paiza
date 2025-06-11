words = gets.chomp.split
word_count = {}
words.each do |word|
    word = word.to_sym
    if word_count.has_key?(word)
        word_count[word] += 1
    else
        word_count[word] = 1
    end
end

word_count.each do |word|
    puts "#{word[0]} #{word[1]}"
end