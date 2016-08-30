% PyTA Quick Start

This webpage is a brief introduction to PyTA, mainly intended for
students in CSC148.

## Installation

If you are in CSC148, please go to your course website and download
the starter file for your course. Inside will already contain a working version of PyTA.

If you aren't, then we'll assume you have a little more experience:
go to our [GitHub page](https://github.com/pyta-uoft/pyta) and clone the repo.
(You'll need to add the location of the `pyta` directory to your PYTHONPATH.
We're working on getting it into a proper package.)


## Starting out

To load PyTA, start the Python interpreter (in PyCharm, this is called the
Python Console) and run the following command:

```python
>>> import pyta
```

Then you can begin checking Python modules.
You can check any Python file in the current directory.
For example, if you have a file called 'hello.py', you can check it
as follows:

```python
>>> pyta.check_all('hello.py')
```

If you want to check a file which is in a subdirectory of your current location,
simply write the (relative) path to the file.

On Windows, use double backslashes to separate folders:

```python
>>> pyta.check_all('subfolder1\\sub2\\a\\my_file.py')
```

On Macs/Unix, use a forward slash instead:

```python
>>> pyta.check_all('subfolder1/sub2/a/my_file.py')
```

## Errors vs. warnings

PyTA distinguishes between two types of checks:

- logical errors and use of forbidden language features
- style errors or violating chosen conventions

The output of `pyta.check_all` divides the messages into two sections:

```
=== Code errors/forbidden usage (fix these right away!) ===
...

=== Style/convention errors (fix these before submission) ===
...
```

Note: the headings will always appear, even if you don't have any errors.
If there aren't any errors listed, the sections will simply be empty.

If you want to only see the logical errors and forbidden features
(useful for debugging purposes), use `pyta.check_errors` instead:

```python
>>> pyta.check_errors('hello.py')
```

## Accessing the documentation

If you find yourself wondering what an error message means, take
the five-letter error code (which is always of the form `E0401`),
and call the function:

```python
>>> pyta.doc('E0401')
```

The corresponding entry for this error code will appear on the documentation page.
