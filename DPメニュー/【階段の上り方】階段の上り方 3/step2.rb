n, a, b = gets.split.map(&:to_i)

dp = Array.new(n + 1, 0)

dp[0] = 1

for i in 1..n
    dp[i] = 0

    if i >= a
        dp[i] += dp[i - a]
    end

    if i >= b
        dp[i] += dp[i - b]
    end
end

puts dp[n]