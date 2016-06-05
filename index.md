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


### C0111: Missing docstring {#C0111}

This is some helpful description of the C0111 error.


### C0102 Blacklisted name {#C0102}

This error occurs when a variable name is listed in the black list. The black 
list includes names:
 
 - foo
 - bar
 - baz
 - toto
 - tutu
 - tata

Students are expected to use meaningful variable names.

```python 
def pos(obj):
    """
    @type obj: int
    @rtype: bool
    """
    foo = obj
    return foo < 0
```

### C0103 Invalid Name {#C0103}

This error occurs when a name does not follow the format associated with to its type (constant, variable ...). 

- Variable/Attribute/Method/Argument: All variable/attribute/method/argument names should be of the form: a lowercase letter followed by a lowercase letter or digit. The minimum number of characters should be 2 and the maximum should be 30.

- Constant: All constant names should be of the form: an uppercase letter followed by a uppercase letter or digit.

- Class: All class names should be of the form: an uppercase letter followed by a lowercase letter or uppercase letter or digit.

A special character accepted in all types of names is '_'.

```python
def is_equal(obj):
    """
    @type obj: int
    @rtype: bool
    """
    Ex = 5
    return obj == Ex
```

### C0111 Missing Docstring {#C0111}

This error occurs when a module, function, class or method has no docstring. 
Some special methods like __init__ don't require a docstring. Students are 
expected to write docstrings for every module, function, class and method.

```python
def is_false(obj):

    return obj is False
```

### C0112 Empty Docstring {#C0112}

This error occurs when a module, function, class or method has an empty 
docstring like
```python
"""
"""``` 
Students are expected to write complete docstrings for every module, 
function, class and method.

```python
def is_false(obj):
    """
    """
    return obj is False
```

### C0113 Unneeded not {#C0113}

This error occurs when a boolean expression contains an unneeded negation. If 
you are getting this error, the expression can be simplified to not use a 
negation.

```python
def is_true():
    """
    @rtype: bool
    """
    temp = 5
    if not temp > 3:
        return False
    else:
        return True
```

The above can be modified to:

```python
def is_true():
    """
    @rtype: bool
    """
    temp = 5
    if temp <= 3:
        return False
    else:
        return True
```

### C0121 Singleton comparison {#C0121}

This is an error that occurs when an expression is compared to singleton values 
like True, False or None.

```python
def is_true():
    """
    @rtype: bool
    """
    temp = 5
    if temp == None:
        return False
    else:
        return True
```

The above can be modified to:

```python
def is_true():
    """
    @rtype: bool
    """
    temp = 5
    if temp is None:
        return False
    else:
        return True
```

### C0123 Unidiomatic type check {#C0123}

This error occurs when type() is used instead of isinstance() for a type check. 
Students are expected to use `isinstance(x, Y)` instead of `type(x) == Y`.

```python
def is_int(obj):
    """Check is the given object is of type 'int'.
    
    @type obj: object
    @rtype: bool
    """
    return type(obj) == "<type 'int'>"  # Error on this line
```

The above can be modified to:

```python
def is_int(obj):
    """Check is the given object is of type 'int'.
    
    @type obj: object
    @rtype: bool
    """
    return isinstance(obj, int)
```

### E0101 Return in init {#E0101}

This error occurs when a return statement is used in the __init__ method. 
Students should not use a return statement in the  __init__ method as it is not 
directly called by your code. Instead, it is called by the code that 
initializes objects at runtime. 

```python
class Animal:
    """An animal in the zoo.

    === Public Attributes ===
    @type name: str
    """
    def __init__(self, name):
        """
        @type self: Animal
        @type name: str
        @rtype: None
        """
        self.name = name
        return True  # Error on this line
```

### E0102 Function redefined {#E0102}

This error occurs when a function, class or method is redefined. If you are 
getting this error, you should make sure all the functions, methods and classes 
you define have different names.

```python
def pos(obj):
    """
    @type obj: int
    @rtype: bool
    """
    return obj < 0


def pos(obj):
    """
    @type obj: int
    @rtype: bool
    """
    return obj < 1
```

