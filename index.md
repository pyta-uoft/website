% PyTA Help Documentation

This is some welcome text.

## Pylint errors {#pylint}

### R0101: Too many nested blocks {#R0101}

This error occurs when you have more than three nested blocks in your code.
This type of nesting is a sign that your function is too complex,
and should be broken down using helper functions.

Note: the nested block doesn't doesn't include function or class definition
as a block, so the example below is considered to have *four* nested blocks,
not five.

```python
def my_f(num):
    if num > 0:
        if num > 3:
            if num > 10:
                if num < 50:
                    print(num)
    else:
        print('done')
```

### R0102: Simplifiable if statement {#R0102}

This error occurs when you have an if statement that can be simplified
simply by using the value of the condition, rather than putting in extra
`True` and `False` literals.

```python
def is_even(num):
    """Return whether <num> is even or odd."""
    if num % 2 == 0:
        return True
    else:
        return False
```

The above example can be simplified to:

```python
def is_even(num):
    """Return whether <num> is even or odd."""
    return num % 2 == 0
```


### C0111: Missing docstring {#C0111}

This is some helpful description of the C0111 error.


### R0204: Redefined variable type {#R0204}

This error occurs when the type of a variable changes inside a method or a 
function. See the examples below.

```python
def obvious_variable_redefinition(arg):
    """Redefinition of <variable-name> type from <type_1> to <type_2>"""
    arg = 1
    arg = "string"  # redefined variable type

def other_redefinition_example(arg):
    """Redefinition of <variable-name> type from <type_1> to <type_2>"""
    if arg == 3:
        var = "8"
    else:
        var = 8  # redefined variable type
```


### E0401: Import error {#E0401}

The module is unable to be imported. Check the spelling of the module name, or
whether the module is in the correct directory.

```python
import missing_module  # this module does not exist.
```

There are other forms of import statements that may cause this error, for
example:

```python
import missing_module as foo  # this module does not exist.
```


### W0406: Import self {#W0406}

A module should not import itself. So for example, if the module is named 
`W0406_import_self` you cannot import it as follows:

```python
import W0406_import_self  # importing the same name as the module
```


### W0404: Reimported {#W0404}

A module should not be imported more than once.

```python
import math
import math  # importing a module twice
```


### W0401: Wildcard import {#W0401}

Only import what you need. Wildcard imports (shown below) are generally 
discouraged because they add all the functions from the imported module into the
global namespace. Problems can occur when identical names conflict.

```python
from valid_module import *
```

Rather than importing everything with wildcard '*', try importing specific
functions for example:

```python
from module_name import certain_definition
```

Or, if you need to import many functions, import them the following way, to
keep them separated in the namespace by module name. Then you can use the
function like, module_name.function_name

```python
import module_name
```

Or, you can create an alias for module names in the way below. Which can be
used like: dino.function_name

```python
import tyrannosaurus_rex as dino
```


### C0411: Wrong import order {#C0411}

Used when PEP8 import order is not respected (do the standard imports first,
then third-party libraries, then local imports)

```python
import your_own_module  # your own modules should be imported last.
import sys  # "standard modules" should be imported first
```


### C0413: Wrong import position {#C0413}

Imports should be placed at the top of the module above any other code 
(below the docstring).

```python
my_list = ['a', 'b']
import math  # this import should be at the top.
```


### C0412: Ungrouped imports {#C0412}

Imports should be grouped by packages.

```python
from sys import byteorder  # same packages should be grouped
from math import floor
from sys import stdin  # same packages should be grouped
```

Logically group the imports by same package name:

```python
from sys import byteorder  # same packages should be grouped
from sys import stdin  # same packages should be grouped
from math import floor
```


### C0410: Multiple imports {#C0410}

Don't import multiple modules on one line.

```python
import sys, math
```

Do this instead:

```python
import sys
import math
```

Although, note that you can import multiple functions on a line, when they are
from the same module, for example:

```python
from sys import byteorder, stdin
```


### W1503: Redundant unittest assert {#W1503}

The first argument of assertTrue and assertFalse is a "condition", which should
evaluate to True or False. If the condition is a constant value, then it is
considered to always be True, since it cannot be anything different.

The warning message looks like:
Redundant use of (assertTrue or assertFalse) with constant value <your-constant>

```python
import unittest

class TestStringMethods(unittest.TestCase):
    """Simple tests for example purposes."""

    def test_isupper(self):
        """Simple tests for example purposes."""

        # Valid:
        self.assertTrue('FOO'.isupper())
        self.assertFalse('bar'.isupper())

        # If a constant is passed as parameter, that condition is always true:
        self.assertTrue('YES')
        self.assertTrue(1)
        self.assertTrue(True)
        self.assertTrue(False)
```


### R0913: Too many arguments {#R0913}

When a function or method is defined with too many arguments.

```python
def foo_bar(arg1, arg2, arg3, arg4, arg5, arg6):
    """I have too many arguments"""
    pass
```


### R0912: Too many branches {#R0912}

