import subprocess
import os
import sys
from distutils.dir_util import copy_tree

FILES = ['index.md', 'quick_start.md']

if os.path.isfile('gen'):
    sys.exit('Error: "gen" already exists as a regular file')
os.makedirs('gen', exist_ok=True)

for file in FILES:
    completed_process = subprocess.run([
        'pandoc',
        '-o', os.path.join('gen', file.replace('.md', '.html')),
        '-s',
        '--template=pyta_template.html',
        '--highlight-style=zenburn',
        '-V',
        'root=./',
        file,
        '--filter',
        'filters/includes.py'
    ], stdout=subprocess.PIPE)

copy_tree('images', 'gen/images')  # overwrite existing location with copy_tree.
copy_tree('styles', 'gen/styles')
copy_tree('scripts', 'gen/scripts')

if not completed_process.returncode:
    print('Successful Build. Open gen/index.html to see the website.')
