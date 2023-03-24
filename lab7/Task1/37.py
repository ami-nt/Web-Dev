s = str(input())
a = s.split(" ")

def xor(x, y):
    return x ^ y

print(xor(int(a[0]), int(a[1])))