import math
 
n = int(input())
if n == 1:
    cnt = 1
else:
    cnt = 2
 
for i in range(2, int(math.sqrt(n)) + 1):
    if n % i == 0:
        cnt += 2
 
print(cnt)