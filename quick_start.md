% PyTA Quick Start

This webpage is a brief introduction to PyTA, mainly intended for
students in CSC148.

## Installation

In PyCharm:

1. Open up the Settings dialog (Windows: File -> Settings..., Mac: PyCharm -> Preferences).
2. Go to Project <your project name>, and select Project Interpreter.
3. Make sure you have Python 3.6 selected in the "Project Interpreter" dropdown.
4. Click on the green **+** icon on the right side.
5. Search for `python-ta`, and press "Install Package".

In the command-line:

1. Simply do `pip install python-ta` (or `pip3`, if you have `pip` targeting a Python 2 installation).

## Starting out

The easiest way to run PyTA on a file is very similar to `doctest`.
Include the following lines in the `if __name__ == '__main__'` block of your file:

```python
if __name__ == '__main__':
    import python_ta
    python_ta.check_all()
```

Then when you run the file, PyTA will check your code in that file.
By default, a page will open in your web browser showing a PyTA report.

### Running PyTA in the Python interpreter

You can also run PyTA in the Python interpreter (in PyCharm, this is called the
Python Console) and run the following command:

```python
>>> import python_ta
```

Then you can begin checking Python modules.
You can check any Python file in the current directory.
For example, if you have a file called 'hello.py', you can check it
as follows:

```python
>>> python_ta.check_all('hello.py')
```

If you want to check a file which is in a subdirectory of your current location,
simply write the (relative) path to the file.

On Windows, use double backslashes to separate folders:

```python
>>> python_ta.check_all('subfolder1\\sub2\\a\\my_file.py')
```

On OSX/Unix, use a forward slash instead:

```python
>>> python_ta.check_all('subfolder1/sub2/a/my_file.py')
```

## Errors vs. warnings

PyTA distinguishes between two types of checks:

- logical errors and use of forbidden language features
- style errors or violating chosen conventions

The output of `python_ta.check_all` divides the messages into two sections.
Note that the headings will always appear, even if you don't have any errors.
If there aren't any errors listed, the sections will simply be empty.

If you want to only see the logical errors and forbidden features
(useful for debugging purposes), use `python_ta.check_errors` instead of `python_ta.check_all`:

```python
>>> python_ta.check_errors('hello.py')
```

## Accessing the documentation

If you find yourself wondering what an error message means, take
the five-letter error code (which is always of the form `E0401`),
and call the function:

```python
>>> python_ta.doc('E0401')
```

The corresponding entry for this error code will appear on the documentation page.

Or go to [PyTA documentation website](http://www.cs.toronto.edu/~david/pyta/)