### E0103 Not in loop {#E0103}

This error occurs when `break` and `continue` keywords are used outside loops. 
The keyword `break` is used to exit a loop early and the keyword `continue` is 
used to skip an iteration in a loop. Hence both the keywords only belong inside 
loops.

```python
def add(lst):
    """ Calculates the sum of the elements in the given list.
    
    @type lst: list
    @rtype: int
    """
    temp = 0
    for item in lst:
        temp += item
    break  # Error on this line
    return temp
```

### E0104 Return outside function {#E0104}

This error occurs when a `return` statement is found outside a function or 
method. If you are getting this error, please check the indentation levels in 
your code carefully.

```python
def add(lst):
    """ Calculates the sum of the elements in the given list.
    
    @type lst: list
    @rtype: bool
    """
    temp = 0
    for item in lst:
        temp += item
        
return False  # Error on this line
```

### E0108 Duplicate argument name {E0108}

This error occurs if there are duplicate argument names in function 
definitions. If you are getting this error, please make sure all the arguments 
have distinct names.

```python
def add(lst, lst):
    """
    @type lst: list
    @type lst: list
    @rtype: int
    """
    temp = 0
    for item in lst:
        temp += item
    return temp
```

### W0101 Unreachable {#W0101}

This error occurs when there is some code behind a `return` or `raise` 
statement. This code will never be run.

```python
def add(lst):
    """
    @type lst: list
    @rtype: int
    """
    temp = 0
    for item in lst:
        temp += item
    return temp
    temp += 1  # Error on this line
```

### W0102 Dangerous default value {#W0102}

This error occurs when a mutable value such as a list or dictionary is given a 
default value in the function or method definition. It is dangerous to give 
mutable objects a default value only when the function/method modifies the 
argument. If you modify a default argument it will persist until the next call. 
Hence your "empty" list or dictionary will start to contain values on calls 
other than the first call.

```python
def add1(lst=[]):
    """ Adds five digits to the end of the list.

    @type lst: list
    @rtype: list
    """
    temp = 5
    for i in range(temp):
        lst.append(i)
    return lst
    
if __name__ == '__main__':
    print(add1())
    print(add1())
```

Though the output to this is be expected to be:

```[0, 1, 2, 3, 4]
[0, 1, 2, 3, 4]```

The actual output is:

```[0, 1, 2, 3, 4]
[0, 1, 2, 3, 4, 0, 1, 2, 3, 4]```

If you want to avoid this situation then, you should use `None` as a default 
value. Students should be careful when assigning a default value to mutable 
objects.

### W0104 Pointless statement {#W0104}

This error occurs when a statement doesn't have any effect. This means that 
when the code for a statement is run, nothing is executed. This may not be what was 
intended.

```python
def add(lst):
    """
    @type lst: list
    @rtype: int
    """
    temp = 0
    for item in lst:
        temp += item
    temp  # Error on this line
```

### W0107 Unnecessary pass {#W0107}

This error occurs when a `pass` statement is used that can be avoided (or has 
no effect). If you are able to remove the `pass` statement without changing the 
effect of the program, then the statement is "unnecessary" and can be avoided.

```python
def add(lst):
    """
    @type lst: list
    @rtype: int
    """
    temp = 0
    for item in lst:
        temp += item
        pass  # Error on this line
    return temp
```

In the above example, the `pass` statement is "unnecessary" as the program's 
effect is not changed if `pass` is removed.

### W0109 Duplicate key {#W0109}

This error occurs when a dictionary expression binds the same key multiple 
times.

```python
ex = {'runner1': '5km', 'runner1': '7km'}
```

### W0125 Using constant test {#W0125}

This error occurs when a conditional statement like an `if` statement uses a 
constant value for its test. This is bad as the conditional statements using a 
constant test always evaluate to the same value. In such a case, a conditional 
statement should not be used. 

```python
def is_false():
    """
    @rtype: bool
    """
    if True:
        return False
    else:
        return True
```

