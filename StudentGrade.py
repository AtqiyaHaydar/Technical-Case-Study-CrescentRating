# Name : Atqiya Haydar Luqman
# Email : 13522163@std.stei.itb.ac.id

# Script for showing up the name and value in the class

class StudentGrade:
  def __init__(self, name, score):
    self.name = name
    self.score = score
  
  def get_generated_description(self):
    if self.score < 0 or self.score > 100:
      return "Nilai Invalid"
    elif 80 <= self.score <= 100:
        grade = "A"
    elif 65 <= self.score <= 79:
        grade = "B"
    elif 50 <= self.score <= 64:
        grade = "C"
    elif 35 <= self.score <= 49:
        grade = "D"
    elif 1 <= self.score <= 34:
        grade = "E"
    else:
        return "Nilai Invalid"

    return f"Nilai {self.name} mendapatkan nilai {grade}"

name = input("Enter student name: ")
score = int(input("Enter student grade: "))

student = StudentGrade(name, score)
print(student.get_generated_description())

# Usage
# python3 StudentGrade.py