n = gets.to_i
gs = []
n.times { |i| gs[i] = gets.split(' ').map(&:to_i).reverse }
gs.sort.reverse.each { |pair| puts pair.reverse.join(' ') }