### W0199 Assert on tuple {#W0199}

This error occurs when an "assert" statement is called like `assert (x, y)`. 
`assert` acting on a tuple always returns true if the tuple is non-empty, and 
false if it is empty. If you want to assert that two expressions are true then, 
you should use `assert x, y` instead.

```python
def check(ex1, ex2):
    """
    @type x: int
    @type y: int
    @rtype: None
    """
    assert (ex1, ex2)  # Error on this line
```


### E0601: Used before assignment {#E0601}

This error occurs when you are using a variable before its assignment.

```python
print(a)   # Error on this line
a = 1
```

### E0602: Undefined variable {#E0602}

This error occurs when you are using a variable that has not been defined.

```python
var1 = 1

print(var1)
print(var2)   # Error on this line, var2 has not been defined yet.
```

### E0611: No name in module {#E0611}

This error occurs when you are trying to access a variable from an imported
module, but that variable name could not be found in that referenced module.

```python
""" mod1.py """   # inside of mod1 module.

__all__ = ['a', 'b']

a = 1
b = 2 #   Note: There is no variable called c.

""" mod2.py """   # inside of mod1 module.

from mod1 import *

print(mod1.a)
print(mod1.b)
print(mod1.c) # But c is used here, which has caused an error.
```

### E0632: Unbalanced tuple unpacking {E0632}

This error occurs when you have an unbalance unpacking assignment with a
sequence.

```python
def set_values(var1, var2):e

    var1 = 1
    var2 = 2
    return var1, var2

var2, var4, var5 = set_values(var1, var2)   # Error on this line. 2 on the
                                            # right side but only 3 on the
                                            # left.
```

### E0633: Unpacking non sequence {E0633}

This error occurs when the unpacked result is not a sequence. For example,
if in an unpacking assignment, the unpacked result is None, then it is not
a sequence and will raise this error.

```python
def is_none(var1, var2):
    """Return None if first parameter is None, else return both parameters."""
    if var1 is None:
        return None
    else:
        return var1, var2

result = is_none(var1, var2)   # Error on this line since function is_none
                               # might return None.
```

### W0611: Unused import {W0611}

This error occurs when you have a imported module that is unused in your code.

```python
import re   # re is unused here.

def fun():
    print("re module unused.")

fun()
```

### W0612: Unused variable {W0612}

This error occurs when you have a defined variable that is never used.

```python
def fun():
    return 1, 2

var1, var2 = fun()   # var1 is never used.
print(var1)
```

### W0613: Unused argument {W0613}

This error occurs when a function argument is never used in the function.

```python
def fun(x, y, z):
    return(x + y)

number = fun(1, 2, 3)   # 3rd argument is never used in fun.
```

### W0621: Redefined outer name {W0621}

This error occurs when you are trying to redefine a variable name that has
already been defined in the outer scope. For example, this error will occurs
when you have a local name identical to a global name. The local name takes
precedence. but it hides the global name, makes it no longer accessible.

```python
var = None   # var defined here in the outer scope/

def fun():
    var = open('/file', 'w')   # redefining var that has already been defined
                               # in the outer scope.
```

### W0622: Redefined builtin {W0622}

This error occurs when you are trying to redefine/override a built-in function.

```python
from __future__ import print_function
import builtins

def new_print(var):
    builtins.print("New print statement!")

print = new_print   # Overrides print function.
```

### W0631: Undefined loop variable {W0631}

This error occurs when a loop variable is possibly used outside the loop that
is undefined.

```python
for i in range(0, 2):   # i is undefined outside the loop.
    print(i)

print(i)   # Using loop variable i outside the loop.
```

### R0201: No self use {#R0201}

If a method (a function in a class) does not make use of the 'self' (or
first) argument, that means the function is not performing anything that
is related to the object itself. This means the function could be moved
outside of the class since none of the code inside makes use of anything
inside the class it's defined.

```python
class NoSelfUsage:
    def __init__(self):
        self.a = 42

    def no_self(self, num):
        num = num + 2
        print(num)

# You would fix it as follows by moving it outside the class:
def no_self(num):
    num = num + 2
    print(num)
```

