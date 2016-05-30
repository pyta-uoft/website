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

### E1101: no-member {#E1101}

This error occurs when you access an object(variable, function...) for a non-exist
member. To be specific, you should not call a variable or function which is not
defined.


```python
class Rectangle:
    def __init__(self, width, height):
        """
        Initialize the Rectangle.

        @type self: Rectangle
        @type width: int
        @type height: int
        @rtype: None
        """
        self.width = width
        self.height = height

r = Rectangle(5, 4)

# no such member in Rectangle class
print(r.area())  # Error on this line
```

### E1102: not-callable {#E1102}

This error occurs when you call an object which has not been inferred to a
callable object. In the following example, we should not call x() because x is
a variable which is not callable.

```python
x = 10
print(x())  # Error on this line
```

### E1111: assignment-from-no-return {#E1111}

This error occurs when you assign to a function call with the inferred function
does not return an object. This error is similar to E1128. In the following example,
f() does not return anything. As a result, x has no value if we assign x f().

```python
def f():
    print("s")

def g():
    x = f()  # Error on this line
    print(x)
```

### E1120: no-value-for-parameter {#E1120}

We expect you to pass values for each argument (one for each) in a function.
In the following example, there should be three values passed to the function
instead of two.

```python
def get_sum(x, y, z):
    """
    Return the sum of x, y and z.

    @type x: int
    @type y: int
    @type z: int
    @rtype: int
    """
    return x + y + z

get_sum(1, 2) # Error on this line
```

Corrected version
```python
get_sum(1, 2, 3)
```

### E1121: too-many-function-args {#E1121}

This error indicates you should pass values for each argument (one for each) in a
function. It is just the opposite to E1121. In the following example, more
values are passed to the function.

```python
def get_sum(x, y):
    """
    Return the sum of x and y.

    @type x: int
    @type y: int
    @rtype: int
    """
    return x + y

get_sum(1, 2, 3)  # Error on this line
```

Corrected version
```python
get_sum(1, 2)
```

### E1126: invalid-sequence-index {#E1126}

This error occurs when a sequence indexed with an invalid type. For example,
inside a list, you should always use the index with type integer.

```python
a = ['p', 'y', 'T', 'A']
print(a['p'])   # Error on this line
```

Corrected version

```python
a = ['p', 'y', 'T', 'A']
print(a[0])      # Error on this line
```

### E1127: invalid-slice-index {#E1127}

This error occurs when you use a slice index with wrong types. For example,
inside a list, whenever you want to get slices of this list, you should use the
indexs which are integers to indicate where to start and stop.

```python
a = ['p', 'y', 'T', 'A']
print(a['p':'A'])      # Error on this line
```

Corrected version

```python
a = ['p', 'y', 'T', 'A']
print(a[0:3])
```

### E1128: assignment-from-none {#E1128}

This error occurs when an assignment is done on a function call but the inferred
function returns nothing but None. This error is similar to E1111. In the
following example, f() return None. As a result, x has no value if we assign
x f().

```python
def f():
    return None


def g():
    x = f()  # Error on this line
    print(x)
```

### E1130: invalid-unary-operand-type {#E1130}

This error occurs when the unary operand on the objects does not support this
type of operation. For example, we should never add string to integer.

```python
def info(age):
    """
    Return the info about my age.

    @type age: int
    @rtype: str
    """
    return "My age is" + age    # Error on this line
                                # corrected version: "My age is" + str(age)
info(2)
```

### E1131: unsupported-binary-operation {#E1131}

This error occurs when two operands do not support binary arithmetic operation.
For example, a dictionary could not be added to a list.

```python
def my_fuc(t, n):
    """Add <n> to <t>."""
    if type(t) is tuple:
        return t + (n, )
    else:
        return t + [n]  # Error on this line # thinks it is tuple

my_fuc(1, 2)
```

### E1135: unsupported-membership-test {#E1135}

