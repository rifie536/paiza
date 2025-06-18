words = gets.chomp.split
word_count = {}
words.each do |word|
    word = word.to_sym
    word_count.has_key?(word) ? word_count[word] += 1 : word_count[word] = 1
end

word_count.each do |word, count|
    puts "#{word} #{count}"
end