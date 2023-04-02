#!/usr/bin/python3
"""A Python script that takes in a URL, sends a request to the URL and displays the value of the X-Request-Id variable found in the header of the response."""
import sys
import urllib.request as urllib

if __name__ == "__main__":

    """Get url first from arguments list"""
    myurl = sys.argv[1]

    request = urllib.Request(myurl)

    """Open the response encoded"""
    with urllib.urlopen(request) as response:
        print(dict(response.headers).get("X-Request-Id"))
