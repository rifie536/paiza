n = gets.to_i
a = n.times.map { gets.to_i }

dp = Array.new(n, 1)

for i in 1...n
    for j in 0...i
        if a[j] < a[i]
            dp[i] = [dp[i], dp[j] + 1].max
        end
    end
end

puts dp.max