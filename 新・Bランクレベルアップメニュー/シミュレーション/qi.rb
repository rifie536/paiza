n, x, k = gets.split.map(&:to_i);

if k % 4 == 3
    puts 2 * x * ((k - 4 * n) / 4).floor + x;
else
    puts 2 * x * ((k - 4 * n) / 4).floor;
end