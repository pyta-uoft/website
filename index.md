% PyTA Help Documentation

This is some welcome text.

## Pylint errors {#pylint}

<<<<<<< HEAD
### E1101: no-member {#E1101}

We expect you to access an object(variable, function...) for an existent member.
For example, you should not call a variable or function which is not defined.
In the following example, the Rectangle class does not have the area()
method(member).


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

We expect you call an object only if it has been inferred to a callable object.
In the following example, x is a variable with value 10. We should not call x()
 because it is not callable.

```python
x = 10
print(x())  # Error on this line
```

### E1111: assignment-from-no-return {#E1111}

In Python, we expect you to assign to a function call with the infered function
does return an object. This error is similar to E1128. In the following example,
f() does not return anything. As a result, x has no value if we assign x f().
Remember! Whenever you define a function, return some objects otherwise it
could not be assigned.

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
instead of two. Remember not to leave any argument alone.

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

### E1121: too-many-function-args {#E1121}

In python, we expect you to pass values for each argument (one for each) in a
function. It is just the opposite to E1121. In the following example, more
values are passed to the function. Do not forget that each position just need
one value.

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

### E1126: invalid-sequence-index {#E1126}

For your work in python, we expect you to use a sequence indexed with a valid
type. Valid types are ints, slices, and objects with an __index__ method. For
 example, inside a list, you should always remember to use the "index" to
 indicate which element you want.  You should always keep in mind that in
 csc108/148, a slice index could only be integer.

```python
a = ['p', 'y', 'T', 'A']
print(a['p'])   # Error on this line
```

### E1127: invalid-slice-index {#E1127}

For your work in python, we expect you to use a slice index which is an integer,
None, or an object with an __index__ method. For example, inside a list, whenever
you want to get slices of this list, never use the elements but the "index". You
should always keep in mind that in csc108/148, a slice index could only be
integer.

```python
a = ['p', 'y', 'T', 'A']
print(a['p' : 'A'])      # Error on this line
```

### E1128: assignment-from-none {#E1128}

For your work in python, we do not expect to see when an assignment is done on a
function call but the inferred function returns nothing but None. This error is
similar to E1111. In the following example, f() return None. As a result, x has
no value if we assign x f(). Remember! Whenever you define a function, return
some objects otherwise it could not be assigned.

```python
def f():
    return None


def g():
    x = f()  # Error on this line
    print(x)
```

### E1130: invalid-unary-operand-type {#E1130}

For your work in python, we expect you to use the unary operand on the objects
which support this type of operation. For example, we should never add string
with integer. You can convert the integer to str by using str(integer).
Be careful when you try to add objects together.

```python
def info(age):
    """
    Return the info about my age.

    @type age: int
    @rtype: str
    """
    return "My age is" + age    # Error on this line

info(2)
```

### E1131: unsupported-binary-operation {#E1131}

For your work in python, we expect you to use two operands which support
binary arithmetic operation. For example, a dictionary could not be added to
a list. Make sure that you are adding objects which support binary arithmetic
operation. This error may be a little similar to E1130.

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

For your work in python, we expect you to use an instance in membership test
expression which implement membership protocol(__contains__/__iter__/__getitem__).
This error may be similar to E1101. For example, if you want to check if a
specific instance is inside another object, please make sure the object has this
kind of membership.

```python
lst = 1132424
if 'a' in lst:
   print("unsupported membership test")  #Error on this line
```

### E1136: unsubscriptable-object {#E1136}

For your work in python, we expect you to subscript value which support
subscription (i.e. defined __getitem__ method). In the following example, b[0]
could not work on 5, which is the third element of a(the list). As a result, we
should not subscript value when we could not determine that all elements inside
an object could be reached using the same method.


```python
a = [[1, 2], [5, 3], 5, [5, 6], [2, 2]]
for b in a:
    print(b[0])  # Error on this line
```

### E1303: format-needs-mapping {#E1303}

For your work in python, we expect to see a format string that uses named
conversion specifiers is used with an argument that is a mapping.

```python
gpl = "%(id)s : %(atr)s"

objects = [{'id': 1, 'content': [{'atr': 'big', 'no': 2}]},
           {'id': 2, 'content': [{'atr': 'small', 'no': 3}]}]

for obj in objects:
    for con in obj['content']:
        print(gpl % (obj, con))    # Error on this line
```


### E1305: too-many-format-args {#E1305}

For your work in python, we expect you to use one argument for a {}
for format string. This error is similar to E1121, also opposite to E1306.
In the following example, we give more values than {}. Remember to give a value
to a {} when we are using format string.

```python
name = "Amy"
age = "17"
country = "England"
city = "London"

s = "{} who is {} lives in {}".format(name, age, country, city) # Error on this line
```

### E1306: too-few-format-args {#E1306}

For your work in python, we expect you to use one argument for a {}
for format string. This error is similar to E1120, also opposite to E1305.
In the following example, we give fewer values than {}. Remember to give a value
to a {} when we are using format string.

```python
s = "{} and {}".format("first")  # Error on this line
```

### E1310: bad-str-strip-call {#E1310}

For your work in python, we do not expect to see a constant string that
contains duplicate characters.

```python
foo = "tests"
foo.lstrip("java")  # Error on this line
```

### W1303: missing-format-argument-key {#W1303}

For your work in python, we expect to see format string that uses named fields
receive required keywords. This error is similar to E1120 and E1306. In the
following example, we should assign three values for bond, james and act.

```python
action = '{bond}, {james} {act}'.format(bond='bond', james='james') # Error on this line
```

### W1305: format-combined-specification {#W1305}

For your work in python, we do not expect to see format string contains both
automatic field numbering (e.g. ‘{}’) and manual field specification (e.g. ‘{0}’).
For example, we should not use {} and {index} at the same time. This may be
confusing for python to recognize which value is for which field.

```python
s = "{} and {0}".format("a", "b")  # Error on this line
```

### W1306: missing-format-attribute {#W1306}

For your work in python, we expect to see the format string uses an attribute
specifier ({0.length}), and the argument passed for formatting has that attribute.
In the following example, we know string does not have the length attribute.
This means that we should never use{string.length} in format string.
```python
s = '{.5}'.format('aaabbbccc')  # Error on this line
```

### W1307: invalid-format-index {#W1307}

For your work in python, we expect to see a format string uses a lookup specifier
 ({a[1]}) with the argument passed for formatting contain that key as an attribute.
In the following example, there is no key as 'longitude' in geopoint which means
that there is no value for {0[longitude]} in the format string.

```python
geopoint = {'latitude':41.123}
point = '{0[latitude]} {0[longitude]}'.format(geopoint) # Error on this line
```

### W1401: anomalous-backslash-in-string {#W1401}

In python, we do not expect to see a backslash is in a literal string but not
as an escape.

```python
print("\\\\\d{3}")  # Error on this line
```

=======
>>>>>>> parent of 90294d0... index.md
### C0111: Missing docstring {#C0111}

This is some helpful description of the C0111 error.

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
