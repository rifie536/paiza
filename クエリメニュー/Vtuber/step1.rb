require 'set'

n, k = gets.split.map(&:to_i)

members = Set.new

n.times do
  name = gets.chomp
  members.add(name)
end

funcs = {
  "join" => ->(name) { members.add(name) },
  "leave" => ->(name) { members.delete(name) },
  "handshake" => ->() { puts members.sort }
}

k.times do
  event, *params = gets.split
  funcs[event].call(*params)
end