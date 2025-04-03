s = gets.chomp.to_s
hm = s.split(':').map(&:to_i)
hm[1] += 30
if hm[1] >= 60
    hm[0] += 1
    hm[1] -= 60
end

hm = '%02d:%02d' % hm

puts hm