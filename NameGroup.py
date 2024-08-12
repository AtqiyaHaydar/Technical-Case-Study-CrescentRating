# Name : Atqiya Haydar Luqman
# Email : ashford1524@gmail.com

# Script for displaying the name in what group

class NameGroup:
  def __init__(self, name):
    self.name = name.lower() # Convert the name to lowercase for consistency
  
  def get_group_by_name(self):
    if self.name[0] in ('a', 'b', 'c', 'd'):
      print("In a first group")
    elif self.name[0] in ('e', 'f', 'g', 'h', 'i'):
      print("In a second group")
    else:
      print("In a last group")

name = input("Enter name: ")

person = NameGroup(name)
person.get_group_by_name()

# Usage
# python3 NameGroup.py