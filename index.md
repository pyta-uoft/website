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

Note: we set a limit of three nested if blocks.

~~~~ {.python include="R0101_too_many_nested_blocks.py"}
~~~~


### R0102: Simplifiable if statement {#R0102}

This error occurs when you have an if statement that can be simplified
simply by using the value of the condition, rather than putting in extra
`True` and `False` literals.

~~~~ {.python include="R0102_simplifiable_if_statement.py"}
~~~~

The above example can be simplified to:

```python
def is_even(num):
    """Return whether <num> is even or odd."""
    return num % 2 == 0
```


### R0204: Redefined variable type {#R0204}

This error occurs when the type of a variable changes inside a method or a 
function. See the examples below.

~~~~ {.python include="R0204_redefined_variable_type.py"}
~~~~


### E0401: Import error {#E0401}

The module is unable to be imported. Check the spelling of the module name, or
whether the module is in the correct directory.

~~~~ {.python include="E0401_import_error.py"}
~~~~

There are other forms of import statements that may cause this error, for
example:

```python
import missing_module as foo  # this module does not exist.
```


### W0406: Import self {#W0406}

A module should not import itself. So for example, if the module is named 
`W0406_import_self` you cannot import it as follows:

~~~~ {.python include="W0406_import_self.py"}
~~~~


### W0404: Reimported {#W0404}

A module should not be imported more than once.

~~~~ {.python include="W0404_reimported.py"}
~~~~


### W0401: Wildcard import {#W0401}

Only import what you need. Wildcard imports (shown below) are generally 
discouraged because they add all the functions from the imported module into the
global namespace. Problems can occur when identical names conflict.

~~~~ {.python include="W0401_wildcard_import.py"}
~~~~

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

~~~~ {.python include="C0411_wrong_import_order.py"}
~~~~


### C0413: Wrong import position {#C0413}

Imports should be placed at the top of the module above any other code 
(below the docstring).

~~~~ {.python include="C0413_wrong_import_position.py"}
~~~~


### C0412: Ungrouped imports {#C0412}

Imports should be grouped by packages.

~~~~ {.python include="C0412_ungrouped_imports.py"}
~~~~

Logically group the imports by same package name:

```python
from sys import byteorder  # same packages should be grouped
from sys import stdin  # same packages should be grouped
from math import floor
```


### C0410: Multiple imports {#C0410}

Don't import multiple modules on one line.

~~~~ {.python include="C0410_multiple_imports.py"}
~~~~

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

~~~~ {.python include="W1503_redundant_unittest_assert.py"}
~~~~


### R0913: Too many arguments {#R0913}

The function or method is defined with too many arguments.

Note: the limit is 5 arguments.

~~~~ {.python include="R0913_too_many_arguments.py"}
~~~~


### R0912: Too many branches {#R0912}

The function or method has too many branches, making it hard to follow.

Note: the limit is 12 branches.

~~~~ {.python include="R0912_too_many_branches.py"}
~~~~


### R0902: Too many instance attributes {#R0902}

The class has too many instance attributes, try to reduce this to get a
simpler (and easier to use) class.

Note: the limit is 7 instance attributes.

~~~~ {.python include="R0902_too_many_instance_attributes.py"}
~~~~

One solution is to logically decompose into more classes, each with fewer 
instance attributes. Then we can use composition to access those attributes in 
another class.

```python
class Edible(object):
    """Example with fewer instance attributes."""

    def __init__(self):
        """Below are the instance attributes:"""
        self.bread = "Sourdough"
        self.liquid = "Water"


class Ownership(object):
    """Example with fewer instance attributes."""

    def __init__(self):
        """Below are the instance attributes:"""
        self.animal = "Dog"
        self.clothing = "Shirt"


class Description(object):
    """Example with fewer instance attributes."""

    def __init__(self):
        """Below are the instance attributes:"""
        self.colour = "Black"
        self.shape = "Circle"
        self.direction = "Up"
        self.number = 3


class Composition(object):
    """Example showing composition of other classes into instance attributes."""

    def __init__(self):
        """Construct instance attributes. For example, 
        self.ownership.animal is "Dog"
        """
        self.edible = Edible()
        self.ownership = Ownership()
        self.description = Description()
```


