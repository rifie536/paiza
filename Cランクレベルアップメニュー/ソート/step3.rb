n = gets.to_i
ab = []
n.times { |i| ab[i] = gets.split(' ').map(&:to_i) }
ab.sort.reverse.each { |pair| puts pair.join(' ') }