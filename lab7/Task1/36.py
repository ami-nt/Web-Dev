s = str(input())
a = s.split(" ")
def power(a, n):
    if n == 0:
        return 1
    else: 
        pow = 1
        while n != 0:
            pow *= a
            n -= 1
        
    return pow

print(power(int(a[0]), int(a[1])))