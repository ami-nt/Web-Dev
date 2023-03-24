x = input()[::-1]
sum = 0

for i in range(len(x)):
    sum +=int(x[i]) * pow(2, i)
    
print(sum)