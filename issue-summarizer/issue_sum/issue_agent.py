import requests


def get_issue(issue_url):
    """
    Load the issue description text of the issue at issue_url.
    :param url: the URL location of the issue
    :return: a string containg the description of the issue
    """
    res = requests.get(issue_url, headers={'Accept': 'application/json'})
    issue = res.json()
    return issue['body']

def get_comments(issue_url):
    """
    Load all associated comments of the issue located at issuer_url
    :param url: the URL location of the issue
    :return: a list containing all comment texts associates with issue at issue_url.
    """
    res = requests.get(f'{issue_url}/comments', headers={'Accept': 'application/json'})
    comments = res.json()
    return [c['body'] for c in comments]