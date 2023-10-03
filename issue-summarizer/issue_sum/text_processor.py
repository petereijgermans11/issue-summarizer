from issue_sum.issue_agent import get_issue, get_comments


def aggregate_issue(issue_url, max_words=4097):
    """
    Aggregate over all text content pertaining to the issue at issue_url.
    :param issue_url: the URL location of the issue
    :param max_words: the max number of words for the summarized text
    :return: a string containing all texts associated to the given issue_url.
    """
    issue = get_issue(issue_url)
    comments = get_comments(issue_url)
    texts= [issue]
    [texts.append(c) for c in comments]
    return " ".join(texts)[:max_words]
