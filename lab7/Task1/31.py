n = int(input())
s = str(input())
a = s.split(" ")
cnt = 0

for i in range(len(a)):
    if int(a[i]) > 0:
        cnt += 1
        
print(cnt)