n, k, m = gets.chomp.split.map(&:to_i)

word_list = k.times.map { gets.chomp }
statements = m.times.map { gets.chomp }

remaining_players = (1..n).to_a
used_words = []
last_char = nil
current_player_index = 0

statements.each_with_index do |statement, turn|
  current_player = remaining_players[current_player_index]
  rule_broken = false

  unless word_list.include?(statement)
    rule_broken = true
  end

  if !rule_broken && last_char && statement[0] != last_char
    rule_broken = true
  end

  if !rule_broken && used_words.include?(statement)
    rule_broken = true
  end

  if !rule_broken && statement[-1] == 'z'
    rule_broken = true
  end

  if rule_broken
    remaining_players.delete_at(current_player_index)

    if current_player_index >= remaining_players.length
      current_player_index = 0
    end

    last_char = nil
  else
    used_words << statement
    last_char = statement[-1]

    current_player_index = (current_player_index + 1) % remaining_players.length
  end
end

puts remaining_players.length
puts remaining_players