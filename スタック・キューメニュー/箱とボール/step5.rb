def count_people_on_escalator(n, k, arrival_times)
    results = []
    current_count = 0
    exit_queue = []

    arrival_times.each do |current_time|
      while !exit_queue.empty? && exit_queue.first <= current_time
        exit_queue.shift
        current_count -= 1
      end

      current_count += 1
      exit_time = current_time + k

      exit_queue << exit_time

      results << current_count
    end

    results
  end

  n, k = gets.split.map(&:to_i)
  a = gets.split.map(&:to_i)
  puts count_people_on_escalator(n, k, a)