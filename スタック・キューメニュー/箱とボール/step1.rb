q = gets.to_i
que1 = []
que2 = []

q.times do
    query = gets.split.map(&:to_i)
    if query[0] == 1
        que1.push(query[2]) if query[1] == 1
        que2.push(query[2]) if query[1] == 2
    elsif query[0] == 2
        puts que1.shift if query[1] == 1
        puts que2.shift if query[1] == 2
    else
        puts [que1.size, que2.size].join(' ')
    end
end
