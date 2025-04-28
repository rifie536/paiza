n, k = gets.split.map(&:to_i)
a = n.times.map { gets.to_i }
k.times do
    s = gets.chomp
    case s
    when "pop"
        a.shift
    when "show"
        puts a
    end
end