Used when a function or method has too many branches, making it hard to follow.

```python
def lots_of_branches(arg):
    """Example to demonstrate max branching."""
    if arg == 1:
        pass
    elif arg == 2:
        pass
    elif arg == 3:
        pass
    elif arg == 4:
        pass
    elif arg == 5:
        pass
    elif arg == 6:
        pass
    elif arg == 7:
        pass
    elif arg == 8:
        pass
    elif arg == 9:
        pass
    elif arg == 10:
        pass
    elif arg == 11:
        pass
    elif arg == 12:
        pass
    elif arg == 13:
        pass

```


### R0902: Too many instance attributes {#R0902}

Used when class has too many instance attributes, try to reduce this to get a
simpler (and so easier to use) class.

```python
class MyClass(object):
    """Example with too many instance attributes.
    """

    def __init__(self):
        """
        The are all instance attributes
        """
        self.animal = "Dog"  # These are instance attributes...
        self.bread = "Sourdough"
        self.liquid = "Water"
        self.colour = "Black"
        self.shape = "Circle"
        self.direction = "Up"
        self.clothing = "Shirt"
        self.number = 3
```

One solution is to logically decompose into more classes, each with fewer 
instance attributes. Then we can use composition to access those attributes in 
another class.

```python
class Edible(object):
    """Example with fewer instance attributes.
    """

    def __init__(self):
        """Below are the instance attributes:
        """
        self.bread = "Sourdough"
        self.liquid = "Water"


class Ownership(object):
    """Example with fewer instance attributes.
    """

    def __init__(self):
        """Below are the instance attributes:
        """
        self.animal = "Dog"
        self.clothing = "Shirt"


class Description(object):
    """Example with fewer instance attributes.
    """

    def __init__(self):
        """Below are the instance attributes:
        """
        self.colour = "Black"
        self.shape = "Circle"
        self.direction = "Up"
        self.number = 3


class Composition(object):
    """Example showing composition of other classes into instance attributes.
    """

    def __init__(self):
        """Construct instance attributes. For example, 
        self.ownership.animal is "Dog"
        """
        self.edible = Edible()
        self.ownership = Ownership()
        self.description = Description()
```


### R0914: Too many locals {#R0914}

Used when a function or method has too many local variables.

```python
def too_many_locals():
    """Example function that has to many local variables."""
    local_variable_1 = 1
    local_variable_2 = 2
    local_variable_3 = 3
    local_variable_4 = 4
    local_variable_5 = 5
    local_variable_6 = 6
    local_variable_7 = 7
    local_variable_8 = 8
    local_variable_9 = 9
    local_variable_10 = 10
    local_variable_11 = 11
    local_variable_12 = 12
    local_variable_13 = 13
    local_variable_14 = 14
    local_variable_15 = 15
    local_variable_16 = 16
```


### R0915: Too many statements {#R0915}

Used when a function or method has too many statements. You should then split it
in smaller functions / methods.

Note: comments do not count as statements

```python
def too_many_statements(arg):
    """There are too many statements in this function."""
    statement_1 = 1
    statement_2 = 2
    statement_3 = 3
    statement_4 = 4
    statement_5 = 5
    statement_6 = 6
    statement_7 = 7
    statement_8 = 8
    statement_9 = 9
    statement_10 = 10
    statement_11 = 11
    statement_12 = 12

    iter("function calls are statements too")
    iter("function calls are statements too")
    iter("function calls are statements too")
    iter("function calls are statements too")
    iter("function calls are statements too")
    len("function calls are statements too")
    len("function calls are statements too")
    len("function calls are statements too")
    len("function calls are statements too")
    len("function calls are statements too")
    object("function calls are statements too")
    object("function calls are statements too")
    object("function calls are statements too")
    object("function calls are statements too")
    object("function calls are statements too")
    print("function calls are statements too")
    print("function calls are statements too")
    print("function calls are statements too")
    print("function calls are statements too")
    print("function calls are statements too")
    type("function calls are statements too")
    type("function calls are statements too")
    type("function calls are statements too")
    type("function calls are statements too")
    type("function calls are statements too")
    slice("function calls are statements too")
    slice("function calls are statements too")
    slice("function calls are statements too")
    slice("function calls are statements too")
    slice("function calls are statements too")
    tuple("function calls are statements too")
    tuple("function calls are statements too")
    tuple("function calls are statements too")
    tuple("function calls are statements too")
    tuple("function calls are statements too")

    if arg:
        statments = "This block (including condition) counts as 2 statements."
    else:
        statments = "This block counts as 1 statement since" + \
                    "the 'else' and strings on multiple lines" + \
                    "are not counted towards the statement count."
```


## Custom errors {#custom}

### E9999: Forbidden imports {#E9999}

For your work in CSC148, we expect you to use only the Python language
features we have covered in lectures, or ones that we have explicitly
mentioned for an exercise/lab/assignment. If you are getting this error,
please check your code carefully.

```python
import copy   # Error on this line

x = [1, 2, 3]
y = copy.copy(x)
```
