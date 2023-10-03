# Issue Summarizer

## Prerequisites:
1. You have conda already installed. See https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html#  how to install conda.
2. You have Docker installed and running. See https://docs.docker.com/get-docker/ how to install and setup Docker on your local machine.

## Run the API server as Docker container
Firstly make sure you have built a docker image from your project.

**Mind you:** you do not need to have installed a Conda environment if you only want to run the API server in 
Docker container.

In the project root directory:
````
docker build . -t issue_summarizer
````



Secondly, to run your API server, start the Docker container.
Before you type the command below, make sure that you have an OpenAI API key.
You can obtain an API key, by visiting your personal profile menu in OpenAI. 
See the help/instruction on the website of OpenAI.

In the project root directory:

````
OPENAI_API_KEY=<your API key> sh start_api_server.sh
````

## Developing and coding on your machine

*You may skip this paragraph if you are not going to develop and code within this project.*

Before you can start coding in this repo, you must have created first a Conda environment called `issue_summarizer`.
To create the environment, change directory to your project root and:

````
conda env create -f environment-dev.yml
````

Activate your environment in the terminal:

````
conda activate issue_summarizer
````

At this point you have created an environment containing the necessary python packages for development.
You may want to open this project in your favorite IDE.

Make sure you have read how to configure your IDE for using Conda environments and also how to link this project in 
your IDE with the Conda `issue_summerizer` environment.


## REST API INFO

Endpoint for summarizing content of an issue (POST method):
````
http://localhost:5000/github/issues/summarize
````

Example request payload:
````
{"issue_url": "https://api.github.com/repos/nodejs/node/issues/47880", "max_words": 500, "role": "dev"}
````

Example response payload:
````
{
    "summary": "The problem is with the use of '--loader' option in Node 20 which doesn't transpile TypeScript to JavaScript on the fly using 'ts-node/esm'. As a result, the Fastify's 'autoload' fails to load 'routes/health.ts', throwing an error. This problem is not encountered in Node 19, where 'ts-node/esm' is loaded successfully by Fastify's 'autoload'. Node 10 doesn't have this issue. The problem arose because 'ts-node/esm' hooks into the CommonJS loader ('require.extensions'), which doesn't work on the main user thread in Node 20 due to a recent update. This instability may be related to #47747, and it's suggested to roll back the \"off-thread loaders\" feature to the next major update to resolve it."
}
````