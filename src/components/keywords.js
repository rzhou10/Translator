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
        "character": {
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
        "character": {
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
    },
    "C#": {
        "boolean": {
            "keyword": "bool",
            "definition": "True/false."
        },
        "byte": {
            "keyword": "byte",
            "definition": "A number from 0 to 255."
        },
        "character": {
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
            "definition": "A number from ±1.5 x 10−45 to ±3.40282347E+38F."
        },
        "long": {
            "keyword": "long",
            "definition": "A number from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,80"
        },
        "double": {
            "keyword": "double",
            "definition": "A number from ±5.0 × 10−324 to ±1.79769313486231570E+308"
        },
        "print": {
            "keyword": "Console.WriteLine(<text>)",
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
            "keyword": "foreach (incrementor in <enumerable object>)",
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
    "JavaScript": {
        "boolean": {
            "keyword": "JavaScript is dynamically typed, so use var, let, const.",
            "definition": "True/false."
        },
        "byte": {
            "keyword": "JavaScript is dynamically typed, so use var, let, const.",
            "definition": "A number from 0 to 255."
        },
        "character": {
            "keyword": "JavaScript is dynamically typed, so use var, let, const.",
            "definition": "A unicode character"
        },
        "short": {
            "keyword": "JavaScript is dynamically typed, so use var, let, const.",
            "definition": "A number from -32,768 to 32,767."
        },
        "int": {
            "keyword": "JavaScript is dynamically typed, so use var, let, const.",
            "definition": "A number from -2,147,483,648 to 2,147,483,647."
        },
        "float": {
            "keyword": "JavaScript is dynamically typed, so use var, let, const.",
            "definition": "A number from ±1.5 x 10−45 to ±3.40282347E+38F."
        },
        "long": {
            "keyword": "JavaScript is dynamically typed, so use var, let, const.",
            "definition": "A number from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,80"
        },
        "double": {
            "keyword": "JavaScript is dynamically typed, so use var, let, const.",
            "definition": "A number from ±5.0 × 10−324 to ±1.79769313486231570E+308"
        },
        "print": {
            "keyword": "console.log(<text>)",
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
            "keyword": "for (incrementor of <enumerable object>)",
            "definition": "Statement iterates over the entire enumerable object."
        },
        "function": {
            "keyword": "<function name>(<parameters>)",
            "definition": "A group of statements that together perform a task."
        },
        "class": {
            "keyword": "class <class Name>",
            "definition": "A data type that can hold its own members."
        }
    },
    "Python": {
        "boolean": {
            "keyword": "Python is dynamically typed so there is no need to declare the data type.",
            "definition": "True/false."
        },
        "byte": {
            "keyword": "Python is dynamically typed so there is no need to declare the data type.",
            "definition": "A number from -256 to 255."
        },
 
        "char": {
            "keyword": "Python is dynamically typed so there is no need to declare the data type.",
            "definition": "A unicode character."
        },
        "short": {
            "keyword": "Python does not have a short declaration but you can use short integers in arrays via a=array(\"h\")",
            "definition": "A number from -32,768 to 32,767."
        },
        "int": {
            "keyword": "Python is dynamically typed so there is no need to declare the data type.",
            "definition": "A number from -2,147,483,648 to 2,147,483,647."
        },
        "float": {
            "keyword": "Python is dynamically typed so there is no need to declare the data type.",
            "definition": "A number between ±3.40282347E+38F."
        },
        "long": {
            "keyword": "Python is dynamically typed so there is no need to declare the data type.",
            "definition": "A number from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,80"
        },
        "double": {
            "keyword": "Python is dynamically typed so there is no need to declare the data type.",
            "definition": "A number between ±1.79769313486231570E+308"
        },
        "print": {
            "keyword": "print(<text>)",
            "definition": "Displays text on a screen."
        },
        "if": {
            "keyword": "if condition:",
            "defintion": "Conditional that if true, will execute a function or displays text."
        },
        "elseif": {
            "keyword": "elif condition:",
            "defintion": "Conditional that if the if statement returns false, will execute a function or displays text."
        },
        "else": {
            "keyword": "else",
            "defintion": "Conditional that if the if statement and any else if statements return false, will execute a function or displays text."
        },
        "for": {
            "keyword": "for <iterator>, <condition>:",
            "definition": "Statement that allows iteration so that a piece of code is continuously executed."
        },
        "while": {
            "keyword": "while condition:",
            "definition": "Statement that continuously executes based a on a boolean condition."
        },
        "dowhile": {
            "keyword": "There is no built in do-while loop in Python",
            "definition": "Statement that runs before checking that a condition is valid."
        },
        "foreach": {
            "keyword": "for <iterator> in <object>",
            "definition": "Statement iterates over the entire enumerable object."
        },
        "function": {
            "keyword": "def <function name>(<parameters>):",
            "definition": "A group of statements that together perform a task."
        },
        "class": {
            "keyword": "class <class Name>:",
            "definition": "A data type that can hold its own members."
        }
 
    }
}

export {keywords};