### E0202: Method hidden {#E0202}

If you accidentally mask a method with an attribute, it can cause other code
to attempt to invoke what it believes to be a method, which will fail since
it has become a field instead (a variable). The syntax will cause the program
to raise an error.

```python
class Example(object):
    def field(self, num):
        return num
    def __init__(self):
        self.field = 'Masking the function with this string'

# If you call Example().field(num), it will yield an error since we masked it
```

### E0203: Access to member before definition {#E0203}

Before trying to use a member of a class, it should have been defined at
some point. If you try to use it before assigning to it, Python cannot
resolve the value and an error will occur.

```python
class MyClass:
    def __init__(self):
        print(self.a)  # Haven't defined self.a yet, can't use
        self.a = 5
```

### E0211: No method argument {#E0211}

Each method in a class needs to have at least one argument (which is usually
_self_). Python uses this to call methods, and the first argument is populated
with the object that is calling the method. This is what allows you to access
the calling object.

For example, the following two are equivalent:

```python
class A:
    def __init__(self):
        pass
    def method(self):
        print('Hi')

a = A()
a.method()   # Calls 'method' on object 'a' (this is how you should do it).
A.method(a)  # Also calls 'method' on object 'a' in a different way.
```

Therefore, if you do not provide any arguments, then Python does not know
how to pass the object to the method, and it will error out. To fix this,
put _self_ in the parenthesis for the method call.

```python
class MyClass:
    def __init__(self):
        pass
    def method():
        print('Missing argument for method definition')
```

### E0213: Self as the first argument {#E0213}

The first argument should be the exact word 'self'. This is not an error,
but it's such a common practice that this is considered an error. The
following is an example of a good, and bad example:

```python
class MyClass:
    def __init__(self):
        pass
    
    def methodA(something):  # Should be the argument 'self', not 'something'.
        pass

    def methodB(self):  # Good.
        pass
```

### E0239: Inheriting from a non-class {#E0239}

When you inherit, it must come from a class. If you use something that is
not a class, you won't be able to inherit from it. In the following example,
trying to inherit from a string is not allowed. While a string is a class,
this is passing in an object rather than the actual class itself.

```python
class newclass("str"):
    pass
```

### E0241: Duplicate bases {#E0241}

When inheriting, you should only specify a class once to inherit from,
multiple times is an error:

```python
class A:
    pass
    
class B(A, A):  # Only include A once to inherit properly
    pass
```

### E0302: Unexpected special method signature {#E0302}

Occurs when a special method (has underscores on both sides) does not have
the expected number of arguments. Python comes with an expected signature
of arguments, and if we create a method with the same name and a different
amount of arguments, it can cause exceptions to be raised.

```python
class A:
    def __init__(self):
        pass
    def __str__(self):  # Good, this is what is expected.
        return 'string'
        
class B:
    def __init__(self):
        pass
    def __str__(self, a):  # Bad, Python won't know what to put in 'a'.
        return 'string'
```

### E0701: Bad exception order {#E0701}

Except blocks are analyzed sequentially (from top to bottom) and the
block that meets the criteria for catching the exception first will be
used. This means if you have a more generic exception type before a
specific exception type, you will never trigger the code in the block
that is masked by the generic exception. This results in having dead
code.

It is also good practice since you want to narrow down the exception
type to be as specific as possible, since the more generic exception
may catch other types as well.

```python
def func(num):
    try:
        raise ZeroDivisionError()
    except Exception:
        print('This is always triggered')
    except ZeroDivisionError:
        print('Cannot ever be reached')

```

### E0702: Raising bad type {#E0702}

You have to raise an object that is an exception, you can't raise anything
like a number. If it does not descend at some point from an Exception class,
it should not be raised. To solve this issue, extend a new class from the 
Exception class, name it appropriately, and raise that.

```python
def raise_bad():
    raise 1
```

### E0704: Misplaced bare raise {#E0704}

