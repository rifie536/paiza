n, a, b = gets.split.map(&:to_i)

dp = []
dp[0] = 0
dp[1] = a

for i in 2..n
    dp[i] = 0
    dp[i] = [(dp[i - 1] + a), (dp[i - 2] + b)].min
end

p dp[n]