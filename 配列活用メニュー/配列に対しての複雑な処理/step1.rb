n = gets.to_i
m = gets.split.map(&:to_i)
arr = n.times.map { gets.split.map(&:to_i) }
sum_arr = []

arr.each do |a|
    a.size.times do |i|
        a[i] *= m[i]
    end
    sum_arr << a.sum
end

puts sum_arr.max