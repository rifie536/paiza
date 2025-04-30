n, k, paiza_height = gets.split.map(&:to_i)
heights = [paiza_height]
n.times { heights << gets.to_i }
current = heights.sort.index(paiza_height) + 1

k.times do
    *event = gets.split
    case event[0]
    when "join"
        current += 1 if event[1].to_i < paiza_height
        heights << event[1].to_i
    when "sorting"
        # heights.sort!
        puts current
    end
end