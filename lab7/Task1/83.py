def count_code(str):
  count = 0
  for i in range(len(str) - 3):
    if str[i:i+2] == "co" and (str[i+2] == "a" or str[i+2] == "b" or str[i+2] == "c" or str[i+2] == "d" or str[i+2] == "e" or str[i+2] == "z" or str[i+2] == "r" or str[i+2] == "p" or str[i+2] == "l") and str[i+3] == "e":
      count += 1
  return count    
