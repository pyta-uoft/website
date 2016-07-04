import subprocess
import os
import sys
from shutil import copytree

if os.path.isfile('gen'):
    sys.exit('Error: "gen" already exists as a regular file')
os.makedirs('gen', exist_ok=True)

completed_process = subprocess.run([
    'pandoc',
    '-o', 'gen/index.html',
    '-s',
    '--template=pyta_template.html',
    '--highlight-style=zenburn',
    '-V',
    'root=./',
    'index.md',
    '--filter',
    'filters/includes.py'
], stdout=subprocess.PIPE)

copytree('styles', 'gen/styles')

if not completed_process.returncode:
    print("Successfully Built File: index.html")
