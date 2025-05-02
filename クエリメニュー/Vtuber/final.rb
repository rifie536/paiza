n = gets.to_i

superchat = {}
membership = []
n.times do
    event = gets.chomp.split
    case event[1]
    when "give"
        name = event[0]
        amount = event[2].to_i
        superchat[name] ||= 0
        superchat[name] += amount
    when "join"
        membership << event[0]
    end
end

superchat.sort_by { |name, amount| [amount, name] }.reverse.each do |name, _|
    puts name
end

membership.sort.each do |name|
    puts name
end