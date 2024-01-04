import time

print("hi")

x = 1000000000
start_time = time.time()

for i in range(x + 1):
    if i == x:
        print("one billion reached")

end_time = time.time()
elapsed = end_time - start_time
print(f"For Loop Time: {elapsed} seconds")

# Python also doesn't have an exact equivalent to JavaScript's setTimeout.
# You can use `time.sleep` to pause the execution.
time.sleep(7)
print("Second hi")

print("third hi")
