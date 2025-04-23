class Guest
    attr_accessor :total, :orders

    def initialize
        @total = 0
        @orders = []
    end

    def order(kind, price)
        if kind != "alcohol"
            @total += price
        end
    end

end

class Over_20_guest < Guest

    def order(kind, price)
        @orders << kind
        if @orders.include?("alcohol") && kind == "food"
            @total += price - 200
        else
            @total += price
        end
    end
end

n ,k = gets.split.map(&:to_i)
guests = []
n.times do
    a = gets.to_i
    if a < 20
        guests << Guest.new()
    else
        guests << Over_20_guest.new()
    end
end

k.times do
    order = gets.chomp.split
    num = order[0].to_i
    kind = order[1]
    price = order[2].to_i
    guests[num - 1].order(kind, price)
end

guests.each { |guest| puts guest.total }