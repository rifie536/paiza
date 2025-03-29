n = gets.to_i
array = Array.new(n)
n.times do |i|
    array[i] = "paiza"
end

puts array.join(" ")