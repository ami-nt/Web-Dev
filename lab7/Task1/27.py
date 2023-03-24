n = int(input())
m = 1

while m < n + 1:
    if m == n:
        print("YES")
        exit()
    m *= 2
    
print("NO")