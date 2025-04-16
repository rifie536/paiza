array = [4, 0, 5, -1, 3, 10, 6, -8]
over_five = array.select{ |num| num >= 5 }
puts over_five.sum