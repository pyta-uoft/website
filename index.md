% PyTA Help Documentation

This is some welcome text.

## Pylint errors {#pylint}

### C0111: Missing docstring {#C0111}

This is some helpful description of the C0111 error.

### C0102 Blacklisted name {#C0102}

This error occurs when a variable name is listed in the black list. The black 
list includes names like foo, bar, baz, toto, tata, tutu. Students 
are expected to use good variable names such as i, j, k, ex, Run. The example 
below uses blacklisted names.

```python 
def pos(obj):
    """
    @type obj: int
    @rtype: bool
    """
    foo = obj
    if foo < 0:
        return False
    else:
        return True
```

### C0103 Invalid Name {#C0103}

This error occurs when an invalid name is used as a variable name. All variable 
names should be of the form: a lowercase letter followed by a lowercase letter 
or digit. The minimum number of characters should be 2 and the maximum should 
be 30.

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
def is_true(obj):
    if obj is False:
        return False
    else:
        return True
```

### C0112 Empty Docstring {#C0112}

This error occurs when a module, function, class or method has an empty 
docstring. Students are expected to write complete docstrings for every module, 
function, class and method.

```python
def is_true(obj):
    """
    """
    if obj is False:
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
    @type obj: int
    @rtype: bool
    """
    temp = 5
    if temp == True:
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
    return type(obj) == "<type 'int'>"
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
Students are expected to not return anything in the __init__ method.

```python
class Animal:
    """An animal in the zoo.
    """
    
    def __init__(self, name):
        self.name = name
        return True
```

### E0102 Function redefined {#E0102}

This error occurs when a function, class or method is redefined. If you are 
getting this error, you should make sure all the functions, methods and classes 
have different names.

```python
def pos(obj):
    """
    @type obj: int
    @rtype: bool
    """
    if obj < 0:
        return False
    else:
        return True
        
        
def pos(obj):
    """
    @type obj: int
    @rtype: bool
    """
    if obj < 1:
        return False
    else:
        return True
```

### E0103 Not in loop {#E0103}

This error occurs when break and continue keywords are used outside loops.

```python
def add(lst):
    """ Calculates the sum of the elements in the given list.
    
    @type lst: list
    @rtype: int
    """
    temp = 0
    for item in lst:
        temp += item
    break # Error on this line
    return temp
```

### E0104 Return outside function {#E0104}

This error occurs when a "return" statement is found outside a function or 
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
        
return False # Error on this line
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

This error occurs when there is some code behind a "return" or "raise" 
statement. This code will never be accessed, therefore correct your code if you 
are getting this error. 

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
    temp += 1 # Error on this line
```

### W0102 Dangerous default value {#W0102}

This error occurs when a mutable value such as a list or dictionary is given a 
default value in the function or method definition.

```python
def add(lst=[]):
    """ Calculates the sum of the elements in the given list.

    @type lst: list
    @rtype: int
    """
    temp = 0
    for item in lst:
        temp += item
    return temp
```

### W0104 Pointless statement {#W0104}

This error occurs when a statement doesn't have any effect. This may not be 
what was intended.

```python
def add(lst):
    """
    @type lst: list
    @rtype: int
    """
    temp = 0
    for item in lst:
        temp += item
    temp # Error on this line
```

### W0105 Pointless string statement {#W0105}

This error occurs when string statement has no effect. This may not be 
what was intended. This error is a special 
case of the error W0104.

```python
def letters(lst):
    """
    @type lst: list
    @rtype: int
    """
    temp = ""
    for letter in lst:
        temp += letter + " "
    "end" # Error on this line
```

### W0106 Expression not assigned {#W0107}

This error occurs when an expression that is not a function call is not 
assigned to anything.
 
 ```python
 def add(lst):
    """
    @type lst: list
    @rtype: int
    """
    temp = 0
    for item in lst:
        temp += item
    5 + 2 # Error on this line
```

### W0107 Unnecessary pass {#W0107}

This error occurs when a "pass" statement is used that can be avoided (or has 
no effect).

```python
def add(lst):
    """
    @type lst: list
    @rtype: int
    """
    temp = 0
    for item in lst:
        temp += item
        pass # Error on this line
    return temp
```

### W0109 Duplicate key {#W0109}

This error occurs when a dictionary expression binds the same key multiple 
times.

```python
def check(obj):
    """
    @type obj: dict
    @rtype: bool
    """
    ex = {'runner1': '5km', 'runner1': '7km'}
    return ex == obj
```

### W0125 Using constant test {#W0125}

This error occurs when a conditional statement like an "if" statement uses a 
constant value for its test.

```python
def pos():
    """
    @rtype: bool
    """
    if 0: # Error on this line
        return False
    else:
        return True
```

### W0141 Bad builtin {#W0141}

This error occurs when a black listed built-in function such as map, filter, 
input and so on are used. Python now offers some cleaner alternatives like 
list comprehension. Students are expected to use only the features covered in 
lectures, or the ones we have explicitly mentioned for an 
exercise/lab/assignment.

```python
def pos(obj):
    """
    @type obj: int
    @rtype: bool
    """
    if obj < 0:
        return False
    else:
        return True

if __name__ == '__main__':
    filter(pos, [1, -4, 5]
```

### W0199 Assert on tuple {#W0199}

This error occurs when an "assert" statement is called like assert (x, y). 
Maybe assert x, y was intended.

```python
def check(ex1, ex2):
    """
    @type x: int
    @type y: int
    @rtype: None
    """
    assert (ex1, ex2) # Error on this line
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
