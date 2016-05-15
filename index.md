% PyTA Help Documentation

This is some welcome text.

## Pylint errors {#pylint}


### E0601: Used before assignment {#E0601}

This error occurs when you are using a variable before it's assignment.

```python
print(a)   # Error on this line
a = 1
```


### E0602: Undefined variable {#E0602}

This error occurs when you are using a variable that has not been defined.

```python
var1 = 1
var2 = None

print(var1)
print(var2)   # Error on this line
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

This error occurs when you have a possibly unbalance unpacking assignment
with a sequence.

Note: Number of label(s) on the left side and number of value(s) on the
right side must always be the same in an unpacking assignment.

```python
def set_values(var1, var2):

    var1 = 1
    var2 = 2
    return var1, var2

var2, var4, var5 = set_values(var1, var2)   # Error on this line. 3 on the
                                            # right side but only 2 on the
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
