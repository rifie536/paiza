n = gets.to_i

n.times do
    s_a = gets.split(" ")
    puts "#{s_a[0]} #{s_a[1].to_i + 1}"
end