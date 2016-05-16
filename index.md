% PyTA Help Documentation

This is some welcome text.

## Pylint errors {#pylint}

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
