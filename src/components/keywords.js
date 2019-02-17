const keywords = {
    "C++": {
        "boolean": {
            "keyword": "bool",
            "definition": "True/false."
        },
        "byte": {
            "keyword": "byte",
            "definition": "A number from -256 to 255."
        },
        "char": {
            "keyword": "char",
            "definition": "A unicode character"
        },
        "short": {
            "keyword": "short int",
            "definition": "A number from -32,768 to 32,767."
        },
        "int": {
            "keyword": "int",
            "definition": "A number from -32,768 to 32,767."
        },
        "float": {
            "keyword": "float",
            "definition": "A number between ±3.40282347E+38F."
        },
        "long": {
            "keyword": "long",
            "definition": "A number from -2,147,483,648 to 2,147,483,647."
        },
        "double": {
            "keyword": "double",
            "definition": "A number between ±1.79769313486231570E+308."
        },
        "print": {
            "keyword": "cout << <text>",
            "definition": "Displays text on a screen."
        },
        "if": {
            "keyword": "if (condition)",
            "defintion": "Conditional that if true, will execute a function or displays text."
        },
        "elseif": {
            "keyword": "else if (condition)",
            "defintion": "Conditional that if the if statement returns false, will execute a function or displays text."
        },
        "else": {
            "keyword": "else",
            "defintion": "Conditional that if the if statement and any else if statements return false, will execute a function or displays text."
        },
        "for": {
            "keyword": "for (<iterator>, <condition>, <incrementor>)",
            "definition": "Statement that allows iteration so that a piece of code is continuously executed."
        },
        "while": {
            "keyword": "while (condition)",
            "definition": "Statement that continuously executes based a on a boolean condition."
        },
        "dowhile": {
            "keyword": "do <statement> while(condition)",
            "definition": "Statement that runs before checking that a condition is valid."
        },
        "foreach": {
            "keyword": "for (incrementor : <enumerable object>)",
            "definition": "Statement iterates over the entire enumerable object."
        },
        "function": {
            "keyword": "<access modifier> <return type> <function name>(<parameters>)",
            "definition": "A group of statements that together perform a task."
        },
        "class": {
            "keyword": "class <class Name>",
            "definition": "A data type that can hold its own members."
        }
    },
    "Java": {
        "boolean": {
            "keyword": "boolean",
            "definition": "True/false."
        },
        "byte": {
            "keyword": "byte",
            "definition": "A number from -256 to 255."
        },
        "char": {
            "keyword": "char",
            "definition": "A unicode character"
        },
        "short": {
            "keyword": "short",
            "definition": "A number from -32,768 to 32,767."
        },
        "int": {
            "keyword": "int",
            "definition": "A number from -2,147,483,648 to 2,147,483,647."
        },
        "float": {
            "keyword": "float",
            "definition": "A number between ±3.40282347E+38F."
        },
        "long": {
            "keyword": "long",
            "definition": "A number from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,80"
        },
        "double": {
            "keyword": "double",
            "definition": "A number between ±1.79769313486231570E+308"
        },
        "print": {
            "keyword": "System.out.println(<text>)",
            "definition": "Displays text on a screen."
        },
        "if": {
            "keyword": "if (condition)",
            "defintion": "Conditional that if true, will execute a function or displays text."
        },
        "elseif": {
            "keyword": "else if (condition)",
            "defintion": "Conditional that if the if statement returns false, will execute a function or displays text."
        },
        "else": {
            "keyword": "else",
            "defintion": "Conditional that if the if statement and any else if statements return false, will execute a function or displays text."
        },
        "for": {
            "keyword": "for (<iterator>, <condition>, <incrementor>)",
            "definition": "Statement that allows iteration so that a piece of code is continuously executed."
        },
        "while": {
            "keyword": "while (condition)",
            "definition": "Statement that continuously executes based a on a boolean condition."
        },
        "dowhile": {
            "keyword": "do <statement> while(condition);",
            "definition": "Statement that runs before checking that a condition is valid."
        },
        "foreach": {
            "keyword": "for (incrementor : <enumerable object>)",
            "definition": "Statement iterates over the entire enumerable object."
        },
        "function": {
            "keyword": "<access modifier> <return type> <function name>(<parameters>)",
            "definition": "A group of statements that together perform a task."
        },
        "class": {
            "keyword": "class <class Name>",
            "definition": "A data type that can hold its own members."
        }
    }
}

export {keywords};