from flask import Flask
from flask import request
from flask_cors import CORS

from issue_sum.chatgpt_agent import init_openai, summarize
from issue_sum.text_processor import aggregate_issue

app = Flask(__name__)
CORS(app)
init_openai()


@app.route("/")
def index():
    """
    Responds with a brief description of this API.
    :return: HTML markup containing API description info
    """
    return "<p>Issue summarizaton API: currently only supporting GitHub</p>"


@app.route("/health")
def ping():
    """
    Health check: whether the API is up. It returns a "pong" indicating the fact that the API is up.
    :return: "pong" plain text
    """
    return "pong"


@app.route("/github/issues/summarize", methods=['POST'])
def github_summarize():
    """
    Reads from the request the JSON payload containing issue_url, max_words and role keys.
    Perform a summarization on the content at issue_url and returns the summary text with a maximum of
    max_words. The summary text is written in an understandable language for a person in the given role.
    :return: json object containing the summarized issue content.
    """
    payload = request.json
    print(payload)
    issue_url = payload['issue_url']
    max_words = payload['max_words']
    role = payload['role']
    texts = aggregate_issue(issue_url)
    print(f'Summarizing {issue_url} ...')
    summarization = summarize(texts, max_words=max_words, role=role)
    print(f'Summarization ended.')
    print(f'Summary of {issue_url}:\n\n{summarization}')
    return {'summary': summarization}
