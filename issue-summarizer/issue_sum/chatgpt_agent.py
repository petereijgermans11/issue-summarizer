import os

import openai



def init_openai():
    """
    Initialize the openai client
    """
    openai.api_key = os.getenv("OPENAI_API_KEY")
    models = openai.Model.list()
    print(f'Supported models: {models}')


def summarize(text, max_words=200, model="gpt-3.5-turbo", role="dev"):
    """
    Summarize the given text in max_words and write the summary in an understandable language for person in the given
    role.
    Currently supported roles: dev (developer), pm (project manager).
    :param text: a string containing the (raw) issue text content
    :param max_words: the maximum number of words for the summarized text
    :param model: the chatGPT model. (default; gpt-3.5.-turbo)
    :param role: the role of the person. (default: dev= developer)
    :return: a json object containing the summarized text
    """

    if role == 'dev':
        summarization_request = f'Summarize the text in quotes and keep the number of words not more than {max_words}:"{text}"'
    elif role == 'pm':
        summarization_request = f'Summarize the text in quotes and keep the number of words not more than {max_words}. ' \
                            f'Write the summary in a non-technical manner for a project manager.:"{text}"'
    else:
        raise ValueError(f'Unkown role {role}')
    chat_completion = openai.ChatCompletion.create(model=model,
                                                   messages=[{"role": "user", "content": summarization_request}])
    return chat_completion['choices'][0]['message']['content']
