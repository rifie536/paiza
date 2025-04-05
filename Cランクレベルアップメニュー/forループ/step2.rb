n = gets.to_i
n.times do |i|
    a = gets.to_i
    if a == 7
        return puts "YES"
    elsif i == n - 1
        puts "NO"
    end
end