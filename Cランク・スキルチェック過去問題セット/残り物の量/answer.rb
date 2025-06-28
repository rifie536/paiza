m, sold_p, sold_q = gets.split.map(&:to_i)
sold_p = sold_p.to_f / 100
sold_q = sold_q.to_f / 100
puts m * (1 - sold_p) * (1 - sold_q)