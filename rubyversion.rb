puts "hi"

x = 1000000000
start_time = Time.now

for i in 0..x
  if i == x
    puts "one billion reached"
  end
end

end_time = Time.now
elapsed = end_time - start_time
puts "For Loop Time: #{elapsed} seconds"

# Since Ruby is synchronous and does not have a direct equivalent to JavaScript's setTimeout, 
# we can simulate a delay using sleep.
sleep(7)
puts "Second hi"

puts "third hi"
