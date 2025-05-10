N, M = gets.split.map(&:to_i)

P = gets.to_i
K = gets.split.map(&:to_i)

M.times do
  w = gets.to_i
  ans = -100000

  P.times do |i|
    if K[i] % N == 0
      if (K[i] - w).abs <= (ans - w).abs
        ans = K[i]
      end
    end
  end

  puts ans
end