### R0914: Too many locals {#R0914}

The function or method has too many local variables.

Note: the limit is 15 local variables.

~~~~ {.python include="R0914_too_many_locals.py"}
~~~~


### R0915: Too many statements {#R0915}

The function or method has too many statements. You should then split it
in smaller functions / methods.

Note: comments do not count as statements

Note: the limit is 50 statements.

~~~~ {.python include="R0915_too_many_statements.py"}
~~~~


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

~~~~ {.python include="C0102_blacklisted_name.py"}
~~~~


### C0103 Invalid Name {#C0103}

This error occurs when a name does not follow the format associated with to its type (constant, variable ...). 

- Variable/Attribute/Method/Argument: All variable/attribute/method/argument names should be of the form: a lowercase letter followed by a lowercase letter or digit. The minimum number of characters should be 2 and the maximum should be 30.

- Constant: All constant names should be of the form: an uppercase letter followed by a uppercase letter or digit.

- Class: All class names should be of the form: an uppercase letter followed by a lowercase letter or uppercase letter or digit.

A special character accepted in all types of names is '_'.

~~~~ {.python include="C0103_invalid_name.py"}
~~~~


### C0111 Missing Docstring {#C0111}

This error occurs when a module, function, class or method has no docstring. 
Some special methods like __init__ don't require a docstring. Students are 
expected to write docstrings for every module, function, class and method.

~~~~ {.python include="C0111_missing_docstring.py"}
~~~~


### C0112 Empty Docstring {#C0112}

This error occurs when a module, function, class or method has an empty 
docstring like,

```python
"""
"""
``` 

Students are expected to write complete docstrings for every module, 
function, class and method.

~~~~ {.python include="C0112_empty_docstring.py"}
~~~~


### C0113 Unneeded not {#C0113}

This error occurs when a boolean expression contains an unneeded negation. If 
you are getting this error, the expression can be simplified to not use a 
negation.

~~~~ {.python include="C0113_unneeded_not.py"}
~~~~

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

~~~~ {.python include="C0121_singleton_comparison.py"}
~~~~

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

~~~~ {.python include="C0123_unidiomatic_typecheck.py"}
~~~~

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

~~~~ {.python include="E0101_return_in_init.py"}
~~~~


### E0102 Function redefined {#E0102}

This error occurs when a function, class or method is redefined. If you are 
getting this error, you should make sure all the functions, methods and classes 
you define have different names.

~~~~ {.python include="E0102_function_redefined.py"}
~~~~


### E0103 Not in loop {#E0103}

This error occurs when `break` and `continue` keywords are used outside loops. 
The keyword `break` is used to exit a loop early and the keyword `continue` is 
used to skip an iteration in a loop. Hence both the keywords only belong inside 
loops.

~~~~ {.python include="E0103_not_in_loop.py"}
~~~~


### E0104 Return outside function {#E0104}

This error occurs when a `return` statement is found outside a function or 
method. If you are getting this error, please check the indentation levels in 
your code carefully.

~~~~ {.python include="E0104_return_outside_function.py"}
~~~~


### E0108 Duplicate argument name {E0108}

This error occurs if there are duplicate argument names in function 
definitions. If you are getting this error, please make sure all the arguments 
have distinct names.

~~~~ {.python include="E0108_duplicate_argument_name.py"}
~~~~


### W0101 Unreachable {#W0101}

This error occurs when there is some code behind a `return` or `raise` 
statement. This code will never be run.

~~~~ {.python include="W0101_unreachable.py"}
~~~~


### W0102 Dangerous default value {#W0102}

This error occurs when a mutable value such as a list or dictionary is given a 
default value in the function or method definition. It is dangerous to give 
mutable objects a default value only when the function/method modifies the 
argument. If you modify a default argument it will persist until the next call. 
Hence your "empty" list or dictionary will start to contain values on calls 
other than the first call.

~~~~ {.python include="W0102_dangerous_default_value.py"}
~~~~

Though the output to this is be expected to be:

```
[0, 1, 2, 3, 4]
[0, 1, 2, 3, 4]
```

The actual output is:

