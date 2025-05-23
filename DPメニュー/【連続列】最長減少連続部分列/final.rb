n = gets.to_i
a = n.times.map { gets.to_i }

dp = Array.new(n, 1)

for i in 1...n
    if a[i - 1] >= a[i]
        dp[i] = dp[i - 1] + 1
    else
        dp[i] = 1
    end
end

puts dp.max