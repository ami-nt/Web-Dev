n = int(input())
s = str(input())
a = s.split(" ")
cnt = 0

for i in range(1, len(a)-1):
    if int(a[i]) > int(a[i - 1]) and int(a[i]) > int(a[i + 1]):
        cnt += 1

    
print(cnt)