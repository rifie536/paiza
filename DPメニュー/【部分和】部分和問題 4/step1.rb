n, x = gets.split.map(&:to_i)
a = n.times.map { gets.to_i }

dp = Array.new(x + 1, false)
dp[0] = true

for i in 0...n
    for j in (a[i]..x).to_a.reverse
        if dp[j - a[i]]
            dp[j] = true
        end
    end
end

if dp[x]
    puts "yes"
else
    puts "no"
end