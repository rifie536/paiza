n, x = gets.split.map(&:to_i)
a = n.times.map { gets.to_i }

dp = Array.new(x + 1, Float::INFINITY)
dp[0] = 0

for i in 0...n
    for j in (a[i]..x).to_a.reverse
        if dp[j - a[i]] != Float::INFINITY
            dp[j] = [dp[j], dp[j - a[i]] + 1].min
        end
    end
end

if dp[x] == Float::INFINITY
    puts -1
else
    puts dp[x]
end