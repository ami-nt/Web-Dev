n = int(input())
student_marks = {}
for _ in range(n):
    name, *line = input().split()
    scores = list(map(float, line))
    student_marks[name] = scores
query_name = input()
if query_name in student_marks:
    avg = sum(student_marks[query_name]) / len(scores)
    
print('{:.2f}'.format(avg))