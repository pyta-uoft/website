#!/usr/bin/env python

"""
Process a CodeBlock and, if class is "include", search for the file in the
provided paths, and replace the CodeBlock with the (formatted) file contents.
"""

import sys
import os
import logging
from pandocfilters import toJSONFilter, CodeBlock

# Set the log level, and message format.
logging.basicConfig(format='', level=logging.DEBUG)

# Define all possible paths for examples defined to be included in the markdown
# file. For efficiency paths are listed in order of decreasing file amounts.
# Must end in backslash.
PATHS_TO_INCLUDED_CODE = ["../pyta/examples/pylint/", "../pyta/examples/"]


def _get_file_content(filename):
    """ Iterates through a list of potential directories,
    returns the content of a file, or None if not found.
    """

    # Check the mentioned directories for file.
    for pathname in PATHS_TO_INCLUDED_CODE:

        full_file_path = pathname + filename

        # Looks for the file in the list of possible paths.
        if os.path.isfile(full_file_path):
            # Given the relative path to the file, open it.
            # Automatically closes the file after finishes.
            with open(full_file_path, 'r') as content_file:
                content = content_file.read()

            # Break out of loop, and return the content.
            return content


def include_examples(key, value, format, meta):
    """ Replace code block sections with the code from a file.
    The file includes the extension. Code blocks look like:
    ~~~~ {.<language_name> include="filename"}
    ~~~~
    """

    # pandoc encounters a CodeBlock in the markdown file.
    if key == 'CodeBlock':
        # Unpack the values in the CodeBlock.
        # 'classes' is the name of the programming language.
        # 'namevals' is a list of the nameval and its value.
        # 'code' is content inside the CodeBlock.
        [[ident, classes, namevals], code] = value

        # Find the file, and place its contents into a CodeBlock element.
        for nameval in namevals:

            # Check the nameval of the CodeBlock, which looks like,
            # include="filename"
            if nameval[0] == 'include':

                # Get content from the file, or log a message of the file that
                # cannot be found.
                content = _get_file_content(nameval[1])
                if content is not None:
                    # Return the CodeBlock with the new content.
                    return CodeBlock([ident, classes, namevals], content)
                else:
                    # Emit message. [Check correctness of file and path names.]
                    logging.error("ERROR cant find file: {}".format(nameval[1]))


if __name__ == "__main__":
    toJSONFilter(include_examples)
