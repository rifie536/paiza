n, k = gets.split.map(&:to_i)
members = n.times.map { gets.chomp }

pic_array = []
k.times do
    year, name = gets.split
    pic_array << [year.to_i, name]
end

pic_array.sort.each do |pic|
    puts pic[1]
end