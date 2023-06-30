import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static List<String> getVariableTypes() {
        List<String> variableTypes = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("Enter the variable type (int, float, str, bool): ");
            String variableType = scanner.nextLine();
            if (variableType.equals("int") || variableType.equals("float") || variableType.equals("str") || variableType.equals("bool")) {
                variableTypes.add(variableType);
            } else {
                System.out.println("Invalid variable type.");
                continue;
            }
            System.out.println("Do you want to add another variable type? (y/n): ");
            if (scanner.nextLine().equals("n")) {
                break;
            }
        }
        return variableTypes;
    }

    public static List<String> getVariableValues(List<String> variableTypes) {
        List<String> variableValues = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        for (String variableType : variableTypes) {
            System.out.printf("Enter the value for the %s variable: \n", variableType);
            String variableValue = scanner.nextLine();
            variableValues.add(variableValue);
        }
        return variableValues;
    }

    public static List<String> populateFlowchart(List<String> variableTypes, List<String> variableValues) {
        List<String> flowchart = new ArrayList<>();
        for (int i = 0; i < variableTypes.size(); i++) {
            String variableType = variableTypes.get(i);
            String variableValue = variableValues.get(i);
            flowchart.add(variableType + ": " + variableValue);
        }
        return flowchart;
    }

    public static void main(String[] args) {
        List<String> variableTypes = getVariableTypes();
        List<String> variableValues = getVariableValues(variableTypes);
        List<String> flowchart = populateFlowchart(variableTypes, variableValues);
        System.out.println(flowchart);
    }
}

