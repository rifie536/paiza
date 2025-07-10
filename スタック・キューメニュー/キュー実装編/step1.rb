q = gets.to_i
arr = []
q.times do
    query = gets.split.map(&:to_i)
    if query[0] == 1
       arr.push(query[1])
    else
       arr.shift
    end

    puts arr.join(' ')
end