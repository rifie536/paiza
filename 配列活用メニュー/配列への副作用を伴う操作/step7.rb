for i in 1..9
    tmp = []
    for j in 1..9
        tmp << i * j
    end
    puts tmp.join(' ')
end