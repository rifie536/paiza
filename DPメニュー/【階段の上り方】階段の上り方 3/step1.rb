n = gets.to_i
dp = [1]
for i in 1..n
    dp[i] = 0
    if i >= 1
        dp[i] = dp[i] + dp[i - 1]
    end
    if i >= 2
        dp[i] = dp[i] + dp[i - 2]
    end
end

puts dp[n]