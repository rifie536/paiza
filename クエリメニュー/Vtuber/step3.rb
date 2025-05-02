n, k = gets.split.map(&:to_i)
info = {}
n.times do
    company, pass, balance = gets.split
    info[company] = { pass: pass, balance: balance.to_i }
end

k.times do
    company, pass, withdraw = gets.split
    info[company][:balance] -= withdraw.to_i if info[company][:pass] == pass
end

info.each do |company, account|
    puts "#{company} #{account[:balance]}"
end