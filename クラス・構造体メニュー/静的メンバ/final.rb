class Guest
    attr_accessor :total
    
    def initialize
        @total = 0
    end
    
    def self.count
        @@count
    end
    
    def self.reduce_count(num)
        @@count -= num
    end
        
    
    def order(kind, price)
        if kind != "alcohol"
            @total += price
        end
    end
end

class Adult < Guest
    attr_accessor :orders
    
    def initialize
        super
        @orders = []
    end
    
    def order(kind, price)
        @orders << kind
        if @orders.include?("alcohol") && kind == "food"
            @total += price - 200
        else
            @total += price
        end
    end
end

n, k = gets.split.map(&:to_i)
guests = []

n.times do
    a = gets.to_i
    if a < 20
        guests << Guest.new()
    else
        guests << Adult.new()
    end
end

leaving_count = 0
k.times do
    order = gets.chomp.split
    num = order[0].to_i
    if order[1] == "0"
        order[1] = "alcohol"
        order[2] = 500
    elsif order[1] == "A"
        puts guests[num - 1].total
        leaving_count += 1
        next
    end
    kind = order[1]
    price = order[2].to_i
    guests[num - 1].order(kind, price)
end

puts leaving_count