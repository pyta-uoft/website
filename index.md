% PyTA Help Documentation

This is some welcome text.

## Pylint errors {#pylint}

### E1101: no-member {#E1101}

For your work in CSC148, we expect you to access an object(variable, function...)
for an existent member.

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

For your work in CSC148, we expect you call an object only if it has been
inferred to a callable object.

```python
x = 10
print(x())  # Error on this line
```

### E1111: assignment-from-no-return {#E1111}

For your work in CSC148, we expect you to assign to a function call with the
infered function does return an object.

```python
def f():
    print("s")

def g():
    x = f()  # Error on this line
    print(x)
```

### E1120: no-value-for-parameter {#E1120}

For your work in CSC148, we expect you to pass values for each argument (one for
 each) in a function.

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

For your work in CSC148, we expect you to pass values for each argument (one for
 each) in a function.

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

For your work in CSC148, we expect you to use a sequence indexed with a valid
type. Valid types are ints, slices, and objects with an __index__ method.

```python
a = ['p', 'y', 'T', 'A']
print(a['p'])   # Error on this line
```

### E1127: invalid-slice-index {#E1127}

For your work in CSC148, we expect you to use a slice index which is an integer,
None, or an object with an __index__ method.

```python
a = ['p', 'y', 'T', 'A']
print(a['p' : 'A'])      # Error on this line
```

### E1128: assignment-from-none {#E1128}

For your work in CSC148, we do not expect to see when an assignment is done on a
function call but the inferred function returns nothing but None.

```python
def f():
    return None


def g():
    x = f()  # Error on this line
    print(x)
```

### E1130: invalid-unary-operand-type {#E1130}

For your work in CSC148, we expect you to use the unary operand on the objects
which support this type of operation.

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

For your work in CSC148, we expect you to use two operands which support
binary arithmetic operation.

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

For your work in CSC148, we expect you to use an instance in membership test
expression which implement membership protocol(__contains__/__iter__/__getitem__).

```python
lst = 1132424
if 'a' in lst:
   print("unsupported membership test")  #Error on this line
```

### E1136: unsubscriptable-object {#E1136}

For your work in CSC148, we expect you to subscript value which support
subscription (i.e. defined __getitem__ method)

```python
a = [[1, 2], [5, 3], 5, [5, 6], [2, 2]]
for b in a:
    print(b[0])  # Error on this line
```

### E1303: format-needs-mapping {#E1303}

For your work in CSC148, we expect to see a format string that uses named
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

For your work in CSC148, we expect you to use one argument for a {}
for format string.

```python
"""pylint: too many format args.
"""
name = "Amy"
age = "17"
country = "England"
city = "London"

s = "{} who is {} lives in {}".format(name, age, country, city) # Error on this line
```

### E1306: too-few-format-args {#E1306}

For your work in CSC148, we expect you to use one argument for a {}
for format string.

```python
s = "{} and {}".format("first")  # Error on this line
```

### E1310: bad-str-strip-call {#E1310}

For your work in CSC148, we do not expect to see a constant string that
contains duplicate characters.

```python
foo = "tests"
foo.lstrip("java")  # Error on this line
```

### W1303: missing-format-argument-key {#W1303}

For your work in CSC148, we expect to see format string that uses named fields
receive required keywords.
```python
action = '{bond}, {james} {act}'.format(bond='bond', james='james') # Error on this line
```

### W1305: format-combined-specification {#W1305}

For your work in CSC148, we do not expect to see format string contains both
automatic field numbering (e.g. ‘{}’) and manual field specification (e.g. ‘{0}’).

```python
s = "{} and {0}".format("a", "b")  # Error on this line
```

### W1306: missing-format-attribute {#W1306}

For your work in CSC148, we expect to see the format string uses an attribute
specifier ({0.length}), and the argument passed for formatting has that attribute.

```python
s = '{.5}'.format('aaabbbccc')  # Error on this line
```

### W1307: invalid-format-index {#W1307}

For your work in CSC148, we expect to see a format string uses a lookup specifier
 ({a[1]}) with the argument passed for formatting contain that key as an attribute.

```python
geopoint = {'latitude':41.123}
point = '{0[latitude]} {0[longitude]}'.format(geopoint) # Error on this line
```

### W1401: anomalous-backslash-in-string {#W1401}

In CSC148, we do not expect to see a backslash is in a literal string but not
as an escape.

```python
print("\\\\\d{3}")  # Error on this line
```

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
