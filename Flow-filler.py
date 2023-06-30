def get_variable_types():
  """Gets the variable types from the user."""
  variable_types = []
  while True:
    variable_type = input("Enter the variable type (int, float, str, bool): ")
    if variable_type in ["int", "float", "str", "bool"]:
      variable_types.append(variable_type)
    else:
      print("Invalid variable type.")
      continue
    if input("Do you want to add another variable type? (y/n): ") == "n":
      break
  return variable_types

def get_variable_values(variable_types):
  """Gets the variable values from the user."""
  variable_values = []
  for variable_type in variable_types:
    variable_value = input(f"Enter the value for the {variable_type} variable: ")
    variable_values.append(variable_value)
  return variable_values

def populate_flowchart(variable_types, variable_values):
  """Populates the flowchart with the variable types and values."""
  flowchart = []
  for i in range(len(variable_types)):
    variable_type = variable_types[i]
    variable_value = variable_values[i]
    flowchart.append(f"{variable_type}: {variable_value}")
  return flowchart

def main():
  """The main function."""
  variable_types = get_variable_types()
  variable_values = get_variable_values(variable_types)
  flowchart = populate_flowchart(variable_types, variable_values)
  print(flowchart)

if __name__ == "__main__":
  main()

