b = gets.to_i
n = gets.to_i
a = n.times.map { gets.to_i }
a.each do | number |
    if number == b
        puts "first"
    elsif number == b - 1 || number == b + 1
        puts "adjacent"
    elsif number % 10000 == b % 10000
        puts "second"
    elsif number % 1000 == b % 1000
        puts "third"
    else
        puts "blank"
    end
end