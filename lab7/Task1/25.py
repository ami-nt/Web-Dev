n = int(input())
m = 2

while m != n + 1:
    if n % m == 0:
        print(int(m))
        break
    m += 1