When you call _raise_, it's usually to throw an exception. If you are inside
an 'except' block after you catch an exception, you can continue to pass on
the exception to later code. You may want to do this if your intention is to
capture a generated exception, then do something before passing it onwards
(such as maybe closing a file or some other sensitive operation that must
be done for program integrity that an exception would break). You can do this
by calling _raise_ on its own without a class as follows:

```python
def func():
    try:
        raise MyException()
    except MyException:
        # Do something important here (if needed).
        # Now, raise again what we just caught.
        raise
```

If you call _raise_ outside of an 'except' block, it can't work because there
is no exception to throw as seen in the following example:

```python
def bad_raise()
    # Bad example, needs to be in an 'except' block:
    raise
```

### E0710: Raising non-exception {#E0710}

You cannot raise an object that is not a descendant of Exception (which implies
being a child of BaseException). Anything you raise must at some point descend
from a class that inherits exception.

The solution is either to create your own exception, or to find a proper
exception that best describes the problem.

```python
class ClassWithNoExceptionParent:
    def __init__(self):
        pass

def throw_exception():
    raise ClassWithNoExceptionParent()
```

### E0711: Bad exception context {#E0711}

NotImplemented is intended to be a return value for methods, such as when you
create your own comparisons (ex: using __eq__), when what you actually want
is to throw the exception. Forgetting the suffix 'Error' is a common mistake
and do what you intended.

This is also related to another error where raising a non-exception is not
allowed.

```python
def call_exception():
    raise NotImplemented()
    # Should be: raise NotImplementedError()
```

### E0712: Catching non-exception {#E0712}

If your 'except' class uses a class that does not inherit from BaseException
at some point, then you are trying to catch an exception that is not a
well-defined exception. Your code should only try to catch exceptions
that extend from BaseException. Python requires you to raise exceptions
that derive from BaseException, and having a class type that does not extend
from this and being raised will cause a problem.

```python
# Notice how it does not extend from Exception (or BaseException for that matter)
class RandomClass:
    pass

def throw_exception():
    try
        n = 5 / 0  # Will throw a ZeroDivisionError
    except RandomClass:
        print('The above does not inherit from BaseException')
    except ZeroDivisionError:
        print('Will not be reached due to erroring out earlier')
```

### W0201: Attribute defined outside init {#W0201}

Any attribute you define for a class should be created inside the _init_
method. Defining it outside is considered bad practice as you might at
some point in the future introduce the same attribute in the class, and
any code that sets values outside may cause the program to break or
behave in unexpected ways.

Therefore you should always define your variables for the instance to
occur inside the _init_ method.

```python
class MyClass:
    def __init__(self):
        self.num = 1

c = MyClass()
c.other_num = 2  # This should be defined in __init__ first

# You should do this instead:
```python
class MyClass:
    def __init__(self):
        self.num = 1
        self.other_num = 2
```

### W0211: Bad static member {#W0211}

Static methods are methods that do not operate on instances. Including
one inside a class can be done if you feel the logic belongs inside the
class and should be encapsulated by it for clarity, but static methods
mean they do not operate on classes, and therefore 'self' is very likely
a programming error unless you know what you are doing (and even then,
it is a bad practice).

When you make a static method, you should not name any variable 'self'
to avoid confusion.

```python
class C:
    def __init__(self):
        self.num = 5
    
    @staticmethod
    def method(self):  # Static methods do not have a 'self'
        self.num += 1
```

### W0212: Protected member access {#W0212}

Variables starting with underscores are a convention that means the field should
not be accessed outside of the calling class. This encapsulation is a
hint to the user that they should not change the field as it may be
critical to the proper functioning of the object. Any field that does
not have an underscore the user may interact with. Furthermore, this also
applies to methods with underscores since calling them may also cause
adverse affects.

If you want to access a field with an underscore, check to see why it is
an underscore and change it to not having an underscore if you discover
that it does not need to be hidden from the user. If you are using any
other class from another developer, then you are assumed to not tamper
with the internals of their class.

```python
class MyClass:
    def __init__(self)
        self._num = 42

