q = gets.to_i
nums = []
q.times do
    query = gets.split.map(&:to_i)
    if query[0] == 1
       nums.push(query[1])
   else
       nums.pop
   end
   puts nums.join(' ')
end