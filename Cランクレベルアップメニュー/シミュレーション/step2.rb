n = gets.to_i
paiza = 1
kyoko = 1
a, b = gets.split(' ').map(&:to_i)
count = 0
while true
    count += 1
    kyoko += paiza * a
    paiza += kyoko % b
    return puts count if n < kyoko
end