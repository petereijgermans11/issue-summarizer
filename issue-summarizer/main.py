from issue_sum.chatgpt_agent import summarize, init_openai
from issue_sum.text_processor import aggregate_issue

if __name__ == '__main__':
    init_openai()
    issue_url = 'https://api.github.com/repos/nodejs/node/issues/47880'
    texts = aggregate_issue(issue_url)
    print(f'Summarizing {issue_url} ...')
    summarization = summarize(texts, max_words=50)
    print(f'Summarization ended.')
    print(f'Summary of {issue_url}:\n\n{summarization}')
