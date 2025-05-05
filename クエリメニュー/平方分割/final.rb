k = gets.to_i
n = 10000
a = n.times.map { gets.to_i }

block_size = Math.sqrt(n).to_i
block_count = (n.to_f / block_size).ceil

block_max = Array.new(block_count, -Float::INFINITY)

n.times do |i|
    idx = i / block_size
    block_max[idx] = [a[i], block_max[idx]].max
end

k.times do
    l, r = gets.split.map { |num| num.to_i - 1 }
    max_num = -Float::INFINITY

    while l <= r
        if l % block_size == 0 && l + block_size <= r
            max_num = [max_num, block_max[l / block_size]].max
            l += block_size
        else
            max_num = [max_num, a[l]].max
            l += 1
        end
    end

    puts max_num
end