```
[0, 1, 2, 3, 4]
[0, 1, 2, 3, 4, 0, 1, 2, 3, 4]
```

If you want to avoid this situation then, you should use `None` as a default 
value. Students should be careful when assigning a default value to mutable 
objects.

### W0104 Pointless statement {#W0104}

This error occurs when a statement doesn't have any effect. This means that 
when the code for a statement is run, nothing is executed. This may not be what was 
intended.

~~~~ {.python include="W0104_pointless_statement.py"}
~~~~


### W0107 Unnecessary pass {#W0107}

This error occurs when a `pass` statement is used that can be avoided (or has 
no effect). If you are able to remove the `pass` statement without changing the 
effect of the program, then the statement is "unnecessary" and can be avoided.

~~~~ {.python include="W0107_unnecessary_pass.py"}
~~~~

In the above example, the `pass` statement is "unnecessary" as the program's 
effect is not changed if `pass` is removed.


### W0109 Duplicate key {#W0109}

This error occurs when a dictionary expression binds the same key multiple 
times.

~~~~ {.python include="W0109_duplicate_key.py"}
~~~~


### W0125 Using constant test {#W0125}

This error occurs when a conditional statement like an `if` statement uses a 
constant value for its test. This is bad as the conditional statements using a 
constant test always evaluate to the same value. In such a case, a conditional 
statement should not be used. 

~~~~ {.python include="W0125_using_constant_test.py"}
~~~~


### W0199 Assert on tuple {#W0199}

This error occurs when an "assert" statement is called like `assert (x, y)`. 
`assert` acting on a tuple always returns true if the tuple is non-empty, and 
false if it is empty. If you want to assert that two expressions are true then, 
you should use `assert x, y` instead.

~~~~ {.python include="W0199_assert_on_tuple.py"}
~~~~


### E0601: Used before assignment {#E0601}

This error occurs when you are using a variable before its assignment.

~~~~ {.python include="E0601_used_before_assignment.py"}
~~~~


### E0602: Undefined variable {#E0602}

This error occurs when you are using a variable that has not been defined.

~~~~ {.python include="E0602_undefined_variable.py"}
~~~~


### E0611: No name in module {#E0611}

This error occurs when you are trying to access a variable from an imported
module, but that variable name could not be found in that referenced module.

~~~~ {.python include="E0611_no_name_in_module.py"}
~~~~


### E0632: Unbalanced tuple unpacking {E0632}

This error occurs when you have an unbalance unpacking assignment with a
sequence.

Note: Number of label(s) on the left side and number of value(s) on the right
side must always be the same in an unpacking assignment.

~~~~ {.python include="E0632_unbalanced_tuple_unpacking.py"}
~~~~


### E0633: Unpacking non sequence {E0633}

This error occurs when the unpacked result is not a sequence. For example,
if in an unpacking assignment, the unpacked result is None, then it is not
a sequence and will raise this error.

~~~~ {.python include="E0633_unpacking_non_sequence.py"}
~~~~


### W0611: Unused import {W0611}

This error occurs when you have a imported module that is unused in your code.

~~~~ {.python include="W0611_unused_import.py"}
~~~~


### W0612: Unused variable {W0612}

This error occurs when you have defined a variable that is never used.

~~~~ {.python include="W0612_unused_variable.py"}
~~~~


### W0613: Unused argument {W0613}

This error occurs when a function argument is never used in the function.

~~~~ {.python include="W0613_unused_argument.py"}
~~~~


### W0621: Redefined outer name {W0621}

This error occurs when you are trying to redefine a variable name that has
already been defined in the outer scope. For example, this error will occurs
when you have a local name identical to a global name. The local name takes
precedence. but it hides the global name, makes it no longer accessible.

~~~~ {.python include="W0621_redefined_outer_name.py"}
~~~~


### W0622: Redefined builtin {W0622}

This error occurs when you are trying to redefine/override a built-in function.

~~~~ {.python include="W0622_redefined_builtin.py"}
~~~~


### W0631: Undefined loop variable {W0631}

This error occurs when a loop variable is possibly used outside the loop that
is undefined.

~~~~ {.python include="W0631_undefined_loop_variable.py"}
~~~~


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