# Should not be calling the underscore field:
c = MyClass()
print(c._num)
```

### W0232: No init method {#W0232}

The _init_ method is invoked when an object is created. Therefore you
should always have some kind of initialization method for your classes.
Note that this also applies to classes which have parents who do not
define their own _init_ methods.

If you find that you do nothing in the initialization method, then you
should ask yourself why you are creating the object in the first place.
If an object does not store any values and you want to pass around a set
of methods, consider having a function that returns a function or look
into making a class with purely static methods.

```python
def ClassWithNoInit:
    # Missing the __init__ method here
    
    def return_forty_two(self):
        return 42
```

### W0222: Different method signature {#W0222}

When declaring a method in a child class, if you're going to provide a
method name that is the same as a method in the parent class, both the
parent and child should not differ in their signature (the number of
arguments).

When you have a method with the same name, the arguments should stay the
same.

```python
class Parent:
    def __init__(self):
        self.num = 2
    
    def return_num(self, multiple):
        return self.num * multiple

class Child(Parent):
    def __init__(self)
        Parent.__init__(self)
    
    def return_num(self):  # Missing argument (to keep signature identical)
        return 42
```

### W0231: Super init not called {#W0231}

When inheriting from a parent, you need to call the parent's _init_
method using itself as a parameter (or use _super_ if you are more
familiar with that). The whole goal of extending a class is to be
a child of the class you extend from, and properties that the parent
sets in its constructor would not be propagated into the child you are
creating.

Therefore you must always call the parent.

```python
class Parent:
    def __init__(self):
        self.num = 1

class Child(Parent):
    def __init__(self):
        Parent.__init__(self)  # You must have this
```

### W0233: Bad parent init {#W0233}

You should call the _init_ method of the parent, not some arbitrary and
unrelated class. To fix this, use the _init_ from the parent of the class
you are inheriting from.

```python
class ClassA:
    def __init__(self):
        pass

class Parent:
    def __init__(self):
        pass

class Child(Parent):
    def __init__(self):
        ClassA.__init__(self)  # Not a child of class A
```

### W0702: Bare exception {#W0702}

While you can catch any exception without specifying a class to catch after
the _except_ keyword, this is bad practice since it will mask other exceptions
that could appear which you do not want to catch, making your code not resilient
as it could be through .

Always provide the classes you expect to catch.

```python
def no_catching():
    try:
        raise TypeError()
    except:
        print('Requires an exception class')
```

### W0703: Exception is too generic {#W0703}

Similar to exception error W0702, if your exception is too generic then you
may end up burying errors since they will be always caught. Because of this,
you should not be using _except Exception_ as your except block since it can
catch exceptions you do not want caught.

```python
def generic_catch():
    try:
        a = 5 / 0
    except Exception:
        print('Got exception')
```

### W0705: Duplicate except blocks {#W0705}

When you list an exception to be caught, you should not list it again. Only
have one block for each exception. This does not include having child and 
parent exceptions, but rather it means don't have _exception MyException_,
and then later on when listing exceptions you have _exception MyException_
again.

```python
def repeat_except_blocks():
    try:
        raise Exception()
    except Exception:
        print('This is triggered')
    except Exception:
        print('Duplicate exception block')
```

### W0711: Binary op exception {#W0711}

The proper way to have an except block catch multiple exceptions is to have
the exception classes in a tuple. You can incorrectly write an except block 
in Python with multiple classes separated by an _or_ (see example). If you do
it the second way, the _or_ binary operator will not do what you think it does
-- in fact, the exception on the right side of the _or_ will not be caught and
proceed to be passed up the call stack (which likely will yield an uncaught
exception, terminating your program).

```python
class MyException(Exception):
        pass

class MyDoubleException(Exception):
        pass
        
def binary_capture():
        try:
                # Not caught, 'or' doesn't do what you think.
                # Need to do: except (MyException, MyDoubleException):
                raise MyDoubleException()
        except MyException or MyDoubleException:
                print('Will not detect MyDoubleException due to how "or" works')

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