This error occurs when you use an instance in membership test expression which
implement membership protocol. This error may be similar to E1101.
For example, if you want to check if a specific instance is inside another
object, please make sure the object has this kind of membership.

```python
lst = 1132424
if 'a' in lst:
   print("unsupported membership test")  #Error on this line
```

### E1136: unsubscriptable-object {#E1136}

This error occurs when you subscript value which does not support subscription.
In the following example, b[0] could not work on 5.

```python
a = [[1, 2], [5, 3], 5, [5, 6], [2, 2]]
for b in a:
    print(b[0])  # Error on this line
```

### E1305: too-many-format-args {#E1305}

This error occurs when you do not use one argument for a {} for format string.
This error is similar to E1121, meanwhile opposite to E1306.
In the following example, we give more values than the number of {}.

```python
name = "Amy"
age = "17"
country = "England"
city = "London"

s = "{} who is {} lives in {}".format(name, age, country, city) # Error on this line
```

Corrected version

```python
name = "Amy"
age = "17"
country = "England"

s = "{} who is {} lives in {}".format(name, age, country)
```

### E1306: too-few-format-args {#E1306}

This error occurs when you do not use one argument for a {} for format string.
This error is similar to E1120, meanwhile opposite to E1305.
In the following example, we give fewer values than the number of {}.

```python
s = "{} and {}".format("first")  # Error on this line
```

Corrected version

```python
s = "{} and {}".format("first", "second")
```

### E1310: bad-str-strip-call {#E1310}

This error occurs when a constant string contains duplicate characters.

```python
foo = "tests"
foo.lstrip("java")  # Error on this line
```

### W1303: missing-format-argument-key {#W1303}

This error occurs when a format string that uses named fields does not
receive required keywords. This error is similar to E1120 and E1306. In the
following example, we should assign three values for bond, james and act.

```python
action = '{bond}, {james} {act}'.format(bond='bond', james='james') # Error on this line
```

### W1305: format-combined-specification {#W1305}

This error occurs when a format string contains both automatic field numbering
(e.g. ‘{}’) and manual field specification (e.g. ‘{0}’).
For example, we should not use {} and {index} at the same time.

```python
s = "{} and {0}".format("a", "b")  # Error on this line
```

Corrected version

```python
s = "{} and {}".format("a", "b")
```
or

```python
s = "{0} and {1}".format("a", "b")
```

### W1401: anomalous-backslash-in-string {#W1401}

This error occurs when a backslash is in a literal string but not as an escape.

```python
print("\\\\\d{3}")  # Error on this line
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

### E9998: Forbidden IO function {#E9998}

We do not expect to see I/O functions(input, open and print) in your code in
this course. If you are getting this error, please check your code carefully.

```python
def hello():
    """Print a message to the user."""

    # You should not use input action in this assignment
    name = input("What is your name?")  # Error on this line

    # You should not use print action in this assignment
    print('hello, ' + name)  # Error on this line

if __name__ == '__main__':
    hello()
```

### E9996: Always Returning {#E9996}

You should not always return inside a loop body, which causes the loop to
only ever excute once. If you are getting this error, please check your code
carefully.

```python
def loop():
    # always returning in a for loop
    for j in range(0, 2):
        j += 1
        print("sss")
        if j < 2:
            j += 1
            for k in range(0, 2):  # Error on this line
                if k > 2:
                    return 1
                else:
                    return 1
        if j > 1:
            return 1
        else:
            j += 1
            return 1
    i = 0
    while i < 10:  # Error on this line
        if i > 2:
            return 2
        else:
            print(1)
        return 4
~~~~ {include="E9996_always_returning"}
~~~~
```

### E9991: Dynamic Execution {#E9991}

This error occurs when you use a dynamic execution of code. Use of builtin
functions exec(), eval() and compile() is not allowed.

```python
for i in range(0, 2):
    num = eval('i + 1')   # Error on this line
```
