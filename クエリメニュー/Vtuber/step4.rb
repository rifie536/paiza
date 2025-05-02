n, k = gets.split.map(&:to_i)
departments = {}
n.times do
    department = gets.chomp
    departments[department] = []
end

k.times do
    department, *purchase = gets.split
    departments[department].push(purchase)
end

departments.each do |department, purchases|
    puts department
    puts purchases.map { |purchase| purchase.join(' ') }
    puts "-----"
end