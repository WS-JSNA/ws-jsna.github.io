import os
import re
from titlecase import titlecase

# Compile our regular expressions before a loop as per instructions at
# https://stackoverflow.com/questions/16720541/python-string-replace-regular-expression#16720705
# regex1 = re.compile()
# regex2 = re.compile()
# regex3 = re.compile()

with open('./url_list.txt') as f:
    for line in f:
    	# modify url (line) to create title (Replace slashes/hyphens with spaces, make title case and wrap in quotes)
    	title = re.sub(
    		r"[/|-]",
    		r" ",
    		line)
        title = re.sub(
            r"\n",
            r"",
            title)
        title = titlecase(title)
    	# modify url (line) to create permalink (Add quotes and leading slash)
    	permalink = re.sub(
    		r"\n",
    		"",
    		line)
    	permalink = "/" + permalink + "/"
    	# modify url (line) to create filename (Replace slashes with hyphens, except last one which should be replaced with ".md")
    	filename = re.sub(
    		r"/",
    		r"-",
    		line)
    	filename = re.sub(
    		r"\n",
    		r"",
    		filename) + ".md"
    	# Put elements together to create the file
    	command = "echo \"---\nlayout: single\ntitle: " + title + "\npermalink: " + permalink + "\nnav:\n  sidebar: \n---\n\" > " + filename
    	os.system(command)