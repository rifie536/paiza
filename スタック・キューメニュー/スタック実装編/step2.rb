q = gets.to_i
arr = []
q.times do
    query = gets.split
    if query[0].to_i == 1
       arr.push(query[1])
   else
       puts arr.pop
   end
   puts arr.join(' ')
end