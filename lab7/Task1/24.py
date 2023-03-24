import math
n = int(input())
m = 1

while m != n + 1:
    if math.sqrt(m) == int(math.sqrt(m)):
        print(m)
        
    m += 1
    
    
    