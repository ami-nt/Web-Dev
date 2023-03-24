def cat_dog(str):
  cnt = 0
  cnt1 = 0
  for i in range(len(str)):
    if str[i: i + 3] == 'cat':
      cnt = cnt + 1
    elif str[i: i + 3] == 'dog':
      cnt1 = cnt1 + 1
      
  if cnt == cnt1:
    return True
  else:
    return False
