n, m, k = gets.split(' ').map(&:to_i)
a = []
n.times do |i|
    a[i] = gets.split(' ').map(&:to_i)
    count = 0
    a[i].each do |num|
        if num == k
            count += 1
        end
    end
    